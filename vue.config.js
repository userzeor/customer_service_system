/*
 * @Descripttion: webpack配置文件
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-27 14:37:09
 * @LastEditors: userzero
 * @LastEditTime: 2019-07-31 17:47:04
 */
// const mockdata = require('./src/mock/index.json')
const path = require('path')

const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/'

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'dist', // 打包生成的生产环境构建文件的目录
  assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启 生产环境的 source map?
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
    // // 移除 prefetch 插件
    // config.plugins.delete('prefetch')
    // // 移除 preload 插件
    // config.plugins.delete('preload')
    // // 压缩代码
    // config.optimization.minimize(true)
    // // 分割代码
    // config.optimization.splitChunks({
    //   chunks: 'all'
    // })
  },
  css: {
    modules: false, // 启用 CSS modules
    extract: IS_PROD, // 是否使用css分离插件
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/theme']
      }
    } // css预设器配置项
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    port: 10086, // 端口
    proxy: {
      '/api': {
        target: 'http://dev.eva-game.com/', //dev.eva-game.com
        changeOrigin: true,
        ws: true,
        https: false,
        pathRewrite: { '^/api': '/api' }
      }
    } // 设置代理
    // before(app) {
    //   app.get('/index/getTabList', (req, res, next) => {
    //     res.json(mockdata)
    //     next()
    //   })
    //   app.get('/index/getFindTab', (req, res, next) => {
    //     res.json(mockdata)
    //     next()
    //   })
    // }
  }
}
