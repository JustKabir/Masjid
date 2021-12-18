const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true

    },
    
    password:{
        type: String,
        required: true,
    },
    its:{
        type: Number,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
        default: "user"
    }

},
{timestamps: true}
);

mongoose.model("User", userSchema);