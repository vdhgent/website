<?php

require __DIR__.'/../vendor/autoload.php';

$requestHandler = new \App\RequestHandler(php_sapi_name() == 'cli-server');
$requestHandler->handle();
