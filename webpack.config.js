var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var paths = {
    dist: path.resolve(__dirname, './dist'),
    app : path.resolve(__dirname, './app'),
    nodemodules: path.resolve(__dirname, 'node_modules')
};

module.exports = {
    entry: {
        app: path.resolve(paths.app, "app.js")
    },
    output: {
        path: paths.dist,
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js']
    },
    devServer: {
        contentBase: paths.dist,
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader', query: { presets: ['es2015'] } },
            { test: /\.less$/,  loader: 'style!css!less' },
            { test: /\.html$/, loader: 'raw' }
        ]
    },
    plugins: [
            new HtmlWebpackPlugin({
              filename: 'index.html',
              template: 'app/index.html',
              inject: false
            })
        ],
};