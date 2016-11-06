var webpack = require('webpack');
var path = require('path');

// Path of bundle file output
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');

// Path of React.js codebase
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {

    // Starting point of app
    entry: APP_DIR + '/index.jsx',

    // Instructions for Webpack to output bundle.js after bundling process
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module: {

        // Array of loader properties as elements (i.e. babel-loader, etc)
        loaders: [
            {
                // File extension (i.e. .js and .jsx) the loader processes via the test property
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel' // Name of the loader (i.e. babel-loader)
            }
        ]
    }
};

module.exports = config;