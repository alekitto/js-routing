require('@jymfony/util/lib/Object/entries');
require('@jymfony/util/lib/String/strtr');

const InvalidParameterException = require('./Exception/InvalidParameterException');
const MissingMandatoryParametersException = require('./Exception/MissingMandatoryParametersException');
const RouteNotFoundException = require('./Exception/RouteNotFoundException');

const decodedChars = {
    '%2F': '/',
    '%40': '@',
    '%3A': ':',
    '%3B': ';',
    '%2C': ',',
    '%3D': '=',
    '%2B': '+',
    '%21': '!',
    '%2A': '*',
    '%7C': '|',
};

class UrlGenerator {
    constructor(routeCollection) {
        this._routeCollection = Object.assign({}, routeCollection);

        const scheme = location.protocol.replace(/:$/, '').toLowerCase();
        const isSecure = scheme === 'https';

        this._context = {
            pathinfo: location.pathname,
            host: location.hostname,
            scheme,
            httpPort: isSecure ? 80 : ~~(location.port || 80),
            httpsPort: isSecure ? ~~(location.port || 443) : 443,
            queryString: location.search.replace(/^\?/, ''),
        };
    }

    /**
     * Add routes to router collection.
     *
     * @param {Object<string, Object>} routeCollection
     */
    addRoutes(routeCollection) {
        for (const [ name, route ] of Object.entries(routeCollection)) {
            this._routeCollection[name] = route;
        }
    }

    /**
     * Generates a URL or path for a specific route based on the given parameters.
     *
     * Parameters that reference placeholders in the route pattern will substitute them in the
     * path or host. Extra params are added as query string to the URL.
     *
     * When the passed reference type cannot be generated for the route because it requires a different
     * host or scheme than the current one, the method will return a more comprehensive reference
     * that includes the required params. For example, when you call this method with referenceType = ABSOLUTE_PATH
     * but the route requires the https scheme whereas the current scheme is http, it will instead return an
     * ABSOLUTE_URL with the https scheme and the current host. This makes sure the generated URL matches
     * the route in any case.
     *
     * Will throw an error if there is no route with the given name
     *
     * The special parameter _fragment will be used as the document fragment suffixed to the final URL.
     *
     * @param {string} name
     * @param {Object<string, *>} parameters
     * @param {int} referenceType
     *
     * @returns {string}
     */
    generate(name, parameters = {}, referenceType = UrlGenerator.ABSOLUTE_PATH) {
        const route = this._routeCollection[name];
        if (void 0 === route) {
            throw new RouteNotFoundException(`Unable to generate a URL for the named route "${name}" as such route does not exist.`);
        }

        return this._doGenerate(
            route.variables,
            route.defaults,
            route.tokens,
            parameters,
            name,
            referenceType,
            route.hostTokens,
            route.schemes
        );
    }

