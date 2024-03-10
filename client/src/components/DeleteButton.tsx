"use client";

// Import the axios library for making HTTP requests
import axios from "axios";

// Define the props for the DeleteButton component
// The id prop is the ID of the note to delete
interface DeleteButtonProps {
  id: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  // Define the deleteNote function
  // This function sends a DELETE request to the /api/notes/{id} endpoint to delete the note with the given ID
  const deleteNote = async (id: string) => {
    try {
      // Send the DELETE request
      await axios.delete(`/api/notes/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      type="submit"
      // When the button is clicked, the deleteNote function is called with the note's ID
      onClick={() => deleteNote(id)}
      className="text-xl shadow-md bg-gray-200 hover:bg-red-600 transition duration-500 px-[4px] py-[2px] mt-1 text-white rounded-lg"
    >
      <p className="">Delete</p>
    </button>
  );
};

export default DeleteButton;
