//! GET/POST/PUT/DELETE

import mongoose from "mongoose";
import notes from '../models/notes.js';


//* GET Notes
export const getNotes = async (req, res) => {
    try {
        const allNotes = await notes.find({}).sort({ createdAt: -1 });
        res.status(200).send(allNotes);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

//* POST Note
export const createNote = async (req, res) => {
    const dbNote = {
        id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
    };

    try {
        const newNote = await notes.create(dbNote);
        res.status(200).send(newNote);
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message });
    }
}

//* PUT Note 
export const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        //* check if id is valid
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(500).send(`no note with id: ${id}`);
        }
        //* mongoDB id

        //mongoose
        const updateNote = await notes.findOneAndUpdate({ _id: id }, { title, content }, { new: true });

        res.status(200).send(updateNote);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

//* DELETE Note
export const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        //* check if id is valid
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(500).send(`no note with id: ${id}`);
        }
        const deleteNote = await notes.findOneAndDelete({ id });
        console.log(id, deleteNote)

        res.status(200).send(deleteNote);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}