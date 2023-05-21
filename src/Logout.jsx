import React, { useState, useEffect,useContext} from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom";
import {UserContext} from "./App";

function Logout() {

  const hist=useHistory();
  const {state,dispatch}=useContext(UserContext);
  const callLogout=async()=>{
    try{
      const res=await fetch("http://localhost:3000/logout",
      {
        method:"GET",
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
      if(res.status!==200) throw new Error(res.error);
      else {console.log(res); hist.push("/login"); dispatch({type:"User",payload:false}); window.alert("User logged out!");}
    } 
    catch(err){
      console.log(err);
      hist.push("/");
      window.alert("Register or login first");
    }
  }
  useEffect(()=>{
    callLogout();
  },[]);
  return(
    <>
    
    </>
  )
}

export default Logout;