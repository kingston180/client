import React, { useEffect, useState } from "react";

import Axios from "axios";
function Adopted() {
  const [Userid,setId]=useState("");
  const [data,setData]=useState([]);
  let p=1;
 async function callAdopt(){
     const res=await fetch("http://localhost:3000/adoptS",
      {
        method:"GET",
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      })
      const d1=await res.json()
      setId(d1._id)
      
      const result = await fetch("http://localhost:3000/adoptT",
        {
          method:"POST",
          headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include",
          body:JSON.stringify({'id':Userid})
        })
      const d2=await result.json();
      console.log(d2);
  }

  useEffect(()=>{
    callAdopt();
    p=2;
  },[p]);
   
     
  return (
    <div className="doggie">
    {/* {(select!=="none") && (Data.filter((single1)=>{return single1.Type===select})).map((single)=>{
      const base64Str=btoa(new Uint8Array(single.img.data.data).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
    }, ''));
      return (
      <div className="dogc">
        <div className="dogInner">
          <img className="dogcImg" src={`data:image/png;base64,${base64Str}`} alt="" />
          <h1>{single.Name}</h1>
          <p>{single.Type}</p>
        </div>
        <div className="dogOuter">
          <span><b>Gender:</b>  {single.gender}</span>
          <span><b>Age:</b>  {single.age} Years</span>
          <span><b>Breed:</b>  {single.breed}</span>
          <span><b>Description:</b>  {single.desc}</span>
        </div>
      </div>
      )
     })}  */}
     </div>
  );
}

export default Adopted;