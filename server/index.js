import { createServer } from 'http';
import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';

let app = express();
const server = createServer(app);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  pablicPath: webpackConfig.output.publicPath,
  noInfo: true,
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {

  res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(3000, () => console.log('Server started on port 3000'));
