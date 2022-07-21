const {defineConfig} = require('@vue/cli-service'),
    isPro = process.env.NODE_ENV === 'production',
    publicPath = isPro ? '' : '/',
    path = require('path'),
    resolve = (dir) => path.join(__dirname, dir)

// 配置参考：https://www.pudn.com/news/62a7142b194b3b0e43577e16.html
// 官方文档：https://cli.vuejs.org/config/#publicpath
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: publicPath
})
