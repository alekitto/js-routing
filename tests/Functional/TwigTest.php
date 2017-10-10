<?php declare(strict_types=1);

namespace Kcs\JsRouting\Tests\Functional;

use Kcs\JsRouting\Routing\Dumped\DumpedRoute;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class TwigTest extends WebTestCase
{
    protected static function createKernel(array $options = array())
    {
        return new Kernel('Twig');
    }

    public function testRouteExtractor()
    {
        $kernel = $this->createKernel();
        $kernel->boot();

        $container = $kernel->getContainer();
        $twig = $container->get('twig');

        $routes = '{"route_1":{"variables":[],"defaults":{},"tokens":[["text","\/route_1"]],"schemes":[],"hostTokens":[]},"route_3":{"variables":[],"defaults":{},"tokens":[["text","\/route_3"]],"schemes":[],"hostTokens":[]},"route_4":{"variables":[],"defaults":{},"tokens":[["text","\/route_4"]],"schemes":[],"hostTokens":[]}}';
        $this->assertEquals($routes, trim($twig->render('routes.js.twig')));

        $routes = '{"route_1":{"variables":[],"defaults":{},"tokens":[["text","\/route_1"]],"schemes":[],"hostTokens":[]},"route_3":{"variables":[],"defaults":{},"tokens":[["text","\/route_3"]],"schemes":[],"hostTokens":[]}}';
        $this->assertEquals($routes, trim($twig->render('routes.js.twig', [
            'section' => 'all'
        ])));
    }
}
