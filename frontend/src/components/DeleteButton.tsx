"use client";

import axios from "axios";

interface DeleteButtonProps {
  delete: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ delete: id }) => {
  const deleteNote = async (id: string) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={() => deleteNote(id)}
      className="text-xl shadow-md bg-yellow-600 text-black hover:bg-red-500 rounded-xl py-0.5 px-2"
    >
      X
    </button>
  );
};

export default DeleteButton;
