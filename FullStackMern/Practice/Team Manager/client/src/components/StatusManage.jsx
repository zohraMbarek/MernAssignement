import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


const StatusManage=()=>{

    
  const navigate = useNavigate();
  const [players,setPlayers]=useState([])
  
 
      useEffect(()=>{
        axios.get("http://localhost:8000/api/players/list")
        .then((res)=>{setPlayers(res.data);
          console.log(res.data)})
        .catch((err)=>{ console.log(err);})
      }, [])


    //   const btn1variant=(ps)=>{
    //     if(ps==="Playing") {return("success")}
    // else{ return ("light")}
    //   }
    //   const btn2variant=(ps)=>{
    //     if(ps==="Not Playing") {return("danger")}
    //     else{ return ("light")}
    //   }
    //   const btn3variant=(ps)=>{
    //     if(ps==="Undecided") {return("warning")}
    //     else{ return ("light")}
    //   }

  const ChangeStatus=(playerid,playerstatus)=>{
    axios.patch('http://localhost:8000/api/edit/'+playerid, {
        gameOneStatus:playerstatus  })
        .then(res => {
            console.log(res);
            console.log("le nouveau status est:  "+playerstatus )
         
                       
        })
        .catch((err)=>{ console.log(err);})  
  
}



  
    
     
 
  
      return(
          <Card style={{ width: '50rem' }}>
            <Card.Header><h2>Player Status Game 1</h2>  </Card.Header>
            <Card.Body>
                <Table striped bordered hover >
                    <thead> <tr><th >Team name</th><th>Actions</th></tr> </thead>
              <tbody>
              {
                  players.map((player, index)=>{
                  
                    console.log(player)
                    return( <tr key={index}><td>{player.name}</td>
                        <td> 
                        <Button variant={`${player.gameOneStatus === "Playing"? "success": "light"}`} size="lg" onClick={(e)=>{ChangeStatus(player._id, "Playing")}}>Playing</Button> 
                        {' '}<Button variant={`${player.gameOneStatus === "Not Playing"? "danger": "light"}`} size="lg" onClick={(e)=>{ChangeStatus(player._id, "Not Playing")}}>Not Playing</Button> 
                        {' '}<Button variant={`${player.gameOneStatus === "Undecided"? "warning": "light"}`} size="lg" onClick={(e)=>{ChangeStatus(player._id, "Undecided")}}>Undecided</Button> 
                        </td> 
                    </tr>) })
}
              </tbody>
              </Table>
              </Card.Body>
          </Card>
  
      )
  
          }
  
  
export default StatusManage;