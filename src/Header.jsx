import React, { useEffect, useState, useContext } from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {UserContext} from "./App";
import logo from "./user.png";
function Statics() {
  const [open, changeOpen] = useState(false);
  const {state,dispatch}=useContext(UserContext);
  function handleClick(){
    changeOpen(false);
 }
  if(state){
  return (
    <>
    <div className="sItems">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/adopt">Adopt</NavLink>
      <NavLink to="/sell" >Sell</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </div>
    <a
    href="javascript:void(0)"
    className="Icon"
    onClick={() => {
      changeOpen(!open);
    }}
    >
    <img src={logo} alt="img"/>
    {open && <div className="user-dropdown">
          <NavLink to="/profile" onClick={handleClick}>My Profile</NavLink>
          <NavLink to="/logout">Logout</NavLink>
          
     </div>
  }
</a>
</>
  );}
  else{
    return (<>
      <div className="sItems">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/adopt">Adopt</NavLink>
      <NavLink to="/sell" >Sell</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      
    </div>
    <a
    href="javascript:void(0)"
    className="Icon"
    onClick={() => {
      changeOpen(!open);
    }}
  >
<img src={logo} alt="img"/>
{open && <div className="user-dropdown">
            <NavLink to="/login" onClick={handleClick}>Login</NavLink>
            <NavLink to="/register" onClick={handleClick}>Register</NavLink>
    </div>
    }
</a>

</>);
  }
}
function Header() {
  const {state,dispatch}=useContext(UserContext);
  const [open, changeOpen] = useState(false);
  const changeSize = () => {
    if (window.innerWidth >= 1000) {
      changeOpen(false);
    }
  };
  window.addEventListener("resize", changeSize);
  function handleClick(){
     changeOpen(false);
  } 
  function Temp(){
    if(!state){return (<><NavLink to="/login" onClick={handleClick}>Login</NavLink>
    <NavLink to="/register" onClick={handleClick}>Register</NavLink></>)}
    else {return (<><NavLink to="/profile" onClick={handleClick}>My Profile</NavLink>
    <NavLink to="/logout" onClick={handleClick}>Logout</NavLink></>)}
  }
  return (
    <header>
      <span>
        <FontAwesomeIcon icon="fa-solid fa-paw" />
      </span>
      <h1>
        <i className="fa-solid fa-paw"/> Get-Pet
      </h1>
      <div className="topnav">
        <Statics />
        <a
          href="javascript:void(0)"
          className="icon"
          onClick={() => {
            changeOpen(!open);
          }}
        >
          &#9776;
        </a>
        {open && <div className="dropdown-content">
            <NavLink to="/" onClick={handleClick}>Home</NavLink>
            <NavLink to="/adopt" onClick={handleClick}>Adopt</NavLink>
            <NavLink to="/sell" onClick={handleClick}>Sell</NavLink>
            <NavLink to="/about" onClick={handleClick}>About Us</NavLink>
            <Temp/>
    </div>}
      </div>
    </header>
  );
}

export default Header;