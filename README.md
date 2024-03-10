# My Project

This project is a MERN stack note-taking web application built using React, Tailwind CSS, TypeScript, Node.js, and Express.js. It features a RESTful API and utilizes an in-memory MongoDB database with a defined schema (title, content, id) for managing notes.

## Features

- **RESTful Endpoints (GET, POST, PUT, DELETE)**: These endpoints allow for listing all notes (GET), creating a note (POST), editing a note (PUT), and deleting a note (DELETE).

- **Single Page Application (SPA)**: The application should contain the following components: a list of notes, a form for creating new notes, a delete button for each note, and a search component for filtering the listed notes.

- **Interaction with the Backend API**: Implementation of functions for interacting with the backend API to perform CRUD operations (in this case, only create, list, edit, and delete).

- **Responsive Design**: The application should look and function well on various devices and screen sizes.

- **Client-side Validation**: The application should validate user inputs before they are sent to the server.

- **Search Function**: The application should include a search function to filter notes.

- **Real-time Updates**: Users should be able to see notes being added in real time.

## Technologies

**Client:** React.js, Tailwind CSS, Typescript, Axios

**Server:** Node.js, Express.js, Cors, nodemon, dotenv

## Installation

Clone the Repo

```bash
  git clone <reponame>
```

Installation of dependencies

```bash
npm i or npm install
```

Start server in client folder for frontend

Start server in server folder for backend

```bash
npm run dev
```
