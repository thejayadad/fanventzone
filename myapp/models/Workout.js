import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    duration: { type: Number, required: true }, // Duration in minutes
    distance: { type: Number },
    calories: { type: Number },
    notes: { type: String },
  });

const WorkoutSchema = new mongoose.Schema({
    creator: {type: String, required: true},
    title: String,
    exercises: [exerciseSchema],
 }, {timestamps: true})

export default mongoose?.models?.Workout || mongoose.model("Workout", WorkoutSchema)