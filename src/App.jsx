import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Home/Banner/Banner";
import 'aos/dist/aos.css'
import About from "./Components/Home/About/About";
import './App.css'
import Myprojects from "./Components/Home/Project/Project";
import Contact from "./Components/Home/Contact/Contact";


export default function App(){
    return(
            <div>
                <Navbar/> 
                <Banner/>
                <About/>
                <Myprojects/>
                <Contact/>
            </div>
    )
}