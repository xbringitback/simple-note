import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Cors from "cors";
import noteRoutes from './routes/routes.js';

dotenv.config();


//* App config
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;


//* convert to json
app.use(express.json());
app.use(Cors());
app.use(noteRoutes);

app.get("/", (req, res) => res.send("Vercel"));


//* DB config
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
