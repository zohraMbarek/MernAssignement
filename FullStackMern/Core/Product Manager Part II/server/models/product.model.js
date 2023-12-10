const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema({
    Title:{
        type:String,
        required:[true,"The title is required"]
    },
    Price:{
        type:Number,
        required:[true,"The price is required"]
    },
    Description:{
        type:String,
        required:[true,"The description is required"]
    }
}, { timestamps: true })
const Product=mongoose.model("Product",ProductSchema)
module.exports=Product