export default {
    buildModules: [
        '@nuxtjs/style-resources'
    ],
    css: ['~/assets/scss/main'],
    styleResources: {
        scss: [
            '~assets/scss/variables.scss',
        ]
    },
    head: {
        title: 'Thomas Vanderhaeghen - Freelance PHP developer',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'my website description'
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
    }
}
