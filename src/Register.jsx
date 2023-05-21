import React, { useState,useContext } from "react";
import convert from "json-to-plain-text";
import Axios from "axios";
import {UserContext} from "./App";
import {useHistory} from "react-router-dom";
function Register() {
    const hist=useHistory();
    const {state,dispatch}=useContext(UserContext);
    const [data,setData]=useState({});
    function handleChange(event){
        const value=event.target.value;
        const name=event.target.name;
        setData({...data,[name]:value});
    }
    const postData= async (event)=>{
        event.preventDefault();
        const {name,email,number,password,password_c}=data;
        Axios.post("http://localhost:3000/register",{name,email,number,password,password_c,countAdopted:0})
        .then(res=>{
            var r = convert.toPlainText(res.data);
            console.log(r);
            window.alert(r);
            console.log("Registration Successfull")})
        .catch(err=>{
            var res = convert.toPlainText(err.response.data);
            console.log(res);
            window.alert(res);
            dispatch({type:"User",payload:false});
        });
        
        hist.push("/login");
        
    }
  return (
        <div className="regForm">
            <h1>Registration Page</h1>
            <div className="sellForm sellFormH">
                <div className="simg">
               <img src="https://static.vecteezy.com/system/resources/previews/007/036/608/original/male-working-on-laptop-with-mask-cartoon-icon-illustration-people-technology-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"/>
               <h2>To enjoy our services, first register with us </h2></div>
               <div className="sform">
                <form method="POST" enctype="multipart/form-data" onSubmit={postData}>
                    <div className="attr">
                    <label for="name"><b>Name</b></label>
                        <input className="inputs" type="text" id="name" placeholder="Name" 
                               value={data.name} onChange={handleChange} name="name" required/>
                    </div>
                    <div className="attr">
                    <label for="email"><b>Email Address</b></label>
                        <input className="inputs" type="email" id="email" placeholder="Email" 
                               value={data.email} onChange={handleChange} name="email" required/>
                    </div>
                    <div className="attr">
                    <label for="number"><b>Mobile Number</b></label>
                        <input className="inputs" type="tel" id="number" placeholder="Mobile Number" 
                               value={data.number} onChange={handleChange} name="number" maxlength="10" required/>
                    </div>
                    <div className="attr">
                        <label for="ppassword"><b>Password</b></label>
                        <input className="inputs" type="password" id="password" placeholder="Password" 
                               value={data.password} onChange={handleChange} name="password" required/>
                    </div>
                    <div className="attr">
                        <label for="password_c"><b>Confirm Password</b></label>
                        <input className="inputs" type="password" id="password_c" placeholder="Confirm Password" 
                               value={data.password_c} onChange={handleChange} name="password_c" required/>
                    </div>

                    <div className="attr">
                        <button type="submit" className="inputs g" >Sign Up</button>
                    </div>
                </form></div>
            </div>
            </div>
  );
}

export default Register;