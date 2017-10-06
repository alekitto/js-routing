const path = require('path');

module.exports = {
    entry: __dirname + '/js/UrlGenerator.js',
    output: {
        filename: process.env.NODE_ENV === 'production' ? 'url-generator.min.js' : 'url-generator.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map'
};
