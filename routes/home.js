const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');


// Middleware
const signinRequired = require('../middleware/signinRequired');

// Routes
router.get('/', signinRequired,homeController.home_get);
router.get('/committee', signinRequired,homeController.committee_get);



module.exports = router;