const express = require("express")

const app = express()
const cors = require('cors')  
require("dotenv").config()
require("./config/mongoose.config")
app.use(cors())  
app.use(express.json());                                         
app.use(express.urlencoded({ extended: true }));
const port = 8000

const Routes = require("./routes/author.routes")
Routes(app)

app.listen(port, () => {
    console.log(`>>>>> Server is running on Port ${port} 🎈🎈🎈`)
})