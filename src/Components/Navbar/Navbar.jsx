import React from "react";
import NavStyle from './Navbar.module.css'

export default function Navbar() {
  return(
    <nav className={NavStyle.nav_bar}>
        <div className={NavStyle.navbar_first}>
            <a href="#Bannaer_page"><p>Home</p></a>  
            <a href="#About_page"><p>About</p></a>  
            <a href="#skills"><p>Skills</p></a>
            <a href="#MyProjects"><p>Work</p></a>  
            <a href="#contact"><p>Contact</p></a>
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
