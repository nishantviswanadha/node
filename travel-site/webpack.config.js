const path = require('path')

module.exports = {
    entry: './app/assests/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development'
}