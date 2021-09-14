const StyleLintPlugin = require('stylelint-webpack-plugin')
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  lintOnSave: 'warning',
  pluginOptions: {
    electronBuilder: {
      preload: 'src/main/preload.js',
      mainProcessWatch: ['src/main/**'],
      mainProcessFile: 'src/main.js',
      rendererProcessFile: 'src/client.js'
    }
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['./src/**/*.{vue,less}']
      })
    ]
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
  }
}
