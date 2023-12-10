const express = require("express")

const app = express()
const cors = require('cors')  
require("dotenv").config()
require("./config/mongoose.config")
app.use(cors())  
app.use(express.json());                                         
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT

const Routes = require("./routes/product.routes")
Routes(app)


app.listen(port, () => {
    console.log(`>>>>> Server is running on Port ${port} 🎈🎈🎈`)
})