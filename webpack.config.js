var MiniCssExtractPlugin = require("mini-css-extract-plugin");

var path = require('path');


module.exports = {
    
    entry: {
        app: './src/index.jsx',
        main: [
			'./src/app.js',
			'./src/css/app.scss'
    	]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.scss',
            chunkFilename: '[Id].scss',
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
				test: /\.(js|jsx|tsx|ts)$/,
				exclude:path.resolve(__dirname, 'node_modules'),
				use: {
				loader: 'babel-loader',
				options: {
					presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript'
						],
						plugins : [
							["@babel/plugin-proposal-decorators", { "legacy": true }],
							'@babel/plugin-syntax-dynamic-import',
							['@babel/plugin-proposal-class-properties', { "loose": true }]
						]
					}
				},
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
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    devServer: {
        contentBase: path.join(__dirname, '/'),
        publicPath: '/dist/',
        watchContentBase: true
    },
    watch: true,
    mode:'development'
}

