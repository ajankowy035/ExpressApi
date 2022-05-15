import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
