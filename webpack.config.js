const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NODE_ENV = process.env.NODE_ENV;
const devMode = NODE_ENV === 'development';

module.exports = {
  mode: NODE_ENV,
  entry: './src/scripts/index.js',
  devtool: devMode ? 'cheap-eval-source-map' : 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, './public'), to: 'public' }
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s?css/,
        include: path.resolve(__dirname, './src'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};