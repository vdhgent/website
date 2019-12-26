<?php

declare(strict_types=1);

namespace App;

class Parameter
{
    /**
     * @var null|array
     */
    private static $parameters = null;

    /**
     * @param string $name
     *
     * @return mixed
     *
     * @throws \LogicException
     */
    static function get(string $name)
    {
        if (null === self::$parameters) {
            self::$parameters = require_once __DIR__ . '/../config/parameters.php';
        }

        if (!isset(self::$parameters[$name])) {
            throw new \LogicException(sprintf("Unknown parameter %s", $name));
        }

        return self::$parameters[$name];
    }
}
