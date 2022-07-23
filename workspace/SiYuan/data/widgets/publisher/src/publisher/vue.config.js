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
            // 自动导入组件
            // 现在有bug，IDEA不能自动建议
            // https://youtrack.jetbrains.com/issue/WEB-52214
            // yarn add unplugin-vue-components -D
            // require('unplugin-vue-components/webpack')({ /* options */}),

            // ElementPlus
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },

    pluginOptions: {
        i18n: {
            locale: 'zh_CN',
            fallbackLocale: 'en_US',
            localeDir: 'locales',
            enableLegacy: false,
            runtimeOnly: false,
            compositionOnly: false,
            fullInstall: true
        }
    }
})
