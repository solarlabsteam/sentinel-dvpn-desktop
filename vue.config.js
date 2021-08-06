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
  }
}
