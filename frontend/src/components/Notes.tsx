"use client";
import { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton.tsx";

import axios from "axios";
import EditButton from "./EditButton.tsx";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/notes");
        setNotes(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {notes.map((note, index) => {
        const createdTime = new Date(note.createdAt).toLocaleString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        return (
          <form
            key={index}
            className="bg-yellow-300 flex flex-col p-4 rounded-xl mt-4 gap-8 shadow-sm w-[25vw] max-w-[25rem] max-y-[15rem] min-w-[25rem]"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-3xl">{note.title}</h2>
              <DeleteButton delete={note.id} />
              <EditButton edit={note.id} />
            </div>
            <p>{note.content}</p>
            <p>Created on: {createdTime}</p>
          </form>
        );
      })}
    </>
  );
};

export default Notes;
