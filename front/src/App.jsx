import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom"
import NavBar from './NavBar.jsx'
import AboutMe from './AboutMe.jsx'
import Sample from './sample.jsx'
import axios from "axios";

const App = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/content")
      .then((res) => setItem(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <NavBar/>
    <AboutMe data={item}/> 
    
    
    </>
  )
}


export default App;
