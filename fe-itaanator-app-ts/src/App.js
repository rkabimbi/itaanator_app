import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"
import { ContracPage } from './pages/contract/ContracPage';





function App() {
  return (
    <div className="App">
      <Routes >
              <Route path="/" element={<ContracPage/>} />
      </Routes>
    </div>
  );
}

export default App;
