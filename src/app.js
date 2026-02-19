const express = require("express");
const urlRoutes = require("./routes/url.routes");

const app = express();

app.use(express.json());

app.use("/api", urlRoutes);

app.get("/", (req, res) => {
  res.send("Scalable URL Shortener API Running");
});

module.exports = app;
