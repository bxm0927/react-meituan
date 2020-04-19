/*
 * @Author: xiaoming.bai
 * @Date: 2020-04-05 17:55:35
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-04-19 14:44:06
 */

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const MAIN_FILE = 'index.js'
const TEMPLATE_FILE = 'index.html'
const DIST_DIR = path.resolve(__dirname, '../dist')
const SRC_DIR = path.resolve(__dirname, '../src')
const PAGES_DIR = path.resolve(SRC_DIR, 'pages')
const DEV_MODE = process.env.NODE_ENV !== 'production'

// Multi-entry configuration
const getEntries = () => {
  let entrys = {}

  fs.readdirSync(PAGES_DIR).forEach((pageName) => {
    const fullPagePath = path.resolve(PAGES_DIR, pageName)
    const fullFilePath = path.resolve(fullPagePath, MAIN_FILE)
    const status = fs.statSync(fullPagePath)

    if (status.isDirectory() && fs.existsSync(fullFilePath)) {
      entrys[pageName] = fullFilePath
    }
  })

  return entrys
}

// Multi-template configuration
const getTemplates = (entrys) => {
  let htmlWebpackPlugin = []

  Object.keys(entrys).forEach((pageName) => {
    const fullPagePath = path.resolve(PAGES_DIR, pageName)
    const fullFilePath = path.resolve(fullPagePath, TEMPLATE_FILE)
    const status = fs.statSync(fullPagePath)

    if (status.isDirectory() && fs.existsSync(fullFilePath)) {
      const html = new HtmlWebpackPlugin({
        filename: `${pageName}.html`,
        template: fullFilePath,
        chunks: [pageName],
        title: `Page ${pageName}`,
      })
      htmlWebpackPlugin.push(html)
    }
  })

  return htmlWebpackPlugin
}

const entrys = getEntries()
const htmlWebpackPlugin = getTemplates(entrys)

module.exports = {
  entry: entrys,
  output: {
    path: DIST_DIR,
    filename: DEV_MODE ? 'js/[name].js' : 'js/[name].[hash:8].js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '@': SRC_DIR,
    },
  },
  module: {
    rules: [
      // ESLint
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      // scripts
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // stylesheets
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              hmr: DEV_MODE,
            },
          },
          {
            loader: 'css-loader',
            options: {
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 1,
              // Open CSS Modules
              // modules: {
              //   localIdentName: "[local]__[hash:base64:5]",
              // },
            },
          },

          // PostCSS loader for webpack
          'postcss-loader',

          // Compiles Sass to CSS, using node-sass by default.
          'sass-loader',

          // SASS resources (e.g. variables, mixins etc.) loader for Webpack.
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(SRC_DIR, 'assets/stylesheets/vars.scss'),
                path.resolve(SRC_DIR, 'assets/stylesheets/resources.scss'),
              ],
            },
          },
        ],
        include: SRC_DIR,
      },
      // images
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024, // 8K
              outputPath: 'img/',
              name: DEV_MODE ? '[name].[ext]' : '[name].[hash:8].[ext]',
            },
          },
        ],
        include: SRC_DIR,
      },
      // svg
      {
        test: /\.(svg)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'img/',
            name: DEV_MODE ? '[name].[ext]' : '[name].[hash:8].[ext]',
          },
        },
        include: SRC_DIR,
      },
      // fonts
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8 * 1024, // 8K
            outputPath: 'fonts/',
            name: DEV_MODE ? '[name].[ext]' : '[name].[hash:8].[ext]',
          },
        },
        include: SRC_DIR,
      },
      // media
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8 * 1024, // 8K
            outputPath: 'media/',
            name: DEV_MODE ? '[name].[ext]' : '[name].[hash:8].[ext]',
          },
        },
        include: SRC_DIR,
      },
    ],
  },
  plugins: [
    // creation of HTML files
    ...htmlWebpackPlugin,

    // HMR
    new webpack.HotModuleReplacementPlugin(),

    // Remove build folder(s) before building
    new CleanWebpackPlugin(),

    // Copies individual files or entire directories,
    // which already exist, to the build directory.
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: DIST_DIR,
      },
    ]),

    // Extract css
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: DEV_MODE ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
      chunkFilename: DEV_MODE ? 'css/[id].css' : 'css/[id].[contenthash:8].css',
    }),
  ],
  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    port: 9000,
    hot: true,
  },
}
