//! GET/POST/PUT/DELETE

import mongoose from "mongoose";
import notes from '../models/notes.js';

// Defining RESTful endpoints

// GET Notes
// This function is an asynchronous function that gets all notes from the database
export const getNotes = async (req, res) => {
    try {
        // Fetching all notes from the database and sorting them by creation date
        const allNotes = await notes.find({}).sort({ createdAt: -1 });
        // Sending a successful response along with the fetched notes
        res.status(200).send(allNotes);
    } catch (error) {
        // Sending an error response if something goes wrong
        res.status(500).send({ message: error.message });
    }
}

// POST Note
// This function is an asynchronous function that creates a new note in the database
export const createNote = async (req, res) => {
    // Creating a new note object with the data from the request body
    const dbNote = {
        id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
    };

    try {
        // Creating the new note in the database
        const newNote = await notes.create(dbNote);
        // Sending a successful response along with the created note
        res.status(200).send(newNote);
    } catch (error) {
        // Logging the error if something goes wrong
        console.log(error)
    }
}

// PUT Note
// This function is an asynchronous function that updates an existing note in the database
export const updateNote = async (req, res) => {
    // Extracting the note ID from the request parameters
    const { id } = req.params;
    // Extracting the new title and content from the request body
    const { title, content } = req.body;
    try {
        // Check if the provided ID is valid
        // If the ID is not valid or not provided, send a 500 status code and a message back to the client
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(500).send(`no note with id: ${id}`);
        }
        //* mongoDB id

        // Using Mongoose to find the note by ID and update it
        // The { new: true } option ensures that the updated note is returned
        const updateNote = await notes.findOneAndUpdate({ id }, { title, content }, { new: true });

        res.status(200).send(updateNote);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

//* DELETE Note
// This function is an asynchronous function that deletes an existing note in the database
export const deleteNote = async (req, res) => {
    // Extracting the note ID from the request parameters
    const { id } = req.params;
    try {
        // Check if the provided ID is valid
        // If the ID is not valid or not provided, send a 500 status code and a message back to the client
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(500).send(`no note with id: ${id}`);
        }
        // Using Mongoose to find the note by ID and delete it
        const deleteNote = await notes.findOneAndDelete({ id });

        res.status(200).send(deleteNote);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}