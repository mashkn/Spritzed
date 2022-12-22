const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'client/index.js'),
    output: {
        path: path.resolve(__dirname,'build'),
        publicPath: '/',
        filename: 'bundle.js',
      },
       mode: 'development',
    module:{
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
            },
            {
                test: /\.(s?c|sa)ss$/,
                // exclude: /node_modules/,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
              {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                  'image-webpack-loader',
                ],
              },
            //   {
            //     test: /\.[ac]ss$/i,
            //     use: [
            //       // Creates `style` nodes from JS strings
            //       'style-loader',
            //       // Translates CSS into CommonJS
            //       'css-loader',
            //       // Compiles Sass to CSS
            //       'sass-loader',
            //     ],
            //   },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Development',
        template: 'index.html'
    })],
    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build'),
        },
        compress: true,
        port: 8080,
        hot: true,
        liveReload: false,
        host: "localhost",
        historyApiFallback: true,
    },
}