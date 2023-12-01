import './App.css';
import {  Route, Routes } from 'react-router-dom';
import VarComponent from './components/VarComponent';
import Home from './components/Home';


function App() {
  return (
    <div className="App">

<Routes>
  <Route element={<Home />} path="/home"/>
  <Route element={<VarComponent />} path="/:word" />
  <Route element={<VarComponent />} path="/:word/:color/:bgCol" />
</Routes>

</div>
      
  );
}

export default App;
