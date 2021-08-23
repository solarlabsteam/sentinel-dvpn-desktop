const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  lintOnSave: 'warning',
  pluginOptions: {
    electronBuilder: {
      preload: 'src/main/preload.js',
      mainProcessWatch: ['src/main/**']
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
  },
  chainWebpack (config) {
    config
      .resolve
      .alias
      .set('assets', path.resolve(__dirname, 'src/client/assets'))
  }
}
