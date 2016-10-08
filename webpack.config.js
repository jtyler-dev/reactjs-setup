var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, "src");
var DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
    entry: SRC_DIR + "/app/main.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
    ]
}
