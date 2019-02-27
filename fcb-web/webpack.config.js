var webpack = require('webpack')
var path = require('path')

var parentDir = path.join(__dirname, '/')

module.exports = {
    entry : [
        path.join(parentDir, './src/index.js')
    ],
    mode : 'development',
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                loader : 'babel-loader'
            }, {
                test : /\.(css|less)$/,
                loaders : ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.(png|svg|jpg|JPG|gif)$/,
                use: [ 'file-loader' ]
            }
        ]
    },
    output : {
        path : parentDir + './dist',
        filename : 'bundle.js'
    },
    devServer : {
        contentBase : parentDir + './public/',
        historyApiFallback : true,
        inline: true,
        port: 3033
    }

}