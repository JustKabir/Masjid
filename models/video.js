const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const videoSchema = new mongoose.Schema({
    url:{
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

mongoose.model("video", videoSchema);