const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    library: "Vue3Geolocation",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
    filename: "vue3-geolocation.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "production",
};
