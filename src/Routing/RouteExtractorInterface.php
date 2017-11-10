<?php declare(strict_types=1);

namespace Kcs\JsRouting\Routing;

use Kcs\JsRouting\Routing\Dumped\DumpedRoute;

/**
 * Extracts informations from routes and compiles them
 * to be suitable for the js version of the url generator.
 */
interface RouteExtractorInterface
{
    /**
     * Extracts routes and compiles informations for the js
     * version of url generator.
     * If section is null all the exposable routes should be dumped.
     *
     * @param string|null $section
     *
     * @return DumpedRoute[]
     */
    public function extract(string $section = null): array;
}
