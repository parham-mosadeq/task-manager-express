import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Name must be provided"],
    maxlength: [20, "Name should not be greater than 20 characters"],
    minlength: [3, "Name should not be less than 3 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TaskModel = mongoose.model("TaskModel", TaskSchema);
export { TaskModel };
