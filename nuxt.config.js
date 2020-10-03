import pkg from './package'

export default {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,

        htmlAttrs: {
            lang: 'fr',
        },

        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'robots', content: 'index, follow'},
            {hid: 'description', name: 'description', content: pkg.description},
        ],

        link: [
            {rel: 'icon', type: 'image/png', href: 'static/favicon.png'},
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap',},
            { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',}
        ],

        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', body: true },
            { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js', body: true },
            { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', body: true }
        ],
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#ffffff'},

    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/main.scss'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        '@nuxt/http',
        '@nuxtjs/html-minifier'
    ],
    /*
    ** Axios module configuration
    */
   axios: {
    baseURL:"http://localhost/sites/ag_sophrologie/wp-json/wp/v2"
  },

    styleResources: {
        scss: [
            'assets/scss/_variables.scss',
            'assets/scss/_header.scss',
            'assets/scss/_footer.scss',
        ]
    },

    /*
    ** Build configuration
    */
    build: {
        minimize: true,
        extractCSS: false,
        extend(config, ctx) {
        },

        html: {
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeAttributeQuotes: false,
                removeComments: false,
                removeEmptyAttributes: true,
                removeOptionalTags: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: false,
                removeStyleLinkTypeAttributes: false,
                removeTagWhitespace: false,
                sortClassName: true,
                trimCustomFragments: true,
                useShortDoctype: true
            }
        }
    },

    generate: {
    },

    /* 
    ** Page transition 
    */
    pageTransition: {
        name: 'page',
        mode: 'out-in'
    },

    /* 
    ** Components 
    */
    components: true,

    router: {
        linkActiveClass: 'active-link',
        linkExactActiveClass: 'exact-active-link',
    }
}
