import React, { useEffect } from "react";
import AboutStyle from './About.module.css'
import AOS from "aos";
import {  FaInstagram,  FaLinkedinIn,  FaPinterestP, FaTabletAlt, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoDesktopSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import Awardsdata from "./About-data";

export default function About(){
    useEffect(()=>{
        AOS.init({
            duration:800,
            easing: 'ease-in-out'
        })
    },[])
    return(
        <>
        <div className={AboutStyle.about_page} id="About_page">
        <div className={AboutStyle.About_main}>
            <div className={AboutStyle.about_img_content} data-aos='fade-right'>
                <div className={AboutStyle.about_img}>
                    <div className={AboutStyle.image_bg}>
                        
                    </div>
                    <div className={AboutStyle.icons}>
                            <p className={AboutStyle.icon1_style}><FaFacebookF size={20}/></p>
                            <p className={AboutStyle.icon2_style}><FaTwitter size={20}/></p>
                            <p className={AboutStyle.icon3_style}><FaInstagram  size={20}/></p>
                            <p className={AboutStyle.icon4_style}><FaLinkedinIn  size={20}/></p>
                            <p className={AboutStyle.icon5_style}><FaPinterestP size={20}/></p>
                    </div>
                    <div className={AboutStyle.my_name}>
                        <p style={{fontSize:'16px',color:'#0b0b13'}}>Front-end Developer</p>
                        <p style={{fontSize: "30px",fontWeight: "500"}}>Narasimha</p>
                    </div>
                </div>
            </div>
            <div className={AboutStyle.about_text_me} data-aos='zoom-in'>
                <div className={AboutStyle.title_bio}>
                    <div className={AboutStyle.animi}></div>
                    <p>Biography</p>
                </div>
                <div className={AboutStyle.para_gap}>
                    <p >I'm a  Front-end Developer with over 3 months of internship experience. I'm from Andhra Pradesh.</p>
                    <p >I code and create Interactive Web Applications for amazing people around the world.</p>
                    <p> I like work with new people.New people new Experiences.</p>
                    <p>I can work well under pressure and make best of any situation</p>
                </div>
                <div className={AboutStyle.info_me}>
                    <div className={AboutStyle.para_gap}>
                        <p>Name: Narasimha Puchakayala</p>
                        <p>Birthday: 25th August 2000</p>
                        <p>Age: 23 years</p>
                        <p>Address: Tirupati, AP</p>
                    </div>
                    <div className={AboutStyle.para_gap}>
                        <p>Phone: +91 9161214709</p>
                        <p>Email: narasimhapuchakayala15@gmail.com</p>
                        <p>Skype: Narasimha Puchakayala</p>
                    </div>
                </div>
            </div>
        </div>
        <div style={{paddingLeft:"12px",paddingRight:"12px",marginLeft:'15px',marginRight:"15px"}}>
            <div className={AboutStyle.border_img}>
            
            </div>
        </div>
        <div className={AboutStyle.about_cards}>
            <div>
                <div className={AboutStyle.animi}></div>
                <p className={AboutStyle.name_title}>What I do?</p>
            </div>
            <div className={AboutStyle.cards}>
                <div className={AboutStyle.card_one} data-aos='fade-right' data-aos-duration='1200' data-aos-dela='100'>    
                    <div className={AboutStyle.icon}>
                        <i className={AboutStyle.icon_symbol}><FaTabletAlt/></i>
                    </div>
                    <h5 style={{fontSize: "1.25rem",fontWeight: "500"}}>User Interface (UI) Development</h5>
                    <div className={AboutStyle.para_style}>
                    <p>This involves using HTML, CSS, and JavaScript to create responsive and visually appealing user interfaces.</p>
                    <p>Determine the structure and design of web pages.</p> 
                    </div>
                </div>
                <div className={AboutStyle.card_two} data-aos='fade-right' data-aos-duration='1200' data-aos-delay="200">
                    <div className={AboutStyle.icon}>
                        <i className={AboutStyle.icon_symbol}><IoDesktopSharp/></i>
                    </div>
                    <h5 style={{fontSize: "1.25rem",fontWeight: "500"}}>Front-End Frameworks (or) Libraries</h5>
                    <div className={AboutStyle.para_style}>
                    <p> Working with front-end JavaScript Library React to build scalable and maintainable web applications.</p>
                    <p>Implementing state management solutions Build reusable codes Optimize page loading times.</p> 
                    </div>
                </div>
                <div className={AboutStyle.card_three} data-aos='fade-right' data-aos-duration='1200' data-aos-delay='500'>
                    <div className={AboutStyle.icon}>
                        <i className={AboutStyle.icon_symbol}><TbTargetArrow/></i>
                    </div>
                    <h5 style={{fontSize: "1.25rem",fontWeight: "500"}}>Performance Optimization & Responsiveness</h5>
                    <div className={AboutStyle.para_style}>
                    <p> Optimizing the performance of web pages by minimizing loading times, reducing HTTP requests.</p>
                    <p>Ensuring that web applications are responsive and work well on various devices and screen sizes.</p> 
                    </div>
                </div>
            </div>
        </div>
            <div style={{paddingLeft:"12px",paddingRight:"12px",marginLeft:'15px',marginRight:"15px"}} id="skills">
                <div className={AboutStyle.border_img}>
                
                </div>
            </div>
            <div className={AboutStyle.awards_cards}>
                <div>
                    <div className={AboutStyle.animi}></div>
                    <p className={AboutStyle.name_title}>My Skills</p>
                </div>
                <div className={AboutStyle.awd_carddata}>
                    {
                        Awardsdata && Awardsdata.map((item,id)=>(
                            <div className={AboutStyle.mycard} key={id} data-aos='zoom-in'>
                                <div>
                                    <img src={item.logo} alt="logo" className={AboutStyle.icon_img} />
                                </div>
                                <div style={{lineHeight:'30px',fontWeight: "500"}}>
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div style={{paddingLeft:"12px",paddingRight:"12px",marginLeft:'15px',marginRight:"15px"}}>
                <div className={AboutStyle.border_img}>
                
                </div>
            </div>
            <div className={AboutStyle.Exp_details}> 
                <div className={AboutStyle.title_whatdo}>
                    <div className={AboutStyle.animi}></div>
                    <p className={AboutStyle.name_title}>Experience</p>
                </div>
                <div className={AboutStyle.experience_data} data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='200'>
                   <div className={AboutStyle.title_data}>
                        <p style={{fontSize: "20px",fontWeight: "500"}}>Front-end Developer</p>
                        <p>Oct 2023 - Present</p>
                        <p className={AboutStyle.intern_data}>Internship</p>
                   </div>
                   <div className={AboutStyle.comp_descript}>
                        <p style={{fontSize: "20px",fontWeight: "500"}}>Kyurius Tech studios</p>
                        <div style={{color:'#555',lineHeight:'25px'}}>
                            <p>Currently working as an intern at Kyurius tech studios, Bangalore,KA.</p>
                            <p>I have good knowledge on HTML CSS JavaScript Reactjs and other libraries with hands on experience during internship projects.</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        </>
    )
}