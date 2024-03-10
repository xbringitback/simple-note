"use client";
import { FC, useEffect, useState } from "react";

import axios from "axios";
import DeleteButton from "./DeleteButton";

// This interface represents
interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

// This interface represents the props for a component that displays a list of notes
// The component accepts a search query as a prop
interface NotesProps {
  searchQuery: string;
}

// The component accepts a search query as a prop
const Notes: FC<NotesProps> = ({ searchQuery }) => {
  // This state holds the list of notes
  const [notes, setNotes] = useState<Note[]>([]);

  // Use the useEffect hook to fetch the notes when the component mounts
  useEffect(() => {
    // This function sends a GET request to the /api/notes endpoint to fetch the list of notes
    const fetchData = async () => {
      try {
        // Send the GET request
        const response = await axios.get("/api/notes");
        // Update the notes state with the fetched notes
        setNotes(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // Filter the notes based on the search query
  // The comparison is case-insensitive
  const filteredNotes = notes.filter(
    (note) =>
      // Check if the note's title includes the search query
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      // Or if the note's content includes the search query
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // This function is called when the title or content of a note is changed

  const handleNoteChange = async (
    id: string,
    field: "title" | "content",
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Get the new value from the event object
    const newValue = event.target.value;
    // Create a new array of notes
    // If a note has the same ID as the note to update, replace its field with the new value
    // Otherwise, leave it unchanged
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, [field]: newValue };
      }
      return note;
    });
    // Update the notes state with the new array of notes
    setNotes(newNotes);

    try {
      // Send a PUT request to the /api/notes/{id} endpoint to update the note on the server
      await axios.put(`/api/notes/${id}`, {
        [field]: newValue,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {filteredNotes.map((note, index) => {
        const createdTime = new Date(note.createdAt).toLocaleString("en-GB", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        });

        return (
          <div
            key={index}
            className="flex justify-center border bg-white border-black rounded-lg shadow-lg "
          >
            <form
              className="flex flex-col w-[30rem]"
              // Prevent the default form submission behavior
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex items-center justify-between gap-4 p-4">
                <input
                  className="text-xl rounded-md p-4 w-[12rem] h-10 bg-gray-100 focus:outline-none"
                  // The value of the input is the note's title
                  value={note.title}
                  // When the input's value changes, call the handleNoteChange function to update the note's title
                  onChange={(e) => handleNoteChange(note.id, "title", e)}
                  placeholder="empty..."
                />
                <div className="flex space-x-2 ">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div>
                <div className="w-[100%] h-1 bg-gray-500 mb-2"></div>
              </div>
              <textarea
                className="text-xl bg-gray-100 p-4 m-6 rounded-lg resize-none focus:outline-none "
                rows={10}
                // The value of the textarea is the note's content
                value={note.content}
                name="text"
                placeholder="empty..."
                // When the textarea's value changes, call the handleNoteChange function to update the note's content
                onChange={(e) => handleNoteChange(note.id, "content", e)}
              />
              <div className=" flex items-end justify-between m-6 ">
                <p className="text-lg bg-gray-100 rounded-xl p-1">
                  {createdTime}
                </p>
                {/* Pass the note's ID to the DeleteButton component */}
                <DeleteButton id={note.id} />
              </div>
            </form>
          </div>
        );
      })}
    </>
  );
};

export default Notes;
