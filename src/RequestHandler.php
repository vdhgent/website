<?php

declare(strict_types=1);

namespace App;

use Postmark\PostmarkClient;
use Twig\Loader\FilesystemLoader;

class RequestHandler
{
    /**
     * @var bool
     */
    private $debug;

    /**
     * @var \Twig\Environment
     */
    private $twig;

    /**
     * @var null|array
     */
    private $parameters;

    /**
     * RequestHandler constructor.
     *
     * @param bool $debug
     */
    public function __construct(bool $debug)
    {
        $loader      = new FilesystemLoader(__DIR__ . '/views');
        $this->debug = $debug;
        $this->twig  = new \Twig\Environment($loader, [
            'cache' => __DIR__ . '/../var/cache/twig',
            'debug' =>  $debug
        ]);

        if ($debug) {
            $this->twig->addExtension(new \Twig\Extension\DebugExtension());
        }

        $this->twig->addGlobal('debug', $debug);
    }

    /**
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function handle(): void
    {
        $path = parse_url($_SERVER['REQUEST_URI'] ?? 'about')['path'];
        $page = trim($path, '/');

        if (! file_exists(__DIR__ . '/views/' . $page . '.html.twig')) {
            $page = '404';
        }

        $viewParams = ['page' => $page, 'settings' => $this->getSettings()];
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $form       = new ContactHandler();
            $viewParams = array_merge($viewParams, $form->handle());
        }

        if ($this->isAjax()) {
            $this->twig->display($page . '.html.twig', $viewParams);

            return;
        }

        // HTTP/2 Server push header
        header($this->getHttp2ServerPushHeader());
        header('X-Frame-Options: SAMEORIGIN');
        header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
        header('X-Content-Type-Options: nosniff');
        header('Referrer-Policy: same-origin');
        header('Content-Security-Policy: default-src \'self\' \'unsafe-inline\' fonts.googleapis.com www.google.com tmas.me fonts.gstatic.com www.gstatic.com www.googletagmanager.com www.google-analytics.com');
        header('Feature-Policy: vibrate \'none\'');
        $this->twig->display('index.html.twig', $viewParams);
    }

    /**
     * @return string
     */
    private function getHttp2ServerPushHeader(): string
    {
        $pushes = [
            '</style.css>; rel=preload; as=style',
            '</images/profile.jpeg>; rel=preload; as=image'
        ];

        if ($this->debug) {
            $scripts = [
                '/js/cookies.js',
                '/js/captcha.js',
                '/js/settings.js',
                '/js/pagination.js'
            ];

            foreach ($scripts as $script) {
                $pushes[] = sprintf(
                    '<%s>; rel=preload; as=script',
                    $script
                );
            }
        } else {
            $pushes[] = '</bundle/bundle-min.js>; rel=preload; as=script';
        }

        return 'Link: ' . join(', ', $pushes);
    }

    /**
     * @return bool
     */
    private function isAjax(): bool
    {
        return strtolower($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') === 'xmlhttprequest' || ($_GET['ajax'] ?? false);
    }


    /**
     * @return array
     */
    private function getSettings(): array
    {
        $defaultSettings = [ 'withBackgroundImage' => false ];
        try  {
            $settings = json_decode($_COOKIE['settings'] ?? '[]', true, 128, JSON_THROW_ON_ERROR);
        } catch (\JsonException $e) {
            $settings = [];
        }

        return array_merge($defaultSettings, $settings);
    }
}


