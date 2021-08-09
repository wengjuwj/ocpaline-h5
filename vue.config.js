const path=require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  publicPath:'/',
  outputDir:'dist',
  assetsDir: 'static',
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "ocpaline",
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  css: {
      loaderOptions: {
          less: {
              lessOptions: {
                // modifyVars: {
                //   'primary-color': '#1DA57A',
                //   'link-color': '#1DA57A',
                //   'border-radius-base': '2px',
                // },
                javascriptEnabled: true,
              },
          },
      },
  },
}