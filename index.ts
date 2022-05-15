import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import {
  createTodo,
  findTodos,
  removeTodo,
  updateTodo,
} from "./src/services/todo.service";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.get("/all", (req, res) => {
  try {
    const todos = findTodos().then((data) => console.log(data));
  } catch (err) {
    console.log(err);
  }
  res.send("Hello from the server");
});

app.post("/new", (req, res) => {
  try {
    createTodo({ title: req.body.title, description: req.body.description });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/:id", (req, res) => {
  try {
    removeTodo(req.params.id);
    console.log("delete");
  } catch (err) {
    console.log(err, req.params.id);
  }
});

app.patch("/:id", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  try {
    updateTodo(req.params.id, { title, description });
    console.log("update");
  } catch (err) {
    console.log(err, req.params.id);
  }
});

mongoose.connect(`${process.env.MONGODB_URI}`, () => {
  console.log("Connected to mongoDB");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
