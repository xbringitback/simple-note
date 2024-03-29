import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

const Note = mongoose.models.notes || mongoose.model("notes", NoteSchema)

export default Note;