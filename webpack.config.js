const path = require("path");
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        publicPath: "/dist/"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /(node_modules)/,
            query: {
                presets: ["es2015"]
            }
        }, {
            test: /\.hbs$/,
            loader: "handlebars-loader"
        }]
    }
};