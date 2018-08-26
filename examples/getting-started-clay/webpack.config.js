const clay = require('clay-css');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app.js',
    output: {
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        compact: false,
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css',
                        },
                    },
                    {
                        loader: 'extract-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: clay
                                .includePaths
                                .concat(
                                    path.join(
                                        clay.includePaths[0],
                                        '../fonts'
                                    )
                                )
                        }
                    }
                ]
            }
        ]
    }
};