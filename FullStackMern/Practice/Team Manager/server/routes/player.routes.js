const PlayerController=require("../controllers/player.controller")
module.exports = (app) => {
    
    app.post('/api/players/addplayer', PlayerController.createNewPlayer);   
    app.get('/api/players/list', PlayerController.getAllPlayers); 
    app.get('/api/players/:id', PlayerController.getOnePlayer);  
    app.patch('/api/edit/:id', PlayerController.updatePlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);

}