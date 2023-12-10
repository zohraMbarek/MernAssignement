const Author=require("../models/author.model")
module.exports.createNewAuthor=(req,res)=>{
    Author.create(req.body)
    .then(newAuthor=>{
        res.json({author:newAuthor})
    })
    .catch((err)=>{
        res.json(console.log("something went wrong",err))
    })
}


module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(Authors => {
            response.json(Authors);
        })
        .catch(err => {
            response.json(err)
        })
}

module.exports.getOneAuthor=(request,response)=>{
    Author.findOne({_id:request.params.id})
    .then(author=>{
        response.json(author)
    })
    .catch(err => {
        response.json(err)
    })
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}