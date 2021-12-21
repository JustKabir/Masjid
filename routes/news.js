const newsController = require('../controllers/newsController');
const express = require('express');
const router = express.Router();
const multer = require('multer');

const newsStorage =  multer.diskStorage({
    destination: function(req, file, cb){
        // 1st argument: Takes potential errors which we have kept null.
        // 2nd arg: Location of the folder where u want to store the images.
        cb(null, './newsUploads/');
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

const newsUpload = multer({
    storage: newsStorage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter 
});


// Middleware
const adminSigninRequired = require('../middleware/adiminSigninRequired');
const signinRequired = require('../middleware/signinRequired');

router.post('/', adminSigninRequired , newsUpload.single('newsImage') ,newsController.newsCreate_post);
router.get('/', signinRequired ,newsController.news_get);

module.exports = router;
