<?php declare(strict_types=1);

namespace Kcs\JsRouting\Tests\Functional;

use Kcs\JsRouting\Routing\Dumped\DumpedRoute;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class BasicTest extends WebTestCase
{
    protected static function createKernel(array $options = array())
    {
        return new Kernel('Basic');
    }

    public function testRouteExtractor()
    {
        $kernel = $this->createKernel();
        $kernel->boot();

        $container = $kernel->getContainer();

        $extractor = $container->get('test.public_route_extractor');

        $this->assertEquals([
            'route_1' => new DumpedRoute([], [], [['text', '/route_1']], [], []),
            'route_3' => new DumpedRoute(['id'], [], [['variable', '/', '[^/]+', 'id'],['text', '/route_3']], [], []),
            'route_4' => new DumpedRoute([], [], [['text', '/route_4']], [], []),
        ], $extractor->extract());

        $this->assertEquals([
            'route_1' => new DumpedRoute([], [], [['text', '/route_1']], [], []),
            'route_3' => new DumpedRoute(['id'], [], [['variable', '/', '[^/]+', 'id'],['text', '/route_3']], [], []),
        ], $extractor->extract('all'));

        $this->assertEquals([
            'route_1' => new DumpedRoute([], [], [['text', '/route_1']], [], []),
        ], $extractor->extract('frontend'));

        $this->assertEquals([
            'route_4' => new DumpedRoute([], [], [['text', '/route_4']], [], []),
        ], $extractor->extract('backend'));
    }
}
