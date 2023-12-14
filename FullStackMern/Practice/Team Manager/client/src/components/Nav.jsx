import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Nav = (props) => {
  const { managePlayerStatusTabIsActive, setManagePlayerStatusTabIsActive } = props;

  const [managePlayerTabStyle, setManagePlayerTabStyle] = useState("");
  const [managePlayerStatusTabStyle, setManagePlayerStatusTabStyle] = useState("");

//   const styleObjBold = {
//     fontWeight: "800",
//   };

  useEffect(() => {
    if (managePlayerStatusTabIsActive) {
        console.log(managePlayerStatusTabIsActive)
      setManagePlayerStatusTabStyle("activepage");
      setManagePlayerTabStyle("inactivepage");
      
      console.log("style1:    "+setManagePlayerStatusTabStyle)
      console.log("style2:    "+setManagePlayerTabStyle)

    } else {
      setManagePlayerStatusTabStyle("inactivepage");
      setManagePlayerTabStyle("activepage");
    }
  }, []);
  return (
    <div>
             
     <h1><Card.Link href="/players/list" className={managePlayerTabStyle}>Manage Players</Card.Link> | 
      <Card.Link href="/status/game/1"  className={managePlayerStatusTabStyle}>Manage Player Status</Card.Link></h1>
          
            
      


      
    </div>
  );
};

export default Nav;