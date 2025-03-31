import { Request, Response } from "express";
import { TaskModel } from "@models/task.schema";
import { asyncWrapper } from "src/middleware/async-wrapper";

const getAllTasks = asyncWrapper(async (req: any, res: any) => {
  const allTasks = await TaskModel.find();
  return res.status(200).json({ status: "success", data: allTasks });
});

const getSingleTask = asyncWrapper(async (req: any, res: any) => {
  const { id: taskID } = req.params;
  const currentTask = await TaskModel.findOne({ _id: taskID });
  console.log(currentTask, "------currentTask");
  return res.status(200).json({ status: "success", data: [currentTask] });
});

const createTask = asyncWrapper(async (req: any, res: any) => {
  const createdTask = await TaskModel.create(req.body);
  return res.status(201).json({ status: "success", data: createdTask });
});

const updateTask = (req: Request, res: Response) => {
  res.send({ status: "success", data: [] });
};

const deleteTask = asyncWrapper(async (req: any, res: any) => {
  try {
    const { id: taskID } = req.params;
    const currentTask = await TaskModel.findOneAndDelete({ _id: taskID });
    if (!currentTask) {
      return res.status(404).json({
        status: "failed",
        message: `current task with ${taskID} was not found`,
      });
    }
    res.status(201).json({ status: "success", data: [currentTask] });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "something went wrong " });
  }
});

export { getAllTasks, createTask, getSingleTask, updateTask, deleteTask };
