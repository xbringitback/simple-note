const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Cors = require("cors");

dotenv.config();

//* App config
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;


//* convert to json
app.use(express.json());
app.use(Cors());

//* DB config
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
