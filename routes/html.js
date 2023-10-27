// Start of JS file
// Data for html route. to grab from the two html files.
const html = require('express').Router();
const path = require('path');

// GET the index.html file (wildcard was causing JSON errors so switched back to the '/' way.)
html.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET /notes should return the notes.html file.
html.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = html;
// End of JS file