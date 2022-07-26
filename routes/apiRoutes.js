// require router from express - activity 21 and 22, specifically in the routes in activity 22
const api = require('express').Router();
// require store from the helpers folder 
const store = require('../helpers/store');


// GET ALL THE NOTES //
api.get('/notes', (req, res) => {
    store.getNotes().then((notes) => {
        res.json(notes);
    });
});
    // getNotes()
    // then take the notes and return them with res.json

// POST A NEW NOTE //
api.post('/notes', (req, res) => {
  console.log(req.body);
    store.addNote(req.body).then((note) => {
        res.json(note);
    // addNote(req.body)
    // then return note with res.json
});
});


// DELETE A NOTE //
api.delete('notes/:id', (req, res) => {
    store.removeNote(req.params.id).then((note) => {
        res.json(`Note ${req.params.id} deleted`);
    });
});

    // removeNote(req.params.id)
    // give a status letting you know it's been deleted


// export your router
module.exports = apiRouter;