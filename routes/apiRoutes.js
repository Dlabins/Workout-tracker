const db = require("../models");


module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {

        db.Workout.find({})
        .then(dbWorkout => {
           res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

    // Add an exercise
    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $push: { exercises: req.body }
            },
            { new: true })
            .then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });

    });

    //Make a workout
    app.post("/api/workouts", ({ data }, res) => {

        db.Workout.create(data)
        .then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.json(err);
        });
    });
}