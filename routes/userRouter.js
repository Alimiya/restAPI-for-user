const express = require('express')
const router = express.Router()
const Controller = require('../controllers/userController')

router.get('/users', Controller.getAllUsers)
router.post('/users', Controller.createUser)
router.put('/users/:id', Controller.updateUserById)
router.delete('/users/:id', Controller.deleteUserById)
router.get('/users/:id', Controller.getUserById)

module.exports = router