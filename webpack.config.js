const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "client", "src", "index.js"),
  output: {
    path: path.join(__dirname, "client", "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            },
          },
        ],
      }, 
      {
        test: /.(png|jpg|svg)$/,
        exclude: /node_modules/,
        use: ['file-loader']
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "client", "src", "index.html")
    })
  ]
};