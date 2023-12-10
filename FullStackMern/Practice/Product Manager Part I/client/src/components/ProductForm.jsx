import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const ProductForm = () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState();
    const [description, setDescription] = useState(""); 

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/products', {
            Title:title,    
            Price:price,
            Description:description      
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
            })
            .catch(err=>console.log(err))
         
    }
    
    return (
        
    <Form onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange = {(e)=>setTitle(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="Number" placeholder="Enter price" onChange = {(e)=>setPrice(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" onChange = {(e)=>setDescription(e.target.value)}/>
    </Form.Group>

      
      <Button variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>
    )
}
export default ProductForm;