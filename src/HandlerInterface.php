<?php

declare(strict_types=1);

namespace App;

interface HandlerInterface
{
    public function handle(): array;
}
