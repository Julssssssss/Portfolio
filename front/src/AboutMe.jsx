import { useEffect, useState } from "react";
import "./assets/App.css";

const AboutMe = () => {
  

  return (
    <>
      <div className="parent">
        
            <div className="intPic" >
              <div className="intro"></div>
              <div className="pic dark:bg-black">
                <img className="Picture"/>
              </div>
            </div>
          
        
        {/* education */}
        <div className="rtu">
          <div className="logo">eme</div>
          <div className="about"></div>
        </div>
        <div className="au">
          <div className="about"></div>
          <div className="logo">eme</div>
        </div>
        <div className="decor">
          <div className="decora"></div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
