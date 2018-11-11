const path = require('path');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');
const webpack = require('webpack');
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  module : {
    rules : [
      { 
        test: /\.less$/,
        use: [ 
            'style-loader',
            'css-loader?url=false', 
            'less-loader'
        ],
      },
      {
        test    : /\.(png|jpg|svg)$/,
        include : path.join(__dirname, 'img'),
        loader  : 'url-loader?limit=30000&name=images/[name].[ext]'
      }, // inline base64 URLs for <=30k images, direct URLs for the rest,
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};