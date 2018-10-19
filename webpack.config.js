// Webpack v4
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

let fs = require('fs');

const view = fs.readFileSync('./src/components/view/view.html');


module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
        use: [MiniCssExtractPlugin.loader,  "css-loader", "postcss-loader","sass-loader"],
      },
      {
        test: /\.hbs$/, loader: "handlebars-loader",
      },
      
    ]
  },
  plugins: [ 
    //new CleanWebpackPlugin('build/*.*', {} ),
    new HtmlWebpackPlugin({
      //inject: false,
      hash: true,
      template: './src/index.html',
      favicon: './src/favicon.ico',
      filename: 'index.html',
      title: "JS_Homework_13",
      view: view
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
