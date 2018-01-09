import path from 'path';

export default {
  entry: path.join(__dirname, 'client/index.js'),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'server'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['babel-loader'],
      },
    ],
  },
};
