import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const ProductList=(props)=>{

    const{products,setProducts}=props;

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

    return(
        <div style={container}>
            <h1>All Products:</h1>
            {
                products.map((product, index)=>{
                    console.log(product)
                return(<p key={index}><Link to={`/products/${product._id}`}>{product.Title}</Link></p>) 
                
               
                })
            }
        </div>

    )

}
export default ProductList;