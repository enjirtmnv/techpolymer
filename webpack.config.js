const path = require('path');
const webpack = require('webpack');
const HtmlWepackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        // cardProduct: './src/pages/card-product.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    mode: "development",
    plugins: [
        new HtmlWepackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            inject: true,
            chunks: ['index'],
        }),
        new HtmlWepackPlugin({
            template: "./src/pages/card-product.html",
            filename: "./card-product.html",
            inject: true,
            chunks: ['index'],
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.html$/,
                use: [ 'html-loader' ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|jpg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ],
                exclude: /fonts/,
            },
            {
                test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ],
                exclude: /img/,
            },
        ]

    },

};