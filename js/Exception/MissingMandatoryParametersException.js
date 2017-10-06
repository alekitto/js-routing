const InvalidArgumentException = require('./InvalidArgumentException');

/**
 * Exception thrown when a route cannot be generated because of missing
 * mandatory parameters.
 */
class MissingMandatoryParametersException extends InvalidArgumentException {
}

module.exports = MissingMandatoryParametersException;
