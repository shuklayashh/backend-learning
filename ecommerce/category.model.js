import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
},{timestamp:true})

export const Ctegory = mongoose.model("Category",categorySchema)