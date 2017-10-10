<?php declare(strict_types=1);

namespace Kcs\JsRouting\Routing;

use Kcs\JsRouting\Routing\Dumped\DumpedRoute;
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\Routing\RouterInterface;

class RouteExtractor implements RouteExtractorInterface
{
    /**
     * @var RouteCollection
     */
    protected $routes;

    public function __construct(RouterInterface $router)
    {
        $this->routes = $router->getRouteCollection();
    }

    public function extract(string $section = null): array
    {
        $routes = [];

        foreach ($this->routes as $name => $route) {
            $sections = $route->getOption('js_routing');
            if (null === $sections) {
                continue;
            }

            if (null !== $section && ! in_array($section, (array) $sections)) {
                continue;
            }

            $compiledRoute = $route->compile();

            $defaults = $route->getDefaults();
            unset($defaults['_controller']);

            $routes[$name] = new DumpedRoute(
                $compiledRoute->getVariables(),
                $defaults,
                $compiledRoute->getTokens(),
                $route->getSchemes(),
                $compiledRoute->getHostTokens()
            );
        }

        return $routes;
    }
}
