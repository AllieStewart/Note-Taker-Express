// Start of JS file
// Data for api; works in conjunction with index.js script in /public/assets/js.
const api = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

// GET /api/notes should read the db.json file and return all saved notes as JSON.
api.get('/api/notes', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
); 

// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client. 
api.post('/api/notes', (req, res) => 
{
    const { title, text } = req.body;

    if (title && text)
    {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        // Appends to the db.json file here.
        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    }

    else
    {
        res.json('Error in posting note.');
    }
});

// DELETE route for selected note.
api.delete('/api/notes/:id', (req, res) => {
    const notesId = req.params.id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => 
    {   // Deletes the db.json value selected, here.
        const result = json.filter((text) => text.id != notesId);
        writeToFile('./db/db.json', result);
    });
    res.send(`Deleted note with ${req.params.id}`);
});

module.exports = api;
// End of JS file