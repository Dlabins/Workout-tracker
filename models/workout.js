const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
      day: {
        type: Date,
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "What type of workout is this?"
          },
          name: {
            type: String,
            trim: true,
            required: "What is this workout called?"
          },
          duration: {
            type: Number,
            required: "How many minutes is this workout?"
          },
          weight: {
            type: Number,
          },
          reps: {
            type: Number,
          },
          sets: {
            type: Number,
          },
          distance: {
            type: Number,
          }
        }
      ]
    },
  );
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;