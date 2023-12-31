// Start of JS file
// Hosts the site, retrieves info, sends info.
const express = require('express');
const { clog } = require('./helpers/clog');
const html = require('./routes/html');
const api = require('./routes/api');

const PORT = process.env.PORT || 3006;

const app = express();

// Middleware for console log testing + pulling from /public.
app.use(clog);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Using the html/api routes.
app.use(html);
app.use(api);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
// End of JS file