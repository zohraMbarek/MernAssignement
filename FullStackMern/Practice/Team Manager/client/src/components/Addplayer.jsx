import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';


const Addplayer=()=>{
const [name, setName] = useState(""); 
const[position,setPosition]=useState(""); 
const navigate = useNavigate();
const [errors, setErrors] = useState([]);



 const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players/addplayer', {name:name,position:position})
            .then(res=>{ 
              console.log(res)
              navigate("/")
            })
            .catch(err=>{
              const errorResponse = err.response.data.errors; 
              const errorArr = []; 
              for (const key of Object.keys(errorResponse)) { 
                  errorArr.push(errorResponse[key].message)
              }
              setErrors(errorArr);
          })  
         
    }
    
    
    return (
      <div > 
     <Card border="dark" style={{ width: '50rem' }}>
           
           <Card.Header> <h2><Card.Link href="/players/list">List</Card.Link> {'|'}
           <Card.Link href="/players/addplayer">Add player</Card.Link></h2>
           </Card.Header>
          <CardBody>
     <Card border="dark" style={{ width: '40rem' }}>
      <CardBody>
              <h3>Add player</h3> 
    <Form onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Player Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange = {(e)=>setName(e.target.value)}/>

        {errors.map((err, index) => (<p key="{index}" className='errortext'>* {err}</p>))}

    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Preferred position:</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange = {(e)=>setPosition(e.target.value)} />
    </Form.Group>
    {(name.length>1)?<Button  variant="success" type="submit" >ADD</Button>
    :<Button  variant="success" type="submit" disabled>ADD</Button>}

    {/* <Button  variant="success" type="submit" >ADD</Button> */}
     </Form>
     </CardBody>
     </Card>
     </CardBody> 
     </Card>
    </div> 
    )}
export default Addplayer;