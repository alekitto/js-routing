<?php declare(strict_types=1);

namespace Kcs\JsRouting\Routing;

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
            $sections = (array) $route->getOption('js_routing');
            if (null !== $section && ! in_array($section, $sections)) {
                continue;
            }

            $compiledRoute = $route->compile();

            $defaults = $route->getDefaults();
            unset($defaults['_controller']);

            $routes[$name] = [
                'variables' => $compiledRoute->getVariables(),
                'defaults' => $defaults,
                'tokens' => $compiledRoute->getTokens(),
                'schemes' => $route->getSchemes(),
            ];
        }

        return $routes;
    }
}
