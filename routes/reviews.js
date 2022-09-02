const express = require('express')
const router = express.Router()
const reviewsController = require('../controllers/checkin') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, reviewsController.getCheckins)
router.get('/:id', ensureAuth, reviewsController.editCheckin)
router.put('/update', ensureAuth, reviewsController.updateCheckin)


router.post('/createCheckin', reviewsController.createCheckin)

router.delete('/deleteCheckin', reviewsController.deleteCheckin)

module.exports = router