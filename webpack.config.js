const webpack = require('webpack');
const path = require('path');

module.exports = {
  target: 'web',
  resolve: { extensions: [".js", ".jsx"] },
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader'] },
      {
        test: /\.css$/, use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loaders: ['file-loader'] },
      { test: /\.(woff|woff2)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    inline: true,
    contentBase: './src'
  }
};
