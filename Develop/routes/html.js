// Start of JS file
// Data for html
const html = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET /notes should return the notes.html file.
html.get('/notes', (req, res) =>
{
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// GET * should return the index.html file.
html.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// End of JS file