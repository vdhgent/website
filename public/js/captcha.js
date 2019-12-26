var captcha = {
    init: function() {
        if (null === document.getElementById('captcha')) {
            return;
        }

        grecaptcha.render(
            'captcha',
            {
                sitekey: '6LdKz8cUAAAAAEqhX9qPBd-RA2TqdRO-J2Ma9q0f',
                size: 'invisible',
                callback: captcha.onTokenReceived
            }
        );
    },
    onTokenReceived: function(token) {
        document.getElementById("contact-form").submit();
    },
    onSubmitClicked: function() {
        grecaptcha.execute();
    }
}

function onCaptchaScriptLoaded()
{
    captcha.init();
}
