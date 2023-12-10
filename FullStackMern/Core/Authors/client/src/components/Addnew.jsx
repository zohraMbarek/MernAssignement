import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';

const Addnew=(props)=>{
const{authors,setAuthors}=props;
const [name, setName] = useState(""); 
const navigate = useNavigate();
const [errors, setErrors] = useState({});


 const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', {
            name:name   
        })
            .then(res=>{
                setAuthors([...authors, res.data]);
                navigate("/")
            })
            .catch(err=>{console.log(err)
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })
         
    }
    const onCancelhandler=()=>{navigate("/")}
    const container={
        margin: '20px auto',
        width: '400px',
        height: '300px',
    }
    
    return (
      <div style={container}> 
      <h1>Favourite authors</h1>
      <Link to={"/"}>Home</Link>
      <p>Add a new author:</p>
      <div className='addForm'>
    <Form onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange = {(e)=>setName(e.target.value)}/>

    </Form.Group>
    {errors.name ? <p>{errors.name.message}</p> : null} 
    <Button variant="primary" type="submit">Submit</Button>{'   '}
    <Button variant="primary" onClick={onCancelhandler}>Cancel</Button>
    </Form></div>
    </div> 
    )

    

}
export default Addnew;