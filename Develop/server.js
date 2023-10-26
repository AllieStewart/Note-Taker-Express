// Start of JS file
// Hosts the site, retrieves info, sends info.
const express = require('express');
//const path = require('path');
const { clog } = require('./helpers/clog');
//const main = require('./routes/index');
const html = require('./routes/html');
const api = require('./routes/api');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(html);
app.use(api);

// app.use('/api', main);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
// End of JS file