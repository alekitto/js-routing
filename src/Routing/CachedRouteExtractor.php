<?php declare(strict_types=1);

namespace Kcs\JsRouting\Routing;

use Symfony\Component\Config\ConfigCacheFactory;
use Symfony\Component\Config\ConfigCacheInterface;
use Symfony\Component\Routing\RouterInterface;

class CachedRouteExtractor extends RouteExtractor
{
    /**
     * @var string
     */
    private $cacheDir;

    /**
     * @var bool
     */
    private $debug;

    public function __construct(RouterInterface $router, string $cacheDir, bool $debug)
    {
        $this->cacheDir = $cacheDir;
        $this->debug = $debug;

        parent::__construct($router);
    }

    public function extract(string $section = null): array
    {
        $configCacheFactory = new ConfigCacheFactory($this->debug);
        $cache = $configCacheFactory->cache($this->cacheDir . '/' . ($section ?? '_all_routes') . '.php',
            function (ConfigCacheInterface $cache) use ($section) {
                $cache->write(
                    '<?php return ' . var_export(parent::extract($section), true) . ';',
                    $this->routes->getResources()
                );
            });

        return require $cache->getPath();
    }
}
