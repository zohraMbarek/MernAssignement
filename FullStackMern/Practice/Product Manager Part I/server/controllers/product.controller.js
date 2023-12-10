const Product=require("../models/product.model")
module.exports.createNewProduct=(req,res)=>{
    Product.create(req.body)
    .then(newProduct=>{
        res.json({product:newProduct})
    })
    .catch((err)=>{
        res.json(console.log("something went wrong",err))
    })
}