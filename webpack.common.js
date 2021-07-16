const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/pages/index/main.tsx'),
    secondpage: path.resolve(__dirname, './src/pages/secondpage/main.tsx'),
    'reset.css': './src/public/css/destyle.css',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: 'js',
    filename: 'js/[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index', 'reset.css'],
      template: path.resolve(__dirname, './src/public/template.html'),
      filename: 'html/index.html',
      title: 'index',
    }),
    new HtmlWebpackPlugin({
      chunks: ['secondpage', 'reset.css'],
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
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  target: ['web', 'es6'],
};
