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
          target: 'deb',
          category: 'Utility'
        },
        mac: {
          target: 'pkg',
          category: 'public.app-category.utilities'
        },
        deb: {
          afterInstall: 'scripts/linux/after-install.sh',
          afterRemove: 'scripts/linux/after-uninstall.sh'
        },
        extraFiles: [
          {
            from: `scripts/${os}/`,
            to: `scripts/${os}/`
          }, {
            from: `bin/${os}`,
            to: `bin/${os}`
          }
        ],
        pkg: {
          scripts: 'scripts/mac'
        }
      }
    },
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/client/styles/variables/colors.scss'),
        path.resolve(__dirname, './src/client/styles/mixins/font.scss')
      ]
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
  }
}
