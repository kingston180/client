import React, { useState,useContext } from "react";
import Axios from "axios";
import convert from "json-to-plain-text";
import {useHistory} from "react-router-dom";
import {UserContext} from "./App";

function Login() {
    const [email,setEmail]=useState("");
    const {state,dispatch}=useContext(UserContext);
    Axios.defaults.withCredentials = true;
    const [pass,setPass]=useState("");
    const hist=useHistory();
    function postData(e){
        e.preventDefault();
       Axios.post("http://localhost:3000/signin",{email:email,password:pass},
       {headers:
        {withCredentials:true}})
        .then(res=>{
        var r = convert.toPlainText(res.data);
        console.log(r);
        window.alert(r);
        dispatch({type:"User",payload:true});
        console.log("Login Successfull")
        hist.push("/");
        })
        .catch(err=>{
        var res = convert.toPlainText(err.response.data);
        console.log(res);
        window.alert(res);
    });
    }
  return (
    <div className="main_div">
        <h1>Login Securely.</h1>
      <div className="box">
        <div className="boxI">
        <img src="/lock-icon-29046.png" alt="img"/>
        <a href="/register">Create an account</a>
        <h3>If you hasn't created your account yet,</h3>
        </div>
        <h3>OR</h3>
        <form method="POST">
          <div className="input-box">
          <h1>Sign In</h1>
          <div class="input-icons">
          <span><i class="fa-solid fa-envelope icon"></i><input
              type="text"
              name="Username"
              id="Username"
              placeholder="Your Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              autocomplete="off"
              required
            /></span></div>

            <div class="input-icons">
            <span><i class="fa-solid fa-key icon"></i><input
              type="password"
              name="password"
              id="Username"
              placeholder="Your Password"
              value={pass}
              onChange={(e)=>setPass(e.target.value)}
              autocomplete="off"
              required
            /></span></div>
           
            
          <button className="Lsubmit" type="submit" onClick={postData} >Log In</button> </div>
        </form>
      </div>
    </div>
  );
}

export default Login;