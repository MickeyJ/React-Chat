const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const DEV = process.env.NODE_ENV==='development';

const config ={
  entry: './src',
  output:{
    path:'./public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public',
    historyApiFallback: {
      index: '/index.html'
    }
  },
  devtool: DEV ? 'cheap-module-source-map' : 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      io: 'socket.io-client'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"url?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
    ]
  }
};

if(!DEV){
  config.plugins.push(
    new ClosureCompilerPlugin({
      compilation_level: 'ADVANCED',
      create_source_map: false
    })
  );
} else {
  config.module.loaders[0].query.presets.push('react-hmre');
  config.plugins.push(
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  )
}

module.exports = config;