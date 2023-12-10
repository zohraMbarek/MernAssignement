const mongoose=require("mongoose")
const AuthorSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: [3, "Name must be at least 3 characters"],
      },
   
}, { timestamps: true })
const Author=mongoose.model("Authore",AuthorSchema)
module.exports=Author