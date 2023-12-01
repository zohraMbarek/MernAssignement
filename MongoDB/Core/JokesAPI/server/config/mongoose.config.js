const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/jokesdb")
.then(()=>{ console.log("established a connection to database")})
.catch(err=>console.log("connection error",err))

