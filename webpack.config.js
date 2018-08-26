const path = require('path');
const webpack = require('webpack');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const betterWebpackProgress = require('better-webpack-progress');
const checkEnv = require('@drawbotics/check-env');
const StylishPlugin = require('webpack-stylish');


checkEnv([ 'NODE_ENV' ]);


const DEV_MODE = process.env.NODE_ENV === 'development';


module.exports = {
  mode: process.env.NODE_ENV,
  devtool: DEV_MODE ? 'cheap-module-source-map' : 'source-map',
  stats: 'none',
  resolve: {
    extensions: [ '.js', '.jsx' ],
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'DrawboticsFileUploader.js',
    sourceMapFilename: 'DrawboticsFileUploader.js.map',
    library: 'DrawboticsFileUploader',
    libraryTarget: 'umd',
  },
  externals: [
    'react',
    'react-dom',
  ],
  plugins: [
    new webpack.NamedModulesPlugin(),
    new StylishPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
    }),
    new ProgressPlugin(betterWebpackProgress({
      mode: 'compact',
    })),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [ path.resolve(__dirname, 'src') ],
        use: [ 'babel-loader' ],
      },
    ],
  },
};
