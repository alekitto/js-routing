const path = require('path');

let filename = 'url-generator';
if (! process.env.NO_POLYFILL) {
    filename += '-standalone';
}

if (process.env.NODE_ENV === 'production') {
    filename += '.min';
}

filename += '.js';

module.exports = {
    entry: __dirname + '/js/index.js',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    output: {
        filename,
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    modules: 'auto',
                                    targets: {
                                        browsers: "> 1%",
                                    },
                                    useBuiltIns: process.env.NO_POLYFILL ? false : "usage",
                                    corejs: 3,
                                },
                            ],
                        ],
                        ignore: [],
                    },
                }
            }
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map'
};
