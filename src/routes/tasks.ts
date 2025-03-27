import {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} from "@controllers/tasks.controller";
import express from "express";
const taskRouter = express.Router();

taskRouter.route("/").get(getAllTasks);
taskRouter.route("/:id").get(getSingleTask);

taskRouter.route("/").post(createTask);

taskRouter.route("/:id").patch(updateTask);
taskRouter.route("/:id").delete(deleteTask);

export { taskRouter };
