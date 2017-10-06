<?php declare(strict_types=1);

namespace Kcs\JsRouting\Twig;

use Kcs\JsRouting\Routing\RouteExtractorInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class JsRoutingExtension extends AbstractExtension
{
    /**
     * @var RouteExtractorInterface
     */
    private $extractor;

    public function __construct(RouteExtractorInterface $extractor)
    {
        $this->extractor = $extractor;
    }

    public function getFunctions()
    {
        yield new TwigFunction('js_routing_routes', [$this->extractor, 'extract'], ['is_safe' => ['html', 'js']]);
    }
}
