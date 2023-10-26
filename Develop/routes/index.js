// Start of JS file
// Retrieves info from other .js files.
const express = require('express');
const htmlRouter = require('./html');
const apiRouter = require('./api');

// Route handling functions.
const app = express();
app.use('/html', htmlRouter);
app.use('/api', apiRouter);

// Exports app.
module.exports = app;
// End of JS file