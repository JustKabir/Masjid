const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true

    },
    
   image:{
       type: String
   }
},
{timestamps: true}
);

mongoose.model("Home", homeSchema);