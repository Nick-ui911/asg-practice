import express from "express";
import os from "os";

export const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/cpu", (req, res) => {
  // Simulate heavy computation
  for (let i = 0; i < 10000000000; i++) {
    Math.random();
  }
  res.send("Hello World");
});

app.get("/host", (req, res) => {
  res.send(`Hostname: ${os.hostname()}`);
});
