import React  from 'react';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './Styles/Global.css'
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';
import UsersTabla from './api/id';
import Dashboard from './Components/Dashboard';
import Ban from './Components/Ban';
import Ordes from './Components/Ordes'



function App() {
  return (

    <BrowserRouter>
    <Routes>

    <Route path="/" element={localStorage.getItem('rol') === "ban" ? <Ban/> : <Home/>}/>
    <Route path="/dashboard" element={localStorage.getItem('token') ?  <Dashboard/> : <Login/>}/>
    <Route path="/login" element={localStorage.getItem('rol') === "ban" ? <Ban/> : <Login/>}/>
    <Route path="/register" element={localStorage.getItem('rol') === "ban" ? <Ban/> : <Register/>}/>
    <Route path="/admin" element={localStorage.getItem('rol') === "admin"  ? <UsersTabla/> : <Ban/>}/>
    <Route path="/ordenes" element={localStorage.getItem('rol') === "ban" ? <Ban/> : <Ordes/>}/>


  


  
 
 

    

    </Routes>
    </BrowserRouter>

  );
}

export default App;
