<?php declare(strict_types=1);

namespace Kcs\JsRouting\Tests\Routing;

use Kcs\JsRouting\Routing\RouteExtractor;
use PHPUnit\Framework\TestCase;
use Prophecy\PhpUnit\ProphecyTrait;
use Prophecy\Prophecy\ObjectProphecy;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\Routing\RouterInterface;

class RouteExtractorTest extends TestCase
{
    use ProphecyTrait;

    /**
     * @var RouterInterface|ObjectProphecy
     */
    private $router;

    /**
     * @var RouteExtractor
     */
    private $extractor;

    protected function setUp(): void
    {
        $this->router = $this->prophesize(RouterInterface::class);
        $this->extractor = new RouteExtractor($this->router->reveal());
    }

    public function provideCollection(): iterable
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
    public function testExtractShouldReturnAllExposedRoutes(RouteCollection $collection): void
    {
        $this->router->getRouteCollection()->willReturn($collection);

        $routes = $this->extractor->extract();
        self::assertArrayHasKey('route_1', $routes);
        self::assertArrayHasKey('route_2', $routes);
        self::assertArrayHasKey('route_3', $routes);
        self::assertArrayHasKey('route_4', $routes);
    }
}
