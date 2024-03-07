"use client";

export default function Form() {
  return (
    <form className="flex flex-col gap-2 mt-4">
      <input
        placeholder="Title"
        type="text"
        className="text-xl rounded-md shadow-md text-black p-2"
        required
      />
      <textarea
        className="text-xl rounded-md shadow-md text-black p-2"
        placeholder="Content"
        rows={10}
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
