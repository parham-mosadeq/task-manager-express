import { Request, Response } from "express";
import { TaskModel } from "@models/task.schema";

const getAllTasks = (req: Request, res: Response) => {
  res.send({ status: "success", data: [] });
};

const getSingleTask = (req: Request, res: Response) => {
  res.send({ status: "success", data: [] });
};

const createTask = async (req: any, res: any) => {
  try {
    const createdTask = await TaskModel.create(req.body);
    return res.status(201).json({ status: "success", data: createdTask });
  } catch (error: any) {
    if (error?.errors)
      return res
        .status(400)
        .json({ status: "error", message: error.errors.name.message });
  }
};

const updateTask = (req: Request, res: Response) => {
  res.send({ status: "success", data: [] });
};

const deleteTask = (req: Request, res: Response) => {
  res.send({ status: "success", data: [] });
};

export { getAllTasks, createTask, getSingleTask, updateTask, deleteTask };
