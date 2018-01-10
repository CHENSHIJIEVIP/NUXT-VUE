module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'demo01',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'a nuxt-vue demo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  // loading: { color: 'red' },
  loading: { color: '#3B8070' },
  /*
  ** Page switching has a fade effect.
  */
  css: [
    'assets/main.css'
  ],
  /*
  ** The middleware is invoked when routing changes.
  */
  /*router: {
    middleware: 'stats'
  },*/

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
