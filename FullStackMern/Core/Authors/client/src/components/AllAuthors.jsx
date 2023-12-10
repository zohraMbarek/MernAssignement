import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './style.css';


const AllAuthors=()=>{

const navigate = useNavigate();
const [authors,setAuthors]=useState([])
const removeFromDom = authorId => {
    setAuthors(authors.filter(author => author._id !== authorId)); 
}
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/authors")
    	.then((res)=>{setAuthors(res.data);
        console.log(res.data)})
    	.catch((err)=>{ console.log(err);})
    }, [])
    const container={
        margin: '50px auto',
        width: '600px',
        height: '700px',
    }
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/'+ authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err))
    }
   
const tablestyle={border:'1px solid black'}

    return(
        <div style={container}>
            <h1>Favorite authors:</h1>
            <p><Link to={"/authors/new"}>Add an author</Link></p>  
            <p>We have quotes by:</p>
            <Table striped bordered hover Style="tablestyle" >
            <thead> <tr><th >Author</th><th>Actions Available</th></tr> </thead>
            <tbody>
            {
                authors.map((author, index)=>{
                    console.log(author)
                return( <tr key={index}><td>{author.name}</td>
                <td> 
                <Button variant="secondary" size="lg" onClick={(e)=>{navigate("/authors/edit/"+author._id)}}>Edit</Button>{" "}
                <Button variant="secondary" size="lg" onClick={(e)=>{deleteAuthor(author._id)}}>Delete</Button> 
                </td> 
                </tr>) 
               
                
                })
            }
            </tbody>
            </Table>
        </div>

    )

        }
export default AllAuthors;
{/* <td>
                      <Link to={`/edit/${author._id}`}>
                        <button className="btn btn-primary">Edit</button>
                      </Link>

                      <button
                        onClick={() => handleDeleteAuthor(author._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td> */}