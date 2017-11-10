<?php declare(strict_types=1);

namespace Kcs\JsRouting\Routing\Cache;

use Kcs\JsRouting\Routing\RouteExtractorInterface;
use Symfony\Component\HttpKernel\CacheWarmer\CacheWarmerInterface;
use Symfony\Component\HttpKernel\CacheWarmer\WarmableInterface;

/**
 * Warms up the routing cache.
 */
final class CacheWarmer implements CacheWarmerInterface
{
    /**
     * @var RouteExtractorInterface
     */
    private $extractor;

    public function __construct(RouteExtractorInterface $extractor)
    {
        $this->extractor = $extractor;
    }

    /**
     * {@inheritdoc}
     */
    public function warmUp($cacheDir)
    {
        if ($this->extractor instanceof WarmableInterface) {
            $this->extractor->warmUp($cacheDir);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function isOptional()
    {
        return true;
    }
}
