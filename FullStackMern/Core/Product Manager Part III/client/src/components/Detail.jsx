import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:5000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);
    const container={
        margin: '50px auto',
        width: '200px',
        height: '200px',
        textalig:'center'
    }
    return (
        <div style={container}>
            <p> {product.Title}</p>
            <p>Price:$ {product.Price}</p>
            <p>Description: {product.Description}</p>
        </div>
    );
}
export default Detail;