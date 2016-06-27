var config = {
  context: __dirname + "/src",
  entry: "./index.js",
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
     }
    ]
  }
}

module.exports = config
