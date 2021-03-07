const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const db = config.get("db");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB"));

const port = process.env.PORT || config.get("port");

app.listen(port, () => console.log(`Listening on ${port}...`));
