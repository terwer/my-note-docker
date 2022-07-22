const {defineConfig} = require('@vue/cli-service')
const isPro = process.env.NODE_ENV === 'production'
const publicPath = isPro ? '' : '/'
// const path = require('path')
// const resolve = (dir) => path.join(__dirname, dir)

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

// 配置参考：https://www.pudn.com/news/62a7142b194b3b0e43577e16.html
// 官方文档：https://cli.vuejs.org/config/#publicpath
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: publicPath,
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    }
})
