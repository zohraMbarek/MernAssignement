import './App.css';
import ColorForm from './Components/ColorForm';
import BoxComponent from './Components/BoxComponent';
import { useState } from 'react';

function App() {
  const [boxes, setBoxes]=useState([]);
  const additionBox=(color, dim)=>{
    const box={box_color:color,dimension:dim}
    setBoxes([...boxes,box])
  }
  return (
    <div className="App">
      <ColorForm addBox={additionBox} />
       <BoxComponent boxes={boxes}/>
    </div>
  );
}

export default App;
