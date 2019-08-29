/*
 * @Author: luohong
 * @Date: 2019-08-28 15:55:37
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-29 14:31:56
 * @Description: 
 * @email: 3300536651@qq.com
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
var webserver = require("webpack-dev-server")
// 拆分css
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const config = {
    // 模式配置
    mode: 'development', // 开发环境：功能调试和优化开发体验
    // 入口文件
    entry: './src/index.js',
    // 出口文件
    output: {
        path: path.resolve('dist'), // 打包后的目录，必须是绝对路径
        filename: 'bundle.js' // 打包后的文件名称
    },
    // 处理对应模块
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
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
                    use: 'css-loader'
                })
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    // 对应的插件
    plugins: [
        new CleanWebpackPlugin(),
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
            path.resolve(__dirname, './dist/html'),
            path.resolve(__dirname, './dist')
        ],
        host: 'localhost',
        port: 9000, // 端口
        open: true, // 自动打开浏览器
        hot: true // 开启热更新
    }
}
module.exports = config;