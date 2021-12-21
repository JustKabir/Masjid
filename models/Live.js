const mongoose = require('mongoose');

const liveSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        trim: true
    },
    link:{
        type: String,
        required: true,
        // trim: true

    },
    
}
);

mongoose.model("Live", liveSchema);