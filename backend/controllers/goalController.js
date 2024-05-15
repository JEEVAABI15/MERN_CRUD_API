const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModel');


// GET goal
// GET/api/goals
// Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
});

// SET goal
// POST /api/goals
// Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    const goal = await Goal.create({
        text: req.body.text
    });

    res.status(200).json(goal);
});

// Update goal
// PUT /api/goals/:id
// Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(404);
        throw new Error('Goal not found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true

    })

    res.status(200).json(updatedGoal);
});

// Delete goal
// DELETE /api/goals/:id
// Private
const removeGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findOneAndDelete(req.params.id);
    // console.log(goal); 
    if (!goal) {
        res.status(404);
        throw new Error('Goal not found');
    }

    // await goal.remove(); 

    res.status(200).json({ message: `Deleted goal ${req.params.id}` });
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    removeGoal
};
