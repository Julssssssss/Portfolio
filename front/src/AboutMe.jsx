import { useEffect, useState } from "react";
import "./assets/App.css";
import axios from "axios";



const AboutMe = () => {

  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/content")
      .then((res) => setItem(res.data))
      .catch((err) => { 
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="parent">
        {/*container for intro n pic */}
      
        <div className="intPic">
        {item.map((info) =>(
        <div key={info.introduction.id}>
          <div className="intro">
              {info.introduction.name}
          </div>
        </div>
          ))}
              <div className="pic dark:bg-black">
                hi
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
