export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    ssr: true,
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
        title: "PenseZLAvenir",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: "Série de conférences sur la Bible" }
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
        ],
        scripts: [{
                src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
            },
            /*
                        {
                            type: "text/javascript",
                            id: "hs-script-loader",
                            async,
                            defer,
                            src: "https://js.hs-scripts.com/8548131.js",
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
        {
            src: "@/plugins/vue-countdown.client",
            mode: "client"
        },
        {
            src: "@/plugins/vue-storage-watcher.client",
            mode: "client"
        },
        {
            src: "@/plugins/google-analytics.client",
            mode: "client"
        }
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
        /*  ['@nuxtjs/firebase',  {
        config: {

        },
        onFirebaseHosting: true,
        services: {
            realtimeDb: true,
        },
        messaging: {}
    }],*/
        ['nuxt-i18n', {
            lazy: true,
            langDir: 'lang/',
            defaultLocale: 'fr',
            locales: [
                /*{
                                    name: 'English',
                                    code: 'en',
                                    iso: 'en-US',
                                    file: 'en-US.js'
                                },*/
                {
                    name: 'Français',
                    code: 'fr',
                    iso: 'fr-FR',
                    file: 'fr-FR.js'
                }
            ],
        }],
        /*['@nuxtjs/pwa', {
                                    manifest: {
                                        name: "Pensez l'avenir",
                                        lang: 'fr',
                                        orientation: 'portrait',
                                        useWebmanifestExtension: false
                                    }
                                }],
                                ['nuxt-twa-module', {
                                defaultUrl: 'https://think-future-app.web.app',
                                defaultUrl: 'https://think-future-app.web.app',
                                sha256Fingerprints: [],
                                applicationId: 'tv.pensezlavenir.app',
                                launcherName: "Pensez l'avenir",
                                versionCode: 1,
                                versionName: '1.0',
                                statusBarColor: '#163F77',
                                iconPath: '/static/icon.png',
                                distFolder: '.nuxt/dist/client',
                            }] */
        [
            '@nuxtjs/axios',
            {

            }
        ]
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
        },
        extend(config, ctx) {
            if (ctx.isDev) {
                config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
            }
        }
    },
    generate: {

    },
}