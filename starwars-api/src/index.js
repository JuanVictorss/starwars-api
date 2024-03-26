const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const port = 3000;
mongoose.connect(
  "mongodb+srv://juanvictorsouzadasilva:gnlX1p87Su3jSiJT@starwars-api.3pfbkab.mongodb.net/?retryWrites=true&w=majority&appName=starwars-api"
);

const Film = mongoose.model("Film", {
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", async (req, res) => {
  const film = new Film({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  });
  film.save();
  res.send(film);
});

app.listen(port, () => {
  console.log("App running");
});
