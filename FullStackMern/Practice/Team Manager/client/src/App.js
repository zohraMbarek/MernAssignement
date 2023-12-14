import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Allplayers from './components/AllPlayers';
import Addplayer from './components/Addplayer';
import StatusManage from './components/StatusManage';
import './components/style.css';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import CardBody from 'react-bootstrap/esm/CardBody';
import Nav from './components/Nav';
function App() {
  const [listPageIsActive, setListPageIsActive] = useState(true);
  const [managePlayerStatusTabIsActive, setManagePlayerStatusTabIsActive] = useState(false);
  return (
   
    <div className='container'>

 <Card border="dark" style={{ width: '60rem' }}>
    <CardHeader> 
      <Nav managePlayerStatusTabIsActive={managePlayerStatusTabIsActive}
        setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
      />
    </CardHeader>
    <CardBody>
      <BrowserRouter>
            <Routes>
            <Route element={<Allplayers/>} path="players/list" default 
            
            listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive}
          setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
            
            
            /> 
            <Route element={<Addplayer/>} path="/players/addplayer"
            listPageIsActive={listPageIsActive}
            setListPageIsActive={setListPageIsActive}
            setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
                       
            /> 
             <Route element={<StatusManage/>} path="/status/game/:gameId" 
             setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive} />  
            </Routes>
      </BrowserRouter>
      </CardBody>
      </Card> 
    </div>
    
  );
}
export default App;