const express = require("express");
const cors = require("cors");
const app = express();
const { callGroqAPI } = require("./utils/lib");
const movieAi = require("./utils/movieAi");

// setup middlewares
app.use(cors());

// routes
app.get("/", (req, res) => {
  return res.json({ message: "hello world" });
});

app.get("/api/generate", async (req, res) => {
  const response = await callGroqAPI();
  return res.json({ response });
});

app.get("/api/movie/:character", async (req, res) => {
  const { character } = req.params;
  const data = await movieAi({ character });
  return res.json({ data });
});

app.get("/api/users", (req, res) => {
  return res.json({ message: "get list of users" });
});

module.exports = app;
