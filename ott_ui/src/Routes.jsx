import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
// import Signout from "./pages/Signout";
import Signout from "./pages/Signout";
import NavBar from "./components/NavBar";
import 

function AppRoutes() {
  return (
    <Router>
      
      <Routes>
       
        <Route path="/" element={<SignIn/>}/>
        <Route path="/Signout" element={<Signout/>}/>
        <Route path="/" element={<Welcome/>}/>

        
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
