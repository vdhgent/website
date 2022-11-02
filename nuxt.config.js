export default {
    modules: [
        '@nuxtjs/i18n',
    ],
    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/google-fonts'
    ],
    css: ['~/assets/scss/main'],
    styleResources: {
        scss: [
            '~assets/scss/variables.scss',
        ]
    },
    i18n: {
        locales: [
            { code: 'en', iso: 'en', file: 'en.json', flag: 'gb', name: 'English' },
            { code: 'nl', iso: 'nl', file: 'nl.json', flag: 'nl', name: 'Nederlands' },
            { code: 'fr', iso: 'fr', file: 'fr.json', flag: 'fr', name: 'français' },
            // { code: 'it', iso: 'it', file: 'it.json', flag: 'it', name: 'italiano' },
        ],
        defaultLocale: 'en',
        langDir: '~/translations/',
        useCookie: true,
        vueI18n: {
            fallbackLocale: 'en',
            datetimeFormats: {
                "en": {
                    "long": {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }
                },
                "nl": {
                    "long": {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }
                },
                "fr": {
                    "long": {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }
                },
                "it": {
                    "long": {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }
                }
            }
        }
    },
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        title: 'Thomas Vanderhaeghen - Freelance PHP developer.',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'Thomas Vanderhaeghen, freelance php and react developer. Currently available from 03/01/2023.'
            },
            {name: "msapplication-TileColor", content: "#ffffff"},
            {name: "theme-color", content: "#ffffff"}
        ],
        link: [
            {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
            {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
            {rel: 'manifest', href: '/site.webmanifest'},
            {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffffff'},
        ]
    },
    googleFonts: {
        preload: true,
        families: {
            Bevan: true,
            Oxygen: true
        }
    }
}
