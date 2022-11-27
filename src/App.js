import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import AddDetails from './components/AddDetails';
import DetailsList from './components/DetailsList';
import UpdateDetails from './components/Update';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      
        <Route path="/adddetils" element={<AddDetails />} />
        <Route path="/detailslist" element={<DetailsList />} />
        <Route path="/update/:id" element={<UpdateDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;