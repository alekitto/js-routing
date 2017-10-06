<?php declare(strict_types=1);

namespace Kcs\JsRouting\Routing;

interface RouteExtractorInterface
{
    public function extract(string $section = null): array;
}
