// require fs
const fs = require('fs');
// require util
const util = require('util');
// require uuid
const uuid = require('uuid');

const uuidv1 = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync('db/db.json', 'utf8');
  }
}

  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }
  

  getNotes() {
    return this.read().then((notes) => {
      // parse the notes and return them
        return JSON.parse(notes);
    }
    );
    }

  addNote(note) {
    const { title, text } = note;

    const newNote = { title, text, id: uuidv1() }; 
    // give note an id
    id: uuidv1();
     // get all notes with getNotes()
    this.getNotes().then((notes) => {
         // then add new note to them
        notes.push(newNote);
    // then take the updated set of notes 
    newNotes = notes;
    // - write them to the file using write()
    this.write(newNotes);
    // then show the new note
    return newNote;

  });
}

  removeNote(id) {
    const { title, text } = note;
    const newNote = { title, text, id: uuidv1() };
    id: uuidv1();
   
    // get all the notes use getNotes()
    this.getNotes().then((notes) => {
    // then go through the notes to find the one with the matching id
    notes.forEach((note, index) => {
        if (note.id === id) {
     // take these updated/filtered notes - write them to file using write()
        notes.splice(index, 1);
        this.write(notes);
        return notes;
        };
    });
    });
module.exports = new Store;