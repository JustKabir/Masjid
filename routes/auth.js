const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


// Middleware
const signedIn = require('../middleware/signedIn');
const signinRequired = require('../middleware/signinRequired');

// Routes
router.get('/', signedIn,authController.login_get);
router.post('/', signedIn,authController.login_post);
router.get('/committee',signinRequired, authController.com);
router.get('/logout', signinRequired, authController.logout_post);


module.exports = router;