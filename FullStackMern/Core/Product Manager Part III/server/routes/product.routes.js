const ProductController=require("../controllers/product.controller")
module.exports = (app) => {
    
    app.post('/api/products', ProductController.createNewProduct);   
    app.get('/api/products', ProductController.getAllProducts); 
    app.get('/api/products/:id', ProductController.getOneProduct);  
    app.patch('/api/edit/:id', ProductController.updateProduct);
    app.delete('/api/edit/:id', ProductController.deleteProduct);

}