import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    productImage: {
        type:Number,
        default: 0
    },
    stock : {
        default: 0,
        type: Number
    },
    category: {
        type:mongosse.Schema.Types.ObjectId,
        ref:"Category",
        required: true,
    },
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamp: true})

export const Product = mongoose.model("Product",productSchema)