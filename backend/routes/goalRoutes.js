const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, removeGoal} = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware') 

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, removeGoal)


module.exports = router





















// router.get('/', getGoals)

// router.post('/',setGoal)

// router.put('/:id',updateGoal)

// router.delete('/:id',removeGoal)