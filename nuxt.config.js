export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'static',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Bebas+Neue",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Roboto",
            },
            /*{
                rel: "stylesheet",
                href: "https://cdn.quilljs.com/1.2.6/quill.snow.css"
            }*/
        ]
    },
    /*
     ** Global CSS
     */
    css: [
        // swiper style
        'swiper/css/swiper.css',
    ],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [{
            src: "@/plugins/locomotive-scroll.client",
            mode: "client"
        },
        {
            src: '@/plugins/vue-awesome-swiper.client',
            mode: "client"
        },
        {
            src: "@/plugins/vuelidate"
        },
        {
            src: "@/plugins/vue-session.client",
            mode: "client"
        },
        {
            src: "@/plugins/vue-load-script.client",
            mode: "client"
        },
        {
            src: "@/plugins/form.client",
            mode: "client"
        },
        {
            src: "@/plugins/vue-popup.client",
            mode: "client"
        },
        /*
                {
                    src: '@/plugins/firebase',
                } */
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        /*  '@nuxtjs/firebase',*/
        'nuxt-i18n',
    ],
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        babel: {
            compact: true
        },
        html: {
            minify: {
                collapseBooleanAttributes: false,
                decodeEntities: false,
                minifyCSS: false,
                minifyJS: false,
                processConditionalComments: false,
                removeEmptyAttributes: false,
                removeRedundantAttributes: false,
                trimCustomFragments: false,
                useShortDoctype: false
            }
        }
    },
    generate: {

    },
    firebase: {
        config: {

        },
        onFirebaseHosting: true,
        services: {
            realtimeDb: true,
        },
        messaging: {}
    },
    i18n: {
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'fr',
        locales: [{
                name: 'English',
                code: 'en',
                iso: 'en-US',
                file: 'en-US.js'
            },
            {
                name: 'Français',
                code: 'fr',
                iso: 'fr-FR',
                file: 'fr-FR.js'
            }
        ],
    }
}