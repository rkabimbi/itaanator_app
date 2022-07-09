import React from 'react';
import logo from './logo.svg';
import './App.css';
//import {Login} from "./components/Login/Login/Login"
import {Routes, Route} from "react-router-dom"
import Login from "./components/Login/Login/Login"
import Dashboard from './components/Dashboard/Dashboard/Dashboard'



function App() {


  return (
    <div className="App">
     <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

/* <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>*/ 