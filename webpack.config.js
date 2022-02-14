const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {

    // Environment mode
    mode: 'development',

    devServer: {
        watchFiles: ["./*"], // string [string] object [object]
        port: 3000,
        open: true,
        hot: true,
    },

    watchOptions: {
        ignored: [
            "./node_modules/*",
        ],
    },

    plugins: [
        // Re-generate index.html with injected script tag.
        // The injected script tag contains a src value of the
        // filename output defined above.
        new HtmlWebpackPlugin({
            inject: true,
            template: resolveAppPath('index.html'),
        }),
    ],

};