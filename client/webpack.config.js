const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const CleanWebpackPlugin = require('clean-webpack-plugin')

const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: {
        admin_client: "./src/admin.ts",
        display_client: "./src/display.ts",
        injector_client: "./src/injector.ts",
    }, mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: path.resolve(__dirname, 'dist/static'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    module: {  // where we defined file patterns and their loaders
        rules: [
            { test: /\.svg$/, loader: 'svg-inline-loader' },
            { test: /\.html/, loader: 'raw-loader' },

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            }
        ]
    },
    plugins: [  // Array of plugins to apply to build chunk
        new HtmlWebpackPlugin({
            // template: __dirname + "/static/index.html",
            inject: 'body'
        }),

        new CleanWebpackPlugin(['dist'], {
            verbose: true,
            dry: false,
            watch: true
        }),

    ]
    , devServer: {  // configuration for webpack-dev-server
        contentBase: path.resolve(__dirname, 'dist'),  //source of static assets
        port: 7700, // port to run dev-server
    }
};
