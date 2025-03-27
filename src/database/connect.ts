import mongoose from "mongoose";

export function connectToDB(url: string) {
  return mongoose.connect(url);
}
