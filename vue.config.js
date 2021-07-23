module.exports = {
  lintOnSave: 'warning',
  pluginOptions: {
    electronBuilder: {
      preload: 'src/main/preload.js'
    }
  },
  devServer: {
    proxy: 'http://localhost:9090'
  }
}
