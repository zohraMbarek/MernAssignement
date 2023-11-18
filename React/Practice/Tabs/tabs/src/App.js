import './App.css';
import { useState } from 'react';
import MessageBox from './Components/MessageBox';
import TabsArray from './Components/TabsArray';

function App() {
  const ArrayTab=[
    {label:"Tab 1", content:"This is Tabs assignement"},
    {label:"Tab 2", content:"Coding DoJo"},
    {label:"Tab 3", content:"Mern stack"}
  ]
  const [message, setMessage]=useState("")
  const displaymsg=(msg)=>{
  setMessage(msg);
  }

  return (
    <div className="App">
      <TabsArray tab={ArrayTab} dis={displaymsg}/>
      <MessageBox msg={message}/>
      
    </div>
  );
}

export default App;
