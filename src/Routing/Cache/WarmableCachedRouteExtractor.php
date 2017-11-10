<?php declare(strict_types=1);

namespace Kcs\JsRouting\Routing\Cache;

use Symfony\Component\Config\ConfigCacheFactory;
use Symfony\Component\Config\ConfigCacheInterface;
use Symfony\Component\HttpKernel\CacheWarmer\WarmableInterface;
use Symfony\Component\Routing\RouterInterface;

/**
 * Cached route extractor which supports cache warming.
 */
final class WarmableCachedRouteExtractor extends CachedRouteExtractor implements WarmableInterface
{
    /**
     * @var RouterInterface
     */
    private $router;

    /**
     * @var bool
     */
    private $debug;

    public function __construct(RouterInterface $router, $cacheDir, $debug)
    {
        parent::__construct($router, $cacheDir, $debug);

        $this->router = $router;
        $this->debug = $debug;
    }

    /**
     * {@inheritdoc}
     */
    public function warmUp($cacheDir)
    {
        foreach ($this->getAllSections() as $section) {
            $configCacheFactory = new ConfigCacheFactory($this->debug);
            $configCacheFactory->cache($cacheDir.'/'.($section ?? '_all_routes').'.php',
                function (ConfigCacheInterface $cache) use ($section) {
                    $cache->write(
                        '<?php return '.var_export(parent::extract($section), true).';',
                        $this->routes->getResources()
                    );
                });
        }
    }

    /**
     * Extracts all the js-routing sections from route collection.
     *
     * @return string[]
     */
    private function getAllSections(): array
    {
        $sections = [];

        foreach ($this->router->getRouteCollection() as $route) {
            $routeSections = $route->getOption('js_routing');
            if (null === $routeSections) {
                continue;
            }

            $routeSections = (array) $routeSections;
            $sections = array_merge($sections, array_fill_keys($routeSections, true));
        }

        return array_keys($sections);
    }
}
