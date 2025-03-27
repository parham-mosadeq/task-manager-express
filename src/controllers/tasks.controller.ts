import { Request, Response } from "express";
const getAllTasks = (req: Request, res: Response) => {
  res.send({ status: "success", data: [] });
};

const getSingleTask = (req: Request, res: Response) => {
  res.send({ status: "success", data: [] });
};

const createTask = (req: Request, res: Response) => {
  res.send({ status: "success", data: [] });
};

const updateTask = (req: Request, res: Response) => {
  res.send({ status: "success", data: [] });
};

const deleteTask = (req: Request, res: Response) => {
  res.send({ status: "success", data: [] });
};

export { getAllTasks, createTask, getSingleTask, updateTask, deleteTask };
