/*eslint-disable*/
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var nodeDev = process.env.NODE_ENV;
var production = nodeDev === 'production';

var config = {
  entry: {
    index: './src/index.jsx',
    vendor: [
      'react',
      'react-dom',
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    chunkFilename:'[name].[hash].js'
  },
  resolve: {
    // directories where to look for modules
    modules: [
      "node_modules",
      path.resolve(__dirname, "./src")
    ],
    extensions: ['.js', '.json', '.jsx', '.less']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      }, {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      }, {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ],
  },


  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "[name].[hash].js"}),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      '__DEV__':  nodeDev=='development'
    })
  ]
};

if (production) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false,  // remove all comments
    },
    compress: {
      warnings: false
    }
  }));
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
}
module.exports = config;
