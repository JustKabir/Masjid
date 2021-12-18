const express = require('express');
const router = express.Router();
// require('../models/user');
const homeController = require('../controllers/homeController');


// Middleware
const signinRequired = require('../middleware/signinRequired');

// Routes
router.get('/', signinRequired,homeController.home_get);



module.exports = router;