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


module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(Products => {
            response.json(Products);
        })
        .catch(err => {
            response.json(err)
        })
}

module.exports.getOneProduct=(request,response)=>{
    Product.findOne({_id:request.params.id})
    .then(product=>{
        response.json(product)
    })
    .catch(err => {
        response.json(err)
    })
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
