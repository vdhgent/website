<?php

declare(strict_types=1);

namespace App;

use GuzzleHttp\Client;

class Captcha
{
    /**
     * @return bool
     */
    public static function verify(): bool
    {
        $data = [
            'secret'  => Parameter::get('recaptcha_secret'),
            'response' => $_POST['g-recaptcha-response'] ?? null
        ];

        $client = new Client();
        $response = $client->post(
            'https://www.google.com/recaptcha/api/siteverify',
            [ 'form_params' => $data ]
        );

        $responseContent = json_decode($response->getBody()->getContents(), true);

        return $responseContent['success'];
    }
}
