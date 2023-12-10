import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main'
import Detail from './components/Detail';
function App() {
  return (
   
    <div>
       <BrowserRouter>
    
          <Routes>
            <Route element={<Main/>} path="/" default /> 
            <Route element={<Detail/>} path="/products/:id" /> 
           

          </Routes>
          </BrowserRouter>
    
      </div>
    
  );
}
export default App;