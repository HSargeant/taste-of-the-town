const express = require('express')
const router = express.Router()
const todosController = require('../controllers/checkin') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getCheckins)

router.post('/createCheckin', todosController.createCheckin)

router.delete('/deleteCheckin', todosController.deleteCheckin)

module.exports = router