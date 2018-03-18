const path = require('path');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const plugins = [];
// if (process.env.NODE_ENV === 'production') {
//     plugins.push(new UglifyJSPlugin())
// }

module.exports = {
    entry: __dirname + '/js/index.js',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
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
    plugins: plugins,
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map'
};
