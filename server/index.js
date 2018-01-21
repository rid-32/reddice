import { createServer } from 'http';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';

import users from './routes/users';
import auth from './routes/auth';

let app = express();
const server = createServer(app);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/reddice');

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/api/users', users);
app.use('/api/auth', auth);

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
