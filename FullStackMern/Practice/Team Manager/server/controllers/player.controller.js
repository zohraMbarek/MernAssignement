const Player=require("../models/player.model")
module.exports.createNewPlayer=(req,res)=>{
    Player.create(req.body)
    .then(newplayer=>{
        res.json({player:newplayer})
    })
    .catch(err => res.status(400).json(err))
}


module.exports.getAllPlayers = (request, response) => {
    Player.find({})
        .then(players => {
            response.json(players);
        })
        .catch(err => {
            response.json(err)
        })
}

module.exports.getOnePlayer=(request,response)=>{
    Player.findOne({_id:request.params.id})
    .then(player=>{
        response.json(player)
    })
    .catch(err => {
        response.json(err)
    })
}

module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.json(err))
}

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
