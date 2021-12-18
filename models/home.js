const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
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