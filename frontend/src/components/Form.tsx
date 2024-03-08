"use client";

import axios from "axios";
import { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/api/notes", { title, content });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="flex flex-col gap-2 mt-4" onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        type="text"
        className="text-xl rounded-md shadow-md text-black p-2"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="text-xl rounded-md shadow-md text-black p-2"
        placeholder="Content"
        rows={10}
        required
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="text-xl shadow-md bg-green-700 text-black hover:bg-green-600 rounded-lg px-4 py-2 w-2/4 m-auto mt-2"
      >
        Add Note
      </button>
    </form>
  );
}
