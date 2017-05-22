//ES5
//var express = require('express');
//var path = require('path');
//var open = require('open');
//var port = 3000;
//var app = express();

//ES6
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

//disable no-console lint for this file since this is a build script and we want to see console messages
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Ben","lastName":"Kenobi","email":"obiwan@jedicouncil.net"},
    {"id": 2,"firstName":"Luke","lastName":"Skywalker","email":"luke@tosche.com"},
    {"id": 3,"firstName":"Wedge","lastName":"Antilles","email":"wedge@hotmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port, 'chrome');
  }
});
