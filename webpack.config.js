module.exports = {
    entry: __dirname + "/app/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    mode: "development",
    devServer:{
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }
        ]
    }
}