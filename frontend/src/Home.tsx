"use client";
// import { useState } from "react";
import Notes from "./components/Notes.tsx";
import Form from "./components/Form.tsx";
import SearchBar from "./components/Search.tsx";

function Home() {
  return (
    <main className="h-[100vh]">
      <section className="p-4 bg-gray-800 h-full">
        <div className="flex justify-evenly items-center gap-20">
          <h1 className="text-8xl flex justify-center items-center text-white ">
            Simple-Note
          </h1>
          <Form />
        </div>

        <SearchBar />

        <div className="flex gap-4 m-4">
          <Notes />
        </div>
      </section>
    </main>
  );
}

export default Home;
