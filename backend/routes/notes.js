//! GET/POST/PUT/DELETE

const mongoose = require('mongoose');
const notes = require('../models/notes');

//* GET Notes
const getNotes = async (req, res) => {
    try {
        const allNotes = await notes.find({}).sort({ createdAt: -1 });
        res.status(200).send(allNotes);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

//* POST Note
const createNote = async (req, res) => {
    const dbNote = req.body;
    try {
        const newNote = await notes.create(dbNote);
        res.status(200).send(newNote);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

//* PUT Note 
const updateNote = async (req, res) => {
    const { id } = req.params;
    try {
        //* check if id is valid
        if (!mongoose.Types.ObjectID.isValid(id)) {
            return res.status(500).send(`no note with id: ${id}`);
        }
        const noteID = { _id: id };
        const newNote = await notes.create(dbNote);
        res.status(200).send(newNote);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

//* DELETE Note
const deleteNote = async (req, res) => {
    const dbNote = req.body;
    try {
        const newNote = await notes.create(dbNote);
        res.status(200).send(newNote);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}





module.exports = {
    getNotes,
    createNote,
    updateNote,
    deleteNote
}