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
        return require __DIR__ . '/' . $this->testCase . '/bundles.php';
    }

    public function getRootDir()
    {
        return __DIR__;
    }

    public function getCacheDir()
    {
        return sys_get_temp_dir().'/'.Kernel::VERSION.'/'.$this->testCase.'/cache/'.$this->environment;
    }

    public function getLogDir()
    {
        return sys_get_temp_dir().'/'.Kernel::VERSION.'/'.$this->testCase.'/logs';
    }

    protected function getContainerClass()
    {
        return $this->name.ucfirst($this->environment).($this->debug ? 'Debug' : '').$this->testCase.'ProjectContainer';
    }

    protected function initializeContainer()
    {
        $class = $this->getContainerClass();
        $cache = new ConfigCache($this->getCacheDir().'/'.$class.'.php', $this->debug);
        $container = $this->buildContainer();
        $container->compile();
        $this->dumpContainer($cache, $container, $class, $this->getContainerBaseClass());

        require_once $cache->getPath();

        $this->container = new $class();
        $this->container->set('kernel', $this);

        if ($this->container->has('cache_warmer')) {
            $this->container->get('cache_warmer')->warmUp($this->container->getParameter('kernel.cache_dir'));
        }
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(__DIR__ . '/' . $this->testCase . '/config.yml');
    }

    protected function getKernelParameters()
    {
        $parameters = parent::getKernelParameters();
        $parameters['kernel.test_case'] = $this->testCase;

        return $parameters;
    }
}
