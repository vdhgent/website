var settings = {
    init: function() {
        settings.initEvents();
    },
    initEvents: function() {
        var checkboxWithBackgroundImage = document.getElementById('settingWithBackgroundImage');
        if (checkboxWithBackgroundImage) {
            checkboxWithBackgroundImage.addEventListener(
                'change',
                function() {
                    if(this.checked) {
                        settings.enableBackgroundImage();
                    } else {
                        settings.disableBackgroundImage();
                    }
                }
            );
        }
    },
    get: function() {
        var cookieSettings = cookies.get('settings');
        if (! cookieSettings) {
            return  {};
        }

        return JSON.parse(cookieSettings);
    },
    set: function(name, value) {
        var currentSettings = settings.get();
        currentSettings[name] = value;

        cookies.set('settings', JSON.stringify(currentSettings));
    },
    enableBackgroundImage: function() {
        settings.set('withBackgroundImage', true);
        document.getElementsByTagName('body')[0].classList.add('with-background-image');
    },
    disableBackgroundImage: function() {
        settings.set('withBackgroundImage', false);
        document.getElementsByTagName('body')[0].classList.remove('with-background-image');
    }
};

settings.init();
