<?php declare(strict_types=1);

namespace Kcs\JsRouting\Tests\Routing;

use Kcs\JsRouting\Routing\RouteExtractor;
use PHPUnit\Framework\TestCase;
use Prophecy\Prophecy\ObjectProphecy;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\Routing\RouterInterface;

class RouteExtractorTest extends TestCase
{
    /**
     * @var RouterInterface|ObjectProphecy
     */
    private $router;

    /**
     * @var RouteExtractor
     */
    private $extractor;

    protected function setUp()
    {
        $this->router = $this->prophesize(RouterInterface::class);
        $this->extractor = new RouteExtractor($this->router->reveal());
    }

    public function provideCollection()
    {
        $collection = new RouteCollection();
        $collection->add('route_1', new Route('/', [], [], ['js_routing' => ['section_1', 'section_2']]));
        $collection->add('route_2', new Route('/', [], [], ['js_routing' => ['section_1']]));
        $collection->add('route_3', new Route('/', [], [], ['js_routing' => ['section_2']]));
        $collection->add('route_4', new Route('/', [], [], ['js_routing' => ['section_3']]));

        yield [$collection];
    }

    /**
     * @dataProvider provideCollection
     */
    public function testExtractShouldReturnAllExposedRoutes(RouteCollection $collection)
    {
        $this->router->getRouteCollection()->willReturn($collection);

        $routes = $this->extractor->extract();
        $this->assertArrayHasKey('route_1', $routes);
        $this->assertArrayHasKey('route_2', $routes);
        $this->assertArrayHasKey('route_3', $routes);
        $this->assertArrayHasKey('route_4', $routes);
    }
}
