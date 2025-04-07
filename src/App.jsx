import React from "react"; 
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";

import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <Router>
      
  
       <Dashboard/>
    </Router>
  );
}

export default App;


