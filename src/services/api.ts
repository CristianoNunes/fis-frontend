import axios from "axios";
import { Response } from "../interfaces/response";
import { Task } from "../interfaces/tasks";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getTasks = async (): Promise<Response> => {
  return await api.get("/tasks");
};

export const addTask = async (task: Task): Promise<Response> => {
  return await api.post("/tasks", task);
};

export const removeTask = async (idTask: string): Promise<Response> => {
  return await api.delete(`/tasks/${idTask}`);
};

export const updateTask = async (task: Task): Promise<Response> => {
  return await api.put(`/tasks/${task.id}`, task);
};
