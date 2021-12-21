const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const imageSchema = new mongoose.Schema({
    imagePath:{
        type:String,
        required: true,
    },
    relatedFolder:{
        type: ObjectId,
        ref: "Gallery",
        required: true
    }
    
},
{timestamps: true}
);

mongoose.model("Image", imageSchema);