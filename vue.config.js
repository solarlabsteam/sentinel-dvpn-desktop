const os = require('os').platform()
const StyleLintPlugin = require('stylelint-webpack-plugin')

process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  lintOnSave: 'warning',
  pluginOptions: {
    electronBuilder: {
      preload: 'src/main/preload.js',
      mainProcessWatch: ['src/main/**'],
      mainProcessFile: 'src/main.js',
      rendererProcessFile: 'src/client.js',
      builderOptions: {
        linux: {
          target: 'deb',
          category: 'Utility'
          // icon: 'icons/icon.png'
        },
        deb: {
          afterInstall: 'scripts/linux/after-install.sh',
          afterRemove: 'scripts/linux/after-uninstall.sh'
        },
        extraFiles: [{
          from: `scripts/${os}/`,
          to: `scripts/${os}/`
        }, {
          from: `bin/${os}`,
          to: `bin/${os}`
        }]
      }
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
