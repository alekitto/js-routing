<?php declare(strict_types=1);

namespace Kcs\JsRouting\Bundle\DependencyInjection;

use Symfony\Bundle\TwigBundle\TwigBundle;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\Console\Application;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader\XmlFileLoader;

class JsRoutingExtension extends Extension
{
    public function load(array $configs, ContainerBuilder $container)
    {
        $loader = new XmlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('routing.xml');

        if (class_exists(Application::class)) {
            $loader->load('commands.xml');
        }

        if (class_exists(TwigBundle::class)) {
            $loader->load('twig.xml');
        }
    }
}
