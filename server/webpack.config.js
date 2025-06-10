const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
var nodeExternals = require('webpack-node-externals');

const DashboardPlugin = require('webpack-dashboard/plugin');

const webpack = require('webpack');



module.exports = {
    entry: {
        graphical_display_server: "./src/server.ts",
    },
    target: 'node',
    externals: [nodeExternals()],
    mode: 'development',
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
    module: {
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
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    }
                ]
            },
        ]
    },
    plugins: []
};
