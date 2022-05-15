import { Todo, ITodo } from "../models/todo";

export const createTodo = async (todo: ITodo) => {
  await new Todo(todo).save();
};

export const findTodos = async (): Promise<ITodo[]> => {
  return await Todo.find();
};

export const removeTodo = async (id: string) => {
  await Todo.findByIdAndRemove(id);
};

export const updateTodo = async (id: string, todo: ITodo) => {
  return await Todo.findByIdAndUpdate(id, todo);
};
