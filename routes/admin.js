const express = require('express');
const router = express.Router();
const adminAuthController = require('../controllers/adminAuthController');


// Middleware
const signedIn = require('../middleware/adminSignedIn');
const adminSigninRequired = require('../middleware/adiminSigninRequired');

// Routes
router.get('/', signedIn,adminAuthController.login_get);
router.post('/', signedIn,adminAuthController.login_post);
router.post('/logout', adminSigninRequired,adminAuthController.logout_post);


module.exports = router;