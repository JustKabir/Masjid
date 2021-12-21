const express = require('express');
const router = express.Router();
const liveController = require('../controllers/liveController');


// Middleware
// const signedIn = require('../middleware/signedIn');
const signinRequired = require('../middleware/signinRequired');

// Routes
router.get('/', signinRequired,liveController.live_get);
router.post('/', signinRequired,liveController.live_post);

module.exports = router;