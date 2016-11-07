var webpack = require('webpack');
var path = require('path');

// Path of bundle file output
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');

// Path of React.js codebase
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {

    // Starting point of app
    entry: {
        'bundleIndexEntry': APP_DIR + '/index.jsx'
    },

    // Instructions for Webpack to output bundle.js after bundling process
    output: {
        path: BUILD_DIR,
        filename: '[name].js', // bundleIndexEntry.js
        publicPath: '/src/client/',
        sourceMapFilename: '[name].js.map',
        devtoolModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]',
        devtoolFallbackModuleFilenameTemplate: 'webpack:///[resourcePath]?[hash]'
    },

    module: {

        // Array of loader properties as elements (i.e. babel-loader, etc)
        loaders: [
            // Convert JS written in ES6 to ES5
            {
                // File extension (i.e. .js and .jsx) the loader processes via the test property
                test: /\.jsx?/,
                include: APP_DIR,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel' // Name of the loader (i.e. babel is short for babel-loader)
            },
            // CSS
            {
                test: /\.css$/,
                loader: 'style!css' // Short for style-loader!css-loader
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
                PORT: 5000
            }
        })
    ],

    devtool: 'source-map'
};

module.exports = config;