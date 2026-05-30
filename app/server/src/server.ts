import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Mini React Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});