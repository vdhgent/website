var pagination = {
    onPageClick: function(element) {
        if (typeof window.fetch === 'undefined') {
            return true;
        }

        pagination.load(element.getAttribute('href'));

        return false;
    },
    load: function(url) {
        // Add loader
        var main = document.getElementsByTagName('main')[0];
        main.innerHTML = '<div style="font-size: 4em; text-align: center; margin-top: 30%"><div class="lds-ripple"><div></div><div></div></div></div>';
        document.getElementsByTagName('main')[0].scrollIntoView({'behavior': 'smooth'});

        // activate/disactivate menu items
        var menuList = document.getElementsByTagName('aside')[0].getElementsByTagName('li');
        for (var i = 0; i < menuList.length; i++) {
            var activeElement = menuList[i];

            if (activeElement.classList.contains('active')) {
                activeElement.classList.remove('active');
            }

            if (activeElement.getElementsByTagName('a')[0].getAttribute('href') === url) {
                activeElement.classList.add('active');
            }
        };

        // Ajax fetch page and initate captcha (if needed)
        fetch(url + '?ajax=true').then(async (response) => {
            document.getElementsByTagName('main')[0].innerHTML = await response.text();
            captcha.init();
            document.getElementsByTagName('main')[0].scrollIntoView({'behavior': 'smooth'});
        });

        // Add url to history
        window.history.pushState('', '', url);
    }
}
