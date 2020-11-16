<?php declare(strict_types=1);

namespace Kcs\JsRouting\Tests\Functional;

use Symfony\Component\Config\ConfigCache;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\HttpKernel\Kernel as BaseKernel;

class Kernel extends BaseKernel
{
    /**
     * @var string
     */
    private $testCase;

    public function __construct(string $testCase)
    {
        $this->testCase = $testCase;

        parent::__construct('test', true);
    }

    public function registerBundles()
    {
        return require __DIR__.'/'.$this->testCase.'/bundles.php';
    }

    public function getCacheDir(): string
    {
        return sys_get_temp_dir().'/'.self::VERSION.'/'.$this->testCase.'/cache/'.$this->environment;
    }

    public function getLogDir(): string
    {
        return sys_get_temp_dir().'/'.self::VERSION.'/'.$this->testCase.'/logs';
    }

    public function registerContainerConfiguration(LoaderInterface $loader): void
    {
        $loader->load(__DIR__.'/'.$this->testCase.'/config.yml');
    }

    protected function getKernelParameters(): array
    {
        $parameters = parent::getKernelParameters();
        $parameters['kernel.test_case'] = $this->testCase;
        $parameters['kernel.root_dir'] = __DIR__;

        return $parameters;
    }
}
