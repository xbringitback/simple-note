import express from "express";
import { getNotes, createNote, updateNote, deleteNote } from "./notes.js";

const router = express.Router();

router.get("/api/notes", getNotes)
router.post("/api/notes", createNote)
router.put("/api/notes/:id", updateNote)
router.delete("/api/notes/:id", deleteNote)

export default router;