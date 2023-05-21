import React, { useState, useEffect} from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom";

function Adopt() {
  const [Userid,setId]=useState("");
  const hist=useHistory();
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
      const data=await res.json();

      setId(data._id);
      if(res.status!==200) throw new Error(res.error);
    } catch(err){
      console.log(err);
      hist.push("/");
      window.alert("Register or login first");
    }
  }
  useEffect(()=>{
    callAdopt();
  },[])

  const [Data,setData]=useState([]);
  const [select,setSelect]=useState("none");
  function handleSelect(event){
     Axios.get("http://localhost:3000/adopt")
      .then(res=>{console.log(res.data); setData(res.data);})
      .catch(err=>console.log(err));
      console.log(event.target.value);
      setSelect(event.target.value);
    }
  
    function deleteData(e){
      e.preventDefault();
      Axios.post("http://localhost:3000/delAdopt",{id:e.target.idInfo.value,Uid:Userid})
      .then(res=>{window.alert("Congratulations you got a new bestfriend "+ res.data.name); console.log("SUCCESS")})
      .catch(err=>console.log(err));
    }
  return (
    <div className="dogh">
      <div className="dogHeading">
        <h1>Adopt the type of pet you want</h1>
        <p>First, choose the type of pet you are searching for :</p>
        
                <select className="inputs" onChange={handleSelect}> 
                  <option name="none" value="none">--Select--</option>
                  <option name="Dog"> Dog</option>
                  <option name="Cat">Cat</option>
                  <option name="Bird">Bird</option>
                  <option name="Rabbit">Rabbit</option>
                </select>
        <hr/>
      </div>
      <div className="doggie">
    {(select!=="none") && (Data.filter((single1)=>{return single1.Type===select})).map((single)=>{
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
          <form method="POST" onSubmit={deleteData}>
          <input type="hidden" value={single._id} name="idInfo"/>
          <button type="submit" className="submitBut">Adopt</button>
          </form>
        </div>
      </div>
      )
     })}</div>
    </div>
  );
}

export default Adopt;