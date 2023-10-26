// Start of JS file
// Hosts the site, retrieves info, sends info.
const express = require('express');
const path = require('path');
const main = require('./routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', main);

app.use(express.static('public'));

// GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
// End of JS file