// Webpack v4
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          //options: {
          //  presets: ["@babel/preset-env"]
          //}
        }
      },
      {
        test: /(\.css$)|(\.scss$)/,
        use: [MiniCssExtractPlugin.loader,  "css-loader", "postcss-loader","sass-loader"]
      },
      
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      //inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
      title: "JS_Homework_13"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    // host: '192.168.88.48',
    // port: 9000
  }

};
