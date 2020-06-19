const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports = (_env, argv = {}) => {
    const isDevMode = argv.mode === 'development';
    const isTestMode = argv.mode === 'test';

    console.log('[Webpack Config] NODE_ENV:', process.env.NODE_ENV);
    console.log('[Webpack Config] argv.mode:', argv.mode);

    // TODO: consider a separate `webpack.dev.js` and `webpack.build.js` files, etc, that import a shared base config

    return {
        devtool: 'source-map',
        devServer: {
            hot: true,
            //hotOnly: true,
            https: false,
        },
        // TODO: implement sass loaderOptions for global $variables
        resolve: {
            extensions: ['.js'],
            alias: {
                '@': path.resolve('src'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: { minimize: true },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g)/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name: './assets/images/[name].[ext]',
                                limit: 10000,
                            },
                        },
                        {
                            loader: 'img-loader',
                        },
                    ],
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: true,
                                esModule: true,
                            },
                        },
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                    ],
                },
            ],
        },
        plugins: [
            // clean the "dist" folder before generating a build
            new CleanWebpackPlugin(),
            new HtmlWebPackPlugin({
                template: 'src/index.html',
                filename: './index.html',
            }),
            new MiniCssExtractPlugin({
                // both options are optional, similar to the same options in webpackOptions.output
                filename: isDevMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDevMode ? '[id].css' : '[id].[hash].css',
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                // define custom global variables
                TEST_MODE: isTestMode,
            }),
        ],
    };
};
