import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './style.css';


const EditAuthor=(props)=>{
    const { id } = useParams(); 
    const [name, setName] = useState();
    const [errors, setErrors] = useState({});
  const [authorNotFoundError, setAuthorNotFoundError] = useState("");
  console.log(id);
    const navigate = useNavigate();
      useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log(res.data)
                setName(res.data.name);})
            .catch(err => {console.log(err)
            setAuthorNotFoundError('Author not found with this ID')})
    }, [])
    const updateAuthor = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/authors/edit/' + id, {
            name:name   
        })
            .then(res => {
                console.log(res);
                navigate("/"); 
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);})
    }
    return (
        <div>
            <h1>Favourite authors</h1>
            <Link to={"/"}>Home</Link>
      <p>Edit this author:</p>
            <div className='addForm'>
    <Form onSubmit={updateAuthor}>
    {authorNotFoundError ? (
        <h2>
          {authorNotFoundError} <Link to="/new">Click here to add author</Link>
        </h2>
      ) : null}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange = {(e)=>setName(e.target.value)}/>
    </Form.Group>
    {errors.name ? <p>{errors.name.message}</p> : null}
    <Button variant="primary" type="submit">Submit</Button>{'   '}
    <Button variant="primary" type="reset">Cancel</Button>
    </Form>
    </div>
    </div> 

    )
}


export default EditAuthor;