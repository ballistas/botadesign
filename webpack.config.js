var debug = true;// process.env.NODE_ENV !== 'production';

var webpack = require('webpack');
var path = require('path');
var extractCss = require('extract-text-webpack-plugin');

module.exports = {
    //context: __dirname,
    //devtool: debug ? 'inline-sourcemap' : null,
    entry: [
        './src/js/bota.app.js',
        'bootstrap-webpack/!./bootstrap.config.js',
        'font-awesome-webpack/!./font-awesome.config.js'
    ],
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bota.app.bundle.js'
    },
    module: {
        loaders:[
            {test:/\.css$/ ,loader:'style-loader!css-loader'},
            {test:/\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,loader:'url-loader?limit=10000&minetype=application/font-woff'},
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {test:/\.less$/,loader:extractCss.extract(
                "style-loader",
                "css-loader!less-loader"
            )}
        ]
    },
    plugins: debug ? [new webpack.ProvidePlugin({
        $:'jquery',
        jQuery:'jquery'
    }),new extractCss('styles.css')] : [
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle:false,
            sourcemap: false
        }),
        new extractCss('styles.css')]
};
