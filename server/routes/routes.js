import express from "express";
import { getNotes, createNote, updateNote, deleteNote } from "./notes.js";

// Creating a new Express router
const router = express.Router();

// Defining the route for getting all notes
router.get("/api/notes", getNotes)

// Defining the route for creating a new note
router.post("/api/notes", createNote)

// Defining the route for updating an existing note
// The ID of the note to be updated is passed as a parameter in the URL
router.put("/api/notes/:id", updateNote)

// Defining the route for deleting an existing note
// The ID of the note to be deleted is passed as a parameter in the URL
router.delete("/api/notes/:id", deleteNote)

export default router;