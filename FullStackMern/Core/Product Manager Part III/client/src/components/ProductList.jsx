import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const ProductList=(props)=>{

    const{products,setProducts, removeFromDom}=props;

    useEffect(()=>{
    	axios.get("http://localhost:5000/api/products")
    	.then((res)=>{
            setProducts(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    const container={
        margin: '50px auto',
        width: '400px',
        height: '300px',
    }
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:5000/api/edit/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    return(
        <div style={container}>
            <h1>All Products:</h1>
            {
                products.map((product, index)=>{
                    console.log(product)
                return(<div key={index}><p><Link to={`/products/${product._id}`}>{product.Title}</Link></p>
                <p><Link to={"/edit/" + product._id}>Edit</Link></p> 
                
                        <button onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button></div>) 
                
               
                })
            }
        </div>

    )

}
export default ProductList;