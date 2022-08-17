import React  from 'react';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './Styles/Global.css'
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';
import UsersTabla from './api/id';



function App() {
  return (

    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/admin" element={<UsersTabla/>}/>



  
 
 

    

    </Routes>
    </BrowserRouter>

  );
}

export default App;
