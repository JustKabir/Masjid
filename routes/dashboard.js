const dashboardController = require('../controllers/dashboardController');
const express = require('express');
const router = express.Router();
const multer = require('multer');

// CONFIGERING MULTER
// destination: defines where the incoming file should be stored
// filename: Defies how the fie should be namd
const storage =  multer.diskStorage({
    destination: function(req, file, cb){
        // 1st argument: Takes potential errors which we have kept null.
        // 2nd arg: Location of the folder where u want to store the images.
        cb(null, './homeUploads/');
    },
    filename:  function(req, file, cb){
        // here we have named the file as per the time it was uploaded and attached its orignal name in the end.
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
});

// File Filter will help us accept or reject the file passed to the server
const fileFilter = (req, file, cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        // This means we are accepting the file, Keeting it null wont show us any errors
        cb(null, true);
    } else{
        // This means we are rejecting the file, keeping it null wont show us any errors
        cb(new Error('File type is unaccepted'), false)
    }
}

// Multer Config
const upload = multer({
    storage: storage, 
    limits:{
        // we have to set the number in bytes and we have set it to 5mb
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter  
});


// For Quick use we can also just do this but prefer the above storage config
// const upload = multer({dest: 'homeUploads/'});



// Middleware
const adminSigninRequired = require('../middleware/adiminSigninRequired');

// Routes
router.get('/', adminSigninRequired,dashboardController.dashboard_get);
router.post('/homeCreate', adminSigninRequired,upload.single('homeImage'),dashboardController.homeCreate_post);
// router.post('/news/create', adminSigninRequired,newsUpload.single('newsImage'),dashboardController.newsCreate_post);


module.exports = router;