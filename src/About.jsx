import React, { useEffect, useState } from "react";

import Axios from "axios";
function About() {
  return (
    <div className="about">
     <div className="aboutL"><h1>Founder</h1>
     <img  className="aboutImg" src="/IMG_20220520_185627__01.jpg" alt="Img unavailable"/>
     <div className="text"><p>Nikhil Singh Parihar</p>
     <p>Web Developer</p></div></div>
     <div className="aboutR"><h3>We provide services for adopting and selling authentic pets easily at one place. Just register with us and enjoy these benefits.</h3>
     <p>Contact us</p>
     <a href="https://www.instagram.com/__nikku_parihar__/"><i class="fa-brands fa-instagram fa-xl ig"></i></a>
     <a href="https://www.facebook.com/007.nikhil.p"><i class="fa-brands fa-facebook fa-xl fb"></i></a>
     <a href="https://www.linkedin.com/in/nikhil-parihar-33b74319a/"><i class="fa-brands fa-linkedin fa-xl profIcon lin"></i></a></div>
    </div>
  );
}

export default About;