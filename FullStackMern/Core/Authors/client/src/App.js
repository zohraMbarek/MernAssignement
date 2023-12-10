import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllAuthors from './components/AllAuthors';
import Addnew from './components/Addnew';
import EditAuthor from './components/EditAuthor';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   
    <div>
       <BrowserRouter>
    
          <Routes>
            <Route element={<AllAuthors/>} path="/" default /> 
            <Route element={<Addnew/>} path="/authors/new" /> 
            <Route element={<EditAuthor/>} path="/authors/edit/:id"  /> 
                  
         </Routes>
          </BrowserRouter>
    
      </div>
    
  );
}
export default App;