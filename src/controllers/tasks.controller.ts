import { Request, Response } from "express";
import { TaskModel } from "@models/task.schema";

const getAllTasks = async (req: any, res: any) => {
  try {
    const allTasks = await TaskModel.find();
    return res.status(200).json({ status: "success", data: allTasks });
  } catch (error: any) {
    if (error?.errors)
      return res
        .status(400)
        .json({ status: "error", message: error.errors.name.message });
  }
};

const getSingleTask = async (req: any, res: any) => {
  try {
    const { id: taskID } = req.params;
    const currentTask = await TaskModel.findOne({ _id: taskID });
    console.log(currentTask, "------currentTask");
    return res.status(200).json({ status: "success", data: [currentTask] });
  } catch (error) {
    return res
      .status(404)
      .json({ status: "error", message: "No value found by this id" });
  }
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
