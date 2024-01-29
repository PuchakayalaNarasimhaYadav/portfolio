import React, { useState } from "react";
import NavStyle from './Navbar.module.css'

export default function Navbar() {
  const [activeState,setActiveState]=useState("#")
  return(
    <nav className={NavStyle.nav_bar}>
        <div className={NavStyle.navbar_first}>
            <a href="#Bannaer_page" onClick={()=>setActiveState("#Bannaer_page")}><p>Home</p></a>  
            <a href="#About_page" onClick={()=>setActiveState("#About_page")}><p>About</p></a>  
            <a href="#skills" onClick={()=>setActiveState('#skills')}><p>Skills</p></a>
            <a href="#MyProjects" onClick={()=>setActiveState("#MyProjects")}><p>Work</p></a>  
            <a href="#contact" onClick={()=>setActiveState("#contact")}><p>Contact</p></a>
        </div>
        <div className={NavStyle.navbar_second}>
                {/* <p>+91 9573597108</p>
                <p>narasimhapuchakayala35@gmail.com</p>
                <p style={{backgroundColor:'#ff9301',padding:'4px',color:'#fff'}}>EN</p>
                <p>FR</p> */}
        </div>
    </nav>
  ) 
}
