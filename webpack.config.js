const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: path.join(__dirname, "sandbox"),
  devtool: "eval-cheap-module-source-map",
  entry: "./index.jsx",
  output: {
    path: __dirname + "/sandbox/",
    filename: "rd3g.sandbox.bundle.js",
    publicPath: '/sandbox/',
  },
  devServer: {
      static: {
          directory: path.join(__dirname, '/sandbox')
      }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new webpack.DefinePlugin({
      rd3gRunningVersion: JSON.stringify(process.env.npm_package_version || "unknown"),
    }),
  ],
};
