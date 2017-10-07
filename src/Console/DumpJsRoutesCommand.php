<?php declare(strict_types=1);

namespace Kcs\JsRouting\Console;

use Kcs\JsRouting\Routing\RouteExtractorInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Exception\InvalidArgumentException;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\NullOutput;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class DumpJsRoutesCommand extends Command
{
    /**
     * @var SymfonyStyle
     */
    private $io;

    /**
     * @var resource
     */
    private $outFile;

    /**
     * @var RouteExtractorInterface
     */
    private $extractor;

    public function __construct(RouteExtractorInterface $extractor, $name = 'kcs:js-routing:dump')
    {
        parent::__construct($name);
        $this->extractor = $extractor;
    }

    public function configure()
    {
        $this
            ->addOption('section', null, InputOption::VALUE_REQUIRED | InputOption::VALUE_IS_ARRAY, 'Dump only the given sections')
            ->addOption('module', null, InputOption::VALUE_NONE, 'Export the generator as an ES6 module')
            ->addOption('global', null, InputOption::VALUE_REQUIRED, 'Register the generator as a property of the global object with the given name')
            ->addOption('out', 'o', InputOption::VALUE_REQUIRED, 'Define the output file', '-')
        ;
    }

    protected function initialize(InputInterface $input, OutputInterface $output)
    {
        $outFile = $input->getOption('out');
        if ('-' === $outFile) {
            $output = new NullOutput();
            $this->outFile = STDOUT;
        } else {
            $this->outFile = @fopen($outFile, 'w+');

            if (false === $this->outFile) {
                throw new \RuntimeException('Unable to open file "'.$outFile.'": '.error_get_last()['message']);
            }
        }

        if (! $input->getOption('module') && null === $input->getOption('global')) {
            $input->setOption('global', 'Routing');
        }

        $this->io = new SymfonyStyle($input, $output);
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $sections = $input->getOption('section');
        $this->io->text('Dumping routes for <info>' . ($sections ? '"' . implode(', ', $sections) . '"' : 'all') . '</info> sections...');

        $routes = $this->extractor->extract($sections ?: null);

        $isModule = $input->getOption('module');
        $js = ($isModule ? 'const' : 'var') . ' routing = new UrlGenerator('.json_encode($routes).");\n";

        if ($isModule) {
            $js .= "\nexport default routing;\n";
        }

        if ($global = $input->getOption('global')) {
            $js .= "window.$global = routing;";
        }

        $js .= "\n";

        fwrite($this->outFile, $js);
        fflush($this->outFile);

        $this->io->success('Successfully dumped.');
    }
}
