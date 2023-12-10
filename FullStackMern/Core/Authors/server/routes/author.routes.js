const AuthorController=require("../controllers/author.controller")
module.exports = (app) => {
    
    app.post('/api/authors/new', AuthorController.createNewAuthor);   
    app.get('/api/authors', AuthorController.getAllAuthors); 
    app.get('/api/authors/:id', AuthorController.getOneAuthor);  
    app.patch('/api/authors/edit/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);

}