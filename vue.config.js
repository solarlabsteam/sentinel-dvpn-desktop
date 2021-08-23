const path = require('path')

module.exports = {
  lintOnSave: 'warning',
  pluginOptions: {
    electronBuilder: {
      preload: 'src/main/preload.js',
      mainProcessWatch: ['src/main/**']
    }
  },
  devServer: {
    proxy: 'http://localhost:9090'
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/client/styles/index.scss";'
      }
    }
  },
  chainWebpack (config) {
    config
      .resolve
      .alias
      .set('assets', path.resolve(__dirname, 'src/client/assets'))
  }
}
