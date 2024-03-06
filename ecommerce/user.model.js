import mongoose from "mongoose"

const userSchema = new mongoose.Scheme({

    userName: {
        type: String,
        required: true,
        unique:true,
        lowercase: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type:String,
        required: true,
    },
}, {timestamps:true});


export const User = mongoose.model('User',userSchema);