/* eslint-disable no-template-curly-in-string */

const os = require('os').platform()
const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  lintOnSave: 'warning',
  pluginOptions: {
    electronBuilder: {
      preload: 'src/main/preload.js',
      mainProcessWatch: [
        'src/main/**'
      ],
      mainProcessFile: 'src/main.js',
      rendererProcessFile: 'src/client.js',
      builderOptions: {
        linux: {
          target: ['deb', 'AppImage'],
          category: 'Utility',
          executableName: 'Sentinel dVPN',
          artifactName: '${productName}-${version}.${ext}'
        },
        deb: {
          afterInstall: 'scripts/linux/after-install.sh',
          depends: ['gconf2', 'gconf-service', 'libnotify4', 'libappindicator1', 'libxtst6', 'libnss3', 'openresolv', 'wireguard-tools'],
          afterRemove: 'scripts/linux/after-uninstall.sh',
          artifactName: '${productName}-${version}.${ext}'
        },
        extraFiles: [
          {
            from: `scripts/${os}/`,
            to: `scripts/${os}/`
          }, {
            from: `bin/${os}`,
            to: `bin/${os}`
          }
        ]
      }
    },
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/client/styles/variables/index.scss'),
        path.resolve(__dirname, './src/client/styles/mixins/font.scss')
      ]
    }
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['./src/**/*.{vue,scss}']
      })
    ]
  },
  devServer: {
    proxy: 'http://localhost:9090'
  }
}
