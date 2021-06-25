const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/pages/index/main.tsx'),
    secondpage: path.resolve(__dirname, './src/pages/secondpage/main.tsx'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: 'js',
    filename: 'js/[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      template: path.resolve(__dirname, './src/public/template.html'),
      filename: 'html/index.html',
      title: 'index',
    }),
    new HtmlWebpackPlugin({
      chunks: ['secondpage'],
      template: path.resolve(__dirname, './src/public/template.html'),
      filename: 'html/secondpage.html',
      title: 'secondpage',
    }),
  ],
  module: {
    rules: [
      {
        test: [/\.tsx?$/, /\.ts?$/],
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  target: ['web', 'es6'],
};
