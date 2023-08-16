import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom"
import NavBar from './NavBar.jsx'
import AboutMe from './AboutMe.jsx'

const App = () => {

  return (
    <>
    <div>
     <NavBar/>
     <AboutMe/>
      
    </div>
    </>
  )
}


export default App;
