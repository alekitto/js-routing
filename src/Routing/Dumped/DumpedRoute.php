<?php declare(strict_types=1);

namespace Kcs\JsRouting\Routing\Dumped;

final class DumpedRoute implements \JsonSerializable
{
    /**
     * @var string[]
     */
    private $variables;

    /**
     * @var array[string]string
     */
    private $defaults;

    /**
     * @var string[][]
     */
    private $tokens;

    /**
     * @var string[]
     */
    private $schemes;

    /**
     * @var string[][]
     */
    private $hostTokens;

    public function __construct(array $variables, array $defaults, array $tokens, array $schemes, array $hostTokens)
    {
        $this->variables = $variables;
        $this->defaults = $defaults;
        $this->tokens = self::cleanTokens($tokens);
        $this->schemes = $schemes;
        $this->hostTokens = self::cleanTokens($hostTokens);
    }

    /**
     * @return string[]
     */
    public function getVariables(): array
    {
        return $this->variables;
    }

    /**
     * @return array
     */
    public function getDefaults(): array
    {
        return $this->defaults;
    }

    /**
     * @return \string[][]
     */
    public function getTokens(): array
    {
        return $this->tokens;
    }

    /**
     * @return string[]
     */
    public function getSchemes(): array
    {
        return $this->schemes;
    }

    /**
     * @return \string[][]
     */
    public function getHostTokens(): array
    {
        return $this->hostTokens;
    }

    /**
     * Restore from var_export'd value.
     *
     * @param array $state
     *
     * @return self
     */
    public static function __set_state(array $state): self
    {
        return new self($state['variables'], $state['defaults'], $state['tokens'], $state['schemes'], $state['hostTokens']);
    }

    public function jsonSerialize()
    {
        return [
            'variables' => $this->variables,
            'defaults' => $this->defaults ?: new \ArrayObject(),
            'tokens' => $this->tokens,
            'schemes' => $this->schemes,
            'hostTokens' => $this->hostTokens,
        ];
    }

    private static function cleanTokens(array $tokens)
    {
        foreach ($tokens as &$token) {
            if (! isset($token[2])) {
                continue;
            }

            $token[2] = str_replace('++', '+', $token[2]);
        }

        return $tokens;
    }
}
