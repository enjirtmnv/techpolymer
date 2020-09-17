const path = require('path');
const webpack = require('webpack');
const HtmlWepackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        cardProduct: './src/pages/card-product.js',
        catalog: './src/pages/catalog.js',
        catalogPallets: './src/pages/catalog-pallets.js',
        contacts: './src/pages/contacts.js',
        about: './src/pages/about.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    mode: "development",
    plugins: [
        new CleanWebpackPlugin(),
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
        new HtmlWepackPlugin({
            template: "./src/pages/catalog.html",
            filename: "./catalog.html",
            inject: true,
            chunks: ['index'],
        }),
        new HtmlWepackPlugin({
            template: "./src/pages/catalog-pallets.html",
            filename: "./catalog-pallets.html",
            inject: true,
            chunks: ['index'],
        }),
        new HtmlWepackPlugin({
            template: "./src/pages/contacts.html",
            filename: "./contacts.html",
            inject: true,
            chunks: ['index'],
        }),
        new HtmlWepackPlugin({
            template: "./src/pages/about.html",
            filename: "./about.html",
            inject: true,
            chunks: ['index'],
        }),

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