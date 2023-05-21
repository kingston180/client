import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";
function Profile() {
    const hist=useHistory();
    const [data,setData]=useState([]);
    const callAdopt=async()=>{
        try{
          const res=await fetch("http://localhost:3000/adoptS",
          {
            method:"GET",
            headers:{
              "Accept":"application/json",
              "Content-Type":"application/json"
            },
            credentials:"include"
          });
          const dt=await res.json();
    
          setData([dt]);
          if(res.status!==200) throw new Error(res.error);
        } catch(err){
          console.log(err);
          hist.push("/");
          window.alert("Error occured");
        }
      }
      useEffect(()=>{
        callAdopt();
      },[])
  return (
    <div>
    {data.map((single)=>{
      return (
        <>
        <div className="prof4">
            <h1> Personal Information</h1>
        </div>
        <div className="prof">
            <div className="prof3">
          <div className="prof1">
          <p><b>Name</b></p>
          <p><b>Email</b></p>
          <p><b>Mobile Number</b></p>
          <p><b>Pets adopted</b></p>
          </div>
          <div className="prof2">
          <p>{single.name}</p>
          <p>{single.email}</p>
          <p>{single.number}</p>
          <p>{single.countAdopted}</p>
          </div></div></div>
          </>
      )
     })}</div>
  );
}

export default Profile;