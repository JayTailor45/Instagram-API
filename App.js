const express = require("express");
const path = require("path");

const app = express();

const { db } = require("./config/db");

const PORT = 3000;

// Initialization

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ImageDir = path.join(__dirname, "/Images");
app.use(express.static(ImageDir));

const ThumbDir = path.join(__dirname, "/Images/thumbnails");
app.use(express.static(ThumbDir));

db.authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch(err => {
    console.log(err);
  });

app.listen(PORT, err => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`Server is started on port ${PORT}`);
  }
});
