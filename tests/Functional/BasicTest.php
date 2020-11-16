<?php declare(strict_types=1);

namespace Kcs\JsRouting\Tests\Functional;

use Kcs\JsRouting\Routing\Dumped\DumpedRoute;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class BasicTest extends WebTestCase
{
    protected static function createKernel(array $options = [])
    {
        return new Kernel('Basic');
    }

    public function testRouteExtractor(): void
    {
        $kernel = $this->createKernel();
        $kernel->boot();

        $container = $kernel->getContainer();

        $extractor = $container->get('test.public_route_extractor');

        self::assertEquals([
            'route_1' => new DumpedRoute([], [], [['text', '/route_1']], [], []),
            'route_3' => new DumpedRoute(['id'], [], [['variable', '/', '[^/]+', 'id'], ['text', '/route_3']], [], []),
            'route_4' => new DumpedRoute([], [], [['text', '/route_4']], [], []),
        ], $extractor->extract());

        self::assertEquals([
            'route_1' => new DumpedRoute([], [], [['text', '/route_1']], [], []),
            'route_3' => new DumpedRoute(['id'], [], [['variable', '/', '[^/]+', 'id'], ['text', '/route_3']], [], []),
        ], $extractor->extract('all'));

        self::assertEquals([
            'route_1' => new DumpedRoute([], [], [['text', '/route_1']], [], []),
        ], $extractor->extract('frontend'));

        self::assertEquals([
            'route_4' => new DumpedRoute([], [], [['text', '/route_4']], [], []),
        ], $extractor->extract('backend'));
    }
}
