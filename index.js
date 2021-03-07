const helmet = require("helmet");
const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());
app.use(helmet());

const db = config.get("db");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || config.get("port");

app.listen(port, () => console.log(`Listening on ${port}...`));
