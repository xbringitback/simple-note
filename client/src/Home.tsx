"use client";

import Notes from "./components/Notes.tsx";
import Form from "./components/Form.tsx";
import SearchBar from "./components/Search.tsx";
import { useState } from "react";

function Home() {
  // State for storing the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Handler for updating the search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main className=" bg-gray-800">
      <section className=" mx-auto max-w-screen-lg min-h-screen p-4 bg-gray-800 max-w-[1024px]">
        <div
          className=" items-center gap-x-[5rem] gap-y-[5rem] m-10 
           justify-center lg:flex-col flex
        
       "
        >
          <h1 className="flex justify-center items-center text-white text-8xl lg:text-6xl ">
            Simple-Note
          </h1>
          <Form />
        </div>
        {/* pass the handleSearch function as a prop */}
        <SearchBar onSearch={handleSearch} />

        <div className="flex gap-10 flex-wrap lg:justify-center items-center mb-10 ">
          {/* pass the searchQuery state as a prop */}
          <Notes searchQuery={searchQuery} />
        </div>
      </section>
    </main>
  );
}

export default Home;
