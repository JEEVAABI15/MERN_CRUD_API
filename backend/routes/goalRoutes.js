const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, removeGoal} = require('../controllers/goalController')


router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(removeGoal)


module.exports = router





















// router.get('/', getGoals)

// router.post('/',setGoal)

// router.put('/:id',updateGoal)

// router.delete('/:id',removeGoal)