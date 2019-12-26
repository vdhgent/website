<?php

declare(strict_types=1);

namespace App;

use Postmark\PostmarkClient;

class ContactHandler implements HandlerInterface
{
    /**
     * @return array
     */
    public function handle(): array
    {
        if (! Captcha::verify()) {
            return ['formError' => 'Captcha failed'];
        }

        $name    = $_POST['name'] ?? '';
        $email   = $_POST['email'] ?? '';
        $message = $_POST['message'] ?? '';

        if (! $this->validate($name, $email, $message)) {
            return ['formError' => 'Form is not valid'];
        }

        $client = new PostmarkClient(Parameter::get('postmark_token'));
        $body = <<<BODY
name: $name
email: $email

$message
BODY;

        $sendResult = $client->sendEmail(
            'info@tmas.me',
            'info@tmas.me',
            'Website contact',
            nl2br($body),
            $body,
            null,
            true,
            $email
        );

        return ['formSuccess' => true];
    }

    /**
     * @param string $name
     * @param string $email
     * @param string $message
     *
     * @return bool
     */
    private function validate(string $name, string $email, string $message): bool
    {
        if (empty($name)) {
            return false;
        }

        if (empty($email)) {
            return false;
        }

        if (! filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }

        if (empty($message)) {
            return false;
        }

        return true;
    }
}
