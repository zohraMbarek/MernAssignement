import './App.css';
import { useState } from 'react';
import AddForm from './components/AddForm';
import DeleteForm from './components/DeleteForm';

function App() {
  const [tasks,setTasks]=useState([])
  const addTask=(text,completed)=>{
    const newtask={text_task:text,comp:completed}
    setTasks([...tasks,newtask])
  }
  return (
    <div className="App">
      <AddForm addNewTask={addTask}/>
      <DeleteForm taskList={tasks}/>
    
    </div>
  );
}

export default App;
