"use client";

import axios from "axios";

interface DeleteButtonProps {
  edit: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ edit: id }) => {
  const editNote = async (id: string) => {
    try {
      await axios.put(`/api/notes/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={() => editNote(id)}
      className="text-xl shadow-md bg-yellow-600 text-black hover:bg-red-500 rounded-xl py-0.5 px-2"
    >
      Edit
    </button>
  );
};

export default DeleteButton;
