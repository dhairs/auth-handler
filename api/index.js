import express from "express";
import authHandler from "../routes/auth";
import firebaseApp from "../bin/firebase";

var app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "This API is not for direct use, please use the client.",
  });
});

app.get("/api/test", (req, res) => {
  res.json({ Message: `${firebaseApp.name}` });
});

app.get("/api/auth", authHandler);

export default app;
