/*
 * @Author: luohong
 * @Date: 2019-08-28 15:55:37
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-03 17:54:44
 * @Description: 
 * @email: 3300536651@qq.com
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
var webserver = require("webpack-dev-server")
// 拆分css
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
/**
 * 解决 ReferenceError: resolve is not defined 的问题
 * @param {*} dir 
 */
function resolve(dir) {
    return path.join(__dirname, './', dir)
}
const config = {
    // 模式配置
    mode: 'production', // 开发环境：功能调试和优化开发体验
    // 入口文件
    entry: {
        index: './src/main.js'
    },
    // 出口文件
    output: {
        path: path.resolve(__dirname, 'docs'), // 打包后的目录，必须是绝对路径
        filename: '[name].bundle.[hash:5].js' // 打包后的文件名称
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    // 处理对应模块
    module: {
        rules: [
            // 它会应用到普通的 `.js` 文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/,
                exclude: file => (
                    // @UPDATED
                    // vue-loader v15+版本 
                    // /node_modules/中的.vue文件需要经过babel-loader转译
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
                // include: [resolve('src'), resolve('test')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/, // 从右到左解析css
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    use: [
                        'css-loader'
                    ],
                })
            },
            {
                test: /\.jpg$|\.jpeg$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                use: 'file-loader?images/[name].[ext]'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 50000, // 低于 50000 字节（50k）的图片会以 base64 编码
                    outputPath: './assets/images',
                    name: '[name].[hash:5].[ext]',
                    publicPath: './docs/assets/images'
                }

            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.json'], // 可以省略后缀
        modules: [APP_PATH, 'node_modules'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js', // 用 webpack 1 时需用 'vue/dist/vue.common.js'
            "@components": path.join(__dirname, "..", "src", "components"),
            '@': path.join(__dirname, '..', 'src'),
        }
    },
    // 对应的插件
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ // 配置html模版
            title: 'pdf测试',
            template: './src/index.html',
            favicon: './src/favicon.ico',
        }),
        // 拆分后会把css文件放到dist目录下的css/style.css 
        new ExtractTextWebpackPlugin('css/style.css'),
        // 打包前先清空
        // vue 加载器，将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块
        new VueLoaderPlugin()

    ],

    // 开发服务器配置
    devServer: {
        before(app, server, compiler) {
            // 解决html不自动刷新的问题
            const watchFiles = ['.html'];
            compiler.hooks.done.tap('done', () => {
                const changedFiles = Object.keys(compiler.watchFileSystem.watcher.mtimes);

                if (
                    this.hot &&
                    changedFiles.some(filePath => watchFiles.includes(path.parse(filePath).ext))
                ) {
                    server.sockWrite(server.sockets, 'content-changed');
                }
            });
        },
        contentBase: [
            path.resolve(__dirname, '../docs/html'),
            path.resolve(__dirname, '../docs')
        ],
        host: 'localhost',
        port: 9000, // 端口
        open: true, // 自动打开浏览器
        hot: true, // 开启热更新
        inline: true
    }
}
module.exports = config;