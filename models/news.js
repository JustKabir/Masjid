const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true

    },
    
    image:{
        type: String
    },
    content:{
        type: String,
        required: true,
        trim: true
    }
},
{timestamps: true}
);

mongoose.model("News", newsSchema);