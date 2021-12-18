const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


// Middleware
const signedIn = require('../middleware/signedIn');
const signinRequired = require('../middleware/signinRequired');

// Routes
router.get('/', signedIn,authController.login_get);
router.post('/', signedIn,authController.login_post);
router.post('/logout', signinRequired, authController.logout_post);


module.exports = router;