"use client";
// import { useState } from "react";
import Notes from "./components/Notes.tsx";
import Form from "./components/Form.tsx";

function Home() {
  return (
    <>
      <h1 className="text-3xl flex justify-center items-center">App</h1>
      <div>
        <Form />
        <Notes />
      </div>
    </>
  );
}

export default Home;
