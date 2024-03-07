"use client";
import DeleteButton from "./DeleteButton.tsx";

const Notes = () => {
  const notes = ["note1", "note2", "note3"];
  return (
    <>
      {notes.map((note) => (
        <div
          key={note}
          className="bg-yellow-300 flex flex-col p-4 rounded-xl mt-4 gap-8 shadow-sm w-[25vw] max-w-[25rem] max-y-[15rem] min-w-[25rem]"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-3xl">Title</h2>
            <DeleteButton />
          </div>
          <div className="">
            <p className="text-2xl/5 leading-9">
              Hallo hier ist der Content Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Sit vitae assumenda esse molestias deserunt
              placeat? In nam aliquid quae alias.
            </p>
          </div>
          <div>
            <p className="text-lg">Erstellt am: 07.03.2024</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Notes;
