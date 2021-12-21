const express = require('express');
const router = express.Router();
const multer = require('multer');
const galleryController = require('../controllers/galleryController');

const storage = multer.diskStorage({
    destination: function(req,res,cb){
        cb(null, './gallery');
    },
    filename: function(req,file,cb){
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
});

const filter = (req,file,cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        // This means we are accepting the file, Keeting it null wont show us any errors
        cb(null, true);
    } else{
        // This means we are rejecting the file, keeping it null wont show us any errors
        cb(new Error('File type is unaccepted'), false)
    }
}

const upload = multer({
    storage: storage, 
    limits:{
        // we have to set the number in bytes and we have set it to 5mb
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: filter  
});

// Middleware
// const signedIn = require('../middleware/signedIn');
const signinRequired = require('../middleware/signinRequired');




// Routes
router.post('/images', signinRequired, upload.array('images',12) ,galleryController.images_post);
router.post('/videoPath', signinRequired,galleryController.videoPath_post);

module.exports = router;