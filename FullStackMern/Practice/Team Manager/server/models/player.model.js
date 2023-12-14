const mongoose=require("mongoose")
const PlayerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"The name is required"],
        minLength: [2, "Name must be at least 2 characters in length"],
    },
    position:{
        type:String,
       
    }, gameOneStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
      },
      gameTwoStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
      },
      gameThreeStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
      },
    
}, { timestamps: true })
const Player=mongoose.model("Player",PlayerSchema)
module.exports=Player