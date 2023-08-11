import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Outlet, Link } from "react-router-dom"
import NavBar from './NavBar.jsx'
import './assets/App.css'

const App = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/mema")
      .then((res) => setItem(res.data))
      .catch((err) => { 
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <NavBar/>
        <h1>hello</h1>
       
      </div>
      
    </div>
  )
}


export default App;
