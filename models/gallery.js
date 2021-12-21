const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    folderName:{
        type:String,
        required: true,
        trim: true
    }
},
{timestamps: true}
);

mongoose.model("Gallery", gallerySchema);