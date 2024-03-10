"use client";

import axios from "axios";
import { useState } from "react";

export default function Form() {
  // State for storing the title of the note
  const [title, setTitle] = useState("");
  // State for storing the content of the note
  const [content, setContent] = useState("");

  // This function is called when the form is submitted
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    try {
      // Send a POST request to the /api/notes endpoint with the title and content as the request body
      await axios.post("/api/notes", { title, content });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center flex-col border bg-white border-black rounded-lg shadow-lg w-[40rem] lg:w-[30rem] ">
      <form
        className="flex flex-col justify-between border-b border-black "
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between gap-4 p-4">
          <input
            placeholder="Title..."
            type="text"
            className="
            text-xl rounded-md p-2 w-[15rem] h-10 bg-gray-100 
            focus:outline-none
            "
            required
            // The setTitle function is called whenever the user types in the input field
            // This function updates the title state with the new value
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex space-x-2 ">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          </div>
        </div>
        <div>
          <div className="w-[100%] h-1 bg-gray-500 mb-2"></div>
        </div>
        <textarea
          className="text-xl rounded-md bg-gray-100 p-4 m-6 resize-none focus:outline-none h-[22rem]
           "
          placeholder="Type to add a note..."
          rows={10}
          required
          // The setContent function is called whenever the user types in the textarea
          // This function updates the content state with the new value
          onChange={(e) => setContent(e.target.value)}
        />
        <div className=" flex self-end m-6 ">
          <button
            type="submit"
            className="text-xl shadow-md bg-gray-400 hover:bg-green-600 transition duration-500 rounded-lg px-4 py-2 m-auto mt-2 text-white"
          >
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
}
