/*
 * @Author: luohong
 * @Date: 2019-08-28 15:55:37
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-28 17:49:00
 * @Description: 
 * @email: 3300536651@qq.com
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const config = {
    mode: 'development',
    entry: './src/',
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
                test: /\.ico$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '../dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'pdf测试',
            template: './src/index.html',
            favicon: './src/favicon.ico',
        })
    ],
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9000,
        hot: true
    }
}
module.exports = config;