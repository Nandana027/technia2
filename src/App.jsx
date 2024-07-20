import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import { useState } from "react";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Testimonial from "./Components/Testimonial";






function App() {
const[isLoggedIn,setIsLoggedIn]
=useState(false);

  return(
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about/" element={<About/>}/>
        <Route path="signup/" element={<Signup/>}/>
        <Route path="login/" element={<Login/>}/>
        <Route path="testimonial/" element={<Testimonial/>}/>
        
        
      </Routes>

    </div>
  )
}

export default App;
