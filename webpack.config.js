const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")

const NPM_CYCLE = process.env.npm_lifecycle_event
const NODE_ENV = process.env.NODE_ENV || 'development'
const isProd = NODE_ENV === 'production'
const isTest = NPM_CYCLE === 'test' || NPM_CYCLE === 'test-watch'

// const config = require(`./config/${NODE_ENV}`)

module.exports = {
  mode: isProd ? 'production' : 'development',
  output: isTest ? {} : {
    path: path.join(__dirname, '/dist'),
    filename: isProd ? '[name].[hash].js' : '[name].js',
    chunkFilename: isProd ? '[id].[hash].js' : '[id].js'
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            '@babel/preset-react'
          ]
        }
      }]
    }]
  },

  plugins: [new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  })],

  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },

  optimization: isTest ? {} : {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
