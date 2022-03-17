import React from 'react'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import './App.css'
import Card from './Components/Card'
import Home from './Components/Start'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/game" element={<Card />} />
      </Routes>
    </Router>
    </>
    
          
          
          
  );
}

export default App