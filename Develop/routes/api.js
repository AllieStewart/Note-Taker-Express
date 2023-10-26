// Start of JS file
// Data for api
const api = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

//GET /api/notes should read the db.json file 
// and return all saved notes as JSON.
api.get('/api/notes', (req, res) =>
    //res.sendFile(path.join(__dirname, '../db/db.json'))
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)))
); 

//POST /api/notes should receive a new note to save on 
// the request body, 
// add it to the db.json file, and then return the new 
// note to the client. 
// You'll need to find a way to give each note a 
// unique id when it's saved
// (look into npm packages that could do this for you).
// uuid -> npm

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

        readAndAppend(newNote, '../db/db.json');

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

module.exports = api;
// End of JS file