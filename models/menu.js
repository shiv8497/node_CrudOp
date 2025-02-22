import mongoose from "mongoose";


const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },

    price:{
        type: Number,
        required: true,
    },

    taste:{
        type: String,
        enum: ["sweet" , 'salty' , "sour"],
        required: true,
    },
    is_Drink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type:[String],
        default: 0,
    },
    num_Sales : {
        type: Number,
        default: 0,
    }
})

export const MenuItem = mongoose.model('MenuItem' , menuSchema )