    /**
     * Do generate an address from route components.
     *
     * @param {string[]} variables
     * @param {Object<string, string>} defaults
     * @param {[[string]]} tokens
     * @param {Object<string, *>} parameters
     * @param {string} name
     * @param {int} referenceType
     * @param {[[string]]} hostTokens
     * @param {string} requiredSchemes
     *
     * @returns {string}
     *
     * @private
     */
    _doGenerate(variables, defaults, tokens, parameters, name, referenceType, hostTokens, requiredSchemes = []) {
        const mergedParams = Object.assign({}, defaults, parameters);

        const diff = variables.filter(name => !mergedParams.hasOwnProperty(name));
        if (diff.length) {
            throw new MissingMandatoryParametersException(`Some mandatory parameters are missing ("${diff.join('", "')}") to generate a URL for route "${name}".`)
        }

        let url = '';
        let optional = true;
        const message = 'Parameter "{parameter}" for route "{route}" must match "{expected}" ("{given}" given) to generate a corresponding URL.';

        for (const token of tokens) {
            if ('variable' === token[0]) {
                if (!optional || !defaults.hasOwnProperty(token[3]) || void 0 !== mergedParams[token[3]] && mergedParams[token[3]].toString() !== defaults[token[3]].toString()) {
                    const regex = new RegExp('^' + token[2] + '$', !!token[4] ? 'u' : '');
                    if (! regex.test(mergedParams[token[3]])) {
                        throw new InvalidParameterException(
                            __jymfony.strtr(message, {
                                '{parameter}': token[3],
                                '{route}': name,
                                '{expected}': token[2],
                                '{given}': mergedParams[token[3]]
                            })
                        );
                    }

                    url = token[1] + mergedParams[token[3]] + url;
                    optional = false;
                }
            } else {
                url = token[1] + url;
                optional = false;
            }
        }

        if (url === '') {
            url = '/';
        }

        url = strtr(
            encodeURIComponent(url)
                .replace(/'/g, '%27')
                .replace(/\(/g, '%28')
                .replace(/\)/g, '%29'),
            decodedChars
        );

        // the path segments "." and ".." are interpreted as relative reference when resolving a URI; see http://tools.ietf.org/html/rfc3986#section-3.3
        // so we need to encode them as they are not used for this purpose here
        // otherwise we would generate a URI that, when followed by a user agent (e.g. browser), does not match this route
        url = strtr(url, {'/../': '/%2E%2E/', '/./': '/%2E/'});
        if ('/..' === url.substr(-3)) {
            url = url.substr(0, -2) + '%2E%2E';
        } else if ('/.' === url.substr(-2)) {
            url = url.substr(0, -1) + '%2E';
        }

        let schemeAuthority = '';
        let host = this._context.host;
        if (!! host) {
            let scheme = this._context.scheme;
            if (requiredSchemes.length) {
                if (requiredSchemes.indexOf(scheme) === -1) {
                    referenceType = UrlGenerator.ABSOLUTE_URL;
                    scheme = requiredSchemes[0];
                }
            }

            if (hostTokens.length) {
                let routeHost = '';
                for (const token of hostTokens) {
                    if ('variable' === token[0]) {
                        const regex = new RegExp('^' + token[2] + '$', !!token[4] ? 'u' : '');
                        if (! regex.test(mergedParams[token[3]])) {
                            throw new InvalidParameterException(
                                __jymfony.strtr(message, {
                                    '{parameter}': token[3],
                                    '{route}': name,
                                    '{expected}': token[2],
                                    '{given}': mergedParams[token[3]]
                                })
                            );
                        }

                        routeHost = token[1] + mergedParams[token[3]] + routeHost;
                    } else {
                        routeHost = token[1] + routeHost;
                    }
                }

                if (routeHost !== host) {
                    host = routeHost;
                    if (UrlGenerator.ABSOLUTE_URL !== referenceType) {
                        referenceType = UrlGenerator.NETWORK_PATH;
                    }
                }
            }

            if (UrlGenerator.ABSOLUTE_URL === referenceType || UrlGenerator.NETWORK_PATH === referenceType) {
                let port = '';
                if ('http' === scheme && 80 !== this._context.httpPort) {
                    port += ':' + this._context.httpPort;
                } else if ('https' === scheme && 443 !== this._context.httpsPort) {
                    port += ':' + this._context.httpsPort;
                }

                schemeAuthority = UrlGenerator.NETWORK_PATH === referenceType ? '//' : `${scheme}://`;
                schemeAuthority += host + port;
            }
        }

        if (UrlGenerator.RELATIVE_PATH === referenceType) {
            url = UrlGenerator.getRelativePath(this._context.pathinfo, url);
        } else {
            url = schemeAuthority + url;
        }

        // add a query string if needed
        const extras = Object.keys(parameters)
            .filter(name => {
                if (variables.indexOf(name) !== -1) {
                    return false;
                }

                if (defaults.hasOwnProperty(name)) {
                    return defaults[name] == parameters[name];
                }

                return true;
            });

        // extract fragment
        let fragment = '';
        if (defaults._fragment) {
            fragment = defaults._fragment;
        }

        let idx;
        if ((idx = extras.indexOf('_fragment')) !== -1) {
            fragment = parameters._fragment;
            delete extras[idx];
        }

        if (extras.length) {
            const query = Object.keys(parameters)
                .filter(k => extras.indexOf(k) !== -1)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(parameters[k]))
                .join('&');

            url += '?' + __jymfony.strtr(query, {'%2F': '/'});
        }

        if ('' !== fragment) {
            fragment = encodeURIComponent(fragment)
                .replace(/!/g, '%21')
                .replace(/'/g, '%27')
                .replace(/\(/g, '%28')
                .replace(/\)/g, '%29')
                .replace(/\*/g, '%2A');

            url += '#' + __jymfony.strtr(fragment, {'%2F': '/', '%3F': '?'});
        }

        return url;
    }

    /**
     * Returns the target path as relative reference from the base path.
     *
     * Only the URIs path component (no schema, host etc.) is relevant and must be given, starting with a slash.
     * Both paths must be absolute and not contain relative parts.
     * Relative URLs from one resource to another are useful when generating self-contained downloadable document archives.
     * Furthermore, they can be used to reduce the link size in documents.
     *
     * Example target paths, given a base path of "/a/b/c/d":
     * - "/a/b/c/d"     -> ""
     * - "/a/b/c/"      -> "./"
     * - "/a/b/"        -> "../"
     * - "/a/b/c/other" -> "other"
     * - "/a/x/y"       -> "../../x/y"
     *
     * @param {string} basePath   The base path
     * @param {string} targetPath The target path
     *
     * @returns {string} The relative target path
     */
    static getRelativePath(basePath, targetPath) {
        if (basePath === targetPath) {
            return '';
        }

        const sourceDirs = ('/' === basePath.charAt(0) ? basePath.substr(1) : basePath).split('/');
        const targetDirs = ('/' === targetPath.charAt(0) ? targetPath.substr(1) : targetPath).split('/');

        sourceDirs.pop();
        const targetFile = targetDirs.pop();

        for (const [ i, dir ] of __jymfony.getEntries(sourceDirs)) {
            if (targetDirs[i] && dir === targetDirs[i]) {
                delete sourceDirs[i];
                delete targetDirs[i];
            } else {
                break;
            }
        }

        targetDirs.push(targetFile);
        const path = '../'.repeat(sourceDirs.length) + targetDirs.join('/');

        // A reference to the same base directory or an empty subdirectory must be prefixed with "./".
        // This also applies to a segment with a colon character (e.g., "file:colon") that cannot be used
        // as the first segment of a relative-path reference, as it would be mistaken for a scheme name
        // (see http://tools.ietf.org/html/rfc3986#section-4.2).
        let colonPos, slashPos;
        return '' === path || '/' === path.charAt(0)
            || -1 !== (colonPos = path.indexOf(':')) && (colonPos < (slashPos = path.indexOf('/')) || -1 === slashPos)
            ? `./${path}` : path;
    }
}

/**
 * Generates an absolute URL, e.g. "http://example.com/dir/file".
 */
UrlGenerator.ABSOLUTE_URL = 0;

/**
 * Generates an absolute path, e.g. "/dir/file".
 */
UrlGenerator.ABSOLUTE_PATH = 1;

/**
 * Generates a relative path based on the current request path, e.g. "../parent-file".
 *
 * @see UrlGenerator.getRelativePath()
 */
UrlGenerator.RELATIVE_PATH = 2;

/**
 * Generates a network path, e.g. "//example.com/dir/file".
 * Such reference reuses the current scheme but specifies the host.
 */
UrlGenerator.NETWORK_PATH = 3;

module.exports = UrlGenerator;
