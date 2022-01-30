const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')
const isAuthenticated = require('../middleware/authenticator')

router.post('/favourites', isAuthenticated, controller.postFavourites)
router.get('/favourites', isAuthenticated, controller.getFavourites)

module.exports = router