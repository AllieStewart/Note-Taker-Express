// Start of JS file
// Data for html
const html = require('express').Router();
const path = require('path');

// // GET Route for homepage
// html.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// );

// GET /notes should return the notes.html file.
html.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET * should return the index.html file.
html.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = html;
// End of JS file