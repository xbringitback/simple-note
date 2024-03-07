//! GET/POST/PUT/DELETE

const { getNotes, createNote, updateNote, deleteNote } = require("./notes.js")

//* GET Notes
app.get("/notes", getNotes)

//* POST Note
app.post("/notes", createNote)

//* PUT Note
app.put("/notes/:id", updateNote)

//* DELETE Note
app.delete("/notes/:id", deleteNote)
