var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/app",
    output: {
        path: "./build/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'source-map',
    devServer: {
        contentBase: "./build",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    module: {
        resolveLoader: {
            root: path.join(__dirname, "node_modules")
        },
        preLoaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                // "test" is commonly used to match the file extension
                test: /(\.jsx|\.js)$/,

                // "exclude" should be used to exclude exceptions
                // try to prefer "include" when possible

                // the "loader"
                loader: "babel-loader", // or "babel" because webpack adds the '-loader' automatically
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
