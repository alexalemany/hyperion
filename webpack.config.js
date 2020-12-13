const webpack = require('webpack-config/webpack.config.js')
const path = require('path')

webpack.entry = {
    // name and input entry of your file
    hyperion: '@/src/js/hyperion.js'
}

webpack.output = {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
}

module.exports = webpack
