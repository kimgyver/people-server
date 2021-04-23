var express = require('express');
const cors = require('cors');
const router = require('./router');
const logger = require('./logger');

var app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(2000, function () {
  logger.info('App started. Listening on port 2000!');
});

module.exports = app;
