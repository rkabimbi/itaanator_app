import React from "react";
import logo from "./logo.svg";
import "./App.sass";
//import {Login} from "./components/Login/Login/Login"
import { Routes, Route } from "react-router-dom";

import SideNavBar from "./components/SideNavBar/SideNavBar";
import Dashboard from "./page/dashboard/dashboard";
import Budget from "./page/budget/budget";
import Documentation from "./page/documentation/documentation";
import Login from "./page/login/login";
import SearchBar from "./components/SearchBar/SearchBar";


function App() {
  const authentified = true;

  if (!authentified) {
    return <Login />;
  } 
  
  else {
    return (
      <div className="App">
        
          <SideNavBar /> 
        
          <div className="partieDroite"> 
            <div className="searchBar">
              <SearchBar titre="Liste"/>
            </div>
          
          
            <div className="contenu">
            <Routes >
              <Route path="/" element={<Dashboard />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/documentation" element={<Documentation />} />
            </Routes>
            </div>
          </div>
        </div>
        
    
    );
  }
}

export default App;
