import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Allplayers=()=>{

const navigate = useNavigate();
const [players,setPlayers]=useState([])

const removeFromDom = playerId => {
    setPlayers(players.filter(player => player._id !== playerId)); 
}
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/players/list")
    	.then((res)=>{setPlayers(res.data);
        console.log(res.data)})
    	.catch((err)=>{ console.log(err);})
    }, [])

   

    const deletePlayer = (playerId) => {

        axios.get('http://localhost:8000/api/players/'+ playerId)
        .then(res => {
        alert("Are you sure you want to remove "+res.data.name)
        
         })
        .catch(err => console.log(err))
        

        axios.delete('http://localhost:8000/api/players/'+ playerId)
            .then(res => {
                removeFromDom(playerId)
            })
            .catch(err => console.log(err))
    }
   
const tablestyle={border:'1px solid black'}

    return(
        <Card style={{ width: '50rem' }}>
           
             <Card.Header> <h2><Card.Link href="/players/list">List</Card.Link> {'|'}
             <Card.Link href="/players/addplayer">Add player</Card.Link></h2>
             </Card.Header>
      <Card.Body>

            <Table striped bordered hover Style="tablestyle" >
            <thead> <tr><th >Team name</th><th>Preferred Position</th><th>Actions</th></tr> </thead>
            <tbody>
            {
                players.map((player, index)=>{
                    console.log(player)
                return( <tr key={index}><td>{player.name}</td>
                <td>{player.position}</td>
                <td> 
                <Button variant="danger" size="lg" onClick={(e)=>{deletePlayer(player._id)}}>Delete</Button> 
                </td> 
                </tr>) 
               
                
                })
            }
            </tbody>
            </Table>
            </Card.Body>
        </Card>

    )

        }
export default Allplayers;
