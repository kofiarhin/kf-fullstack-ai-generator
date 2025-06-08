const express = require("express");
const cors = require("cors");
const app = express();
const { callGroqAPI } = require("./utils/lib");

// setup middlewares
app.use(cors());

app.get("/api/generate", async (req, res) => {
  const response = await callGroqAPI();
  return res.json({ response });
});

app.get("/api/users", (req, res) => {
  return res.json({ message: "get list of users" });
});

module.exports = app;
