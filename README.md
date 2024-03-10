# My Project

This project is a MERN stack note-taking web application built using React, Tailwind CSS, TypeScript, Node.js, and Express.js. It features a RESTful API and utilizes an in-memory MongoDB database with a defined schema (title, content, id) for managing notes.

## Demo

![Screenshot_3](https://github.com/xbringitback/simple-note/assets/128373175/ccc9a389-9885-42f4-b49c-82e7ad74d793)

## Features

- **RESTful Endpoints (GET, POST, PUT, DELETE)**: These endpoints allow for listing all notes (GET), creating a note (POST), editing a note (PUT), and deleting a note (DELETE).

- **Single Page Application (SPA)**: The application contains the following components: a list of notes, a form for creating new notes, a delete button for each note, and a search component for filtering the listed notes.

- **Form for Creating a New Note**: The application provides a user-friendly form for creating new notes.

- **Interaction with the Backend API**: Implementation of functions for interacting with the backend API to perform CRUD operations (in this case, only create, list, edit, and delete).

- **Responsive Design**: The application looks and works well on different devices and screen sizes.

- **Client-side Validation**: Application validates user input before it is sent to the server.

- **Search Function**: The application includes a search function to filter notes.

- **Real-time Updates**: Users can see notes being added in real time.

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

Start Server

```bash
npm run start
```
