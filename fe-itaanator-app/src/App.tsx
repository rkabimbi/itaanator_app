import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import { ContractPage} from './pages/contract/ContractPage';


function App() {
  return (
    <div className="App">
      <Routes >
              <Route path="/" element={<ContractPage />} />
      </Routes>
    </div>
  );
}

export default App;
