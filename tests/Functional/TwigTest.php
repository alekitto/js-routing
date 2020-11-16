<?php declare(strict_types=1);

namespace Kcs\JsRouting\Tests\Functional;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class TwigTest extends WebTestCase
{
    protected static function createKernel(array $options = [])
    {
        return new Kernel('Twig');
    }

    public function testRouteExtractor(): void
    {
        self::bootKernel();
        $twig = self::$container->get('twig');

        $routes = '{"route_1":{"variables":[],"defaults":{},"tokens":[["text","\/route_1"]],"schemes":[],"hostTokens":[]},"route_3":{"variables":[],"defaults":{},"tokens":[["text","\/route_3"]],"schemes":[],"hostTokens":[]},"route_4":{"variables":[],"defaults":{},"tokens":[["text","\/route_4"]],"schemes":[],"hostTokens":[]}}';
        self::assertEquals($routes, trim($twig->render('routes.js.twig')));

        $routes = '{"route_1":{"variables":[],"defaults":{},"tokens":[["text","\/route_1"]],"schemes":[],"hostTokens":[]},"route_3":{"variables":[],"defaults":{},"tokens":[["text","\/route_3"]],"schemes":[],"hostTokens":[]}}';
        self::assertEquals($routes, trim($twig->render('routes.js.twig', [
            'section' => 'all',
        ])));
    }
}
