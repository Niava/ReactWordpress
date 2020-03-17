var MiniCssExtractPlugin = require("mini-css-extract-plugin");

var path = require('path');

module.exports = {
    entry: {
        app: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: 'style.scss',
        chunkFilename: 'main.scss',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        // you can specify a publicPath here
                        // by default it uses publicPath in webpackOptions.output
                        publicPath: '../',
                        hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'scss-loader',
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=[name].[ext]&outputPath=images/&publicPath=http://reactwp:8889/wp-content/themes/nexus/dist/images',
                    'image-webpack-loader'
                ]
            },
            { test:
                /\.(woff2?|svg)$/,
                loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
            },
            {
                test: /\.(ttf|eot)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
