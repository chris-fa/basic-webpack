var path = require('path');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", 
                    "css-loader", 
                    {
                        "loader": "sass-loader",
                        "options": {
                            includePaths: ['node_modules'],
                        }
                    }
                ],
            }
        ],
    }
};
