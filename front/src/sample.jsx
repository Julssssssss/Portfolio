import axios from "axios";
import { useState, useEffect } from "react";

const Sample = ({data}) => {
  

  return (
    <>
    <div>
      {data.map((datas) =>{
      return(
        
        Object.values(datas).slice(1).map((el) =>(
          <div key={el.id}>
            <h1>{el.name}</h1>

          </div>
          
          
          ))
      
      )})}
      {data.map((info)=>(
        <div key={info.eme.id}>
          <div>{info.eme.age}</div>
        </div>
        ))}
    </div>
    </>
  );
};
export default Sample;
