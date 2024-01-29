import React, { useEffect } from "react";
import Contactstyles from './Contact.module.css'
import { Button} from "@mui/material";
import AOS from "aos";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
export default function Contact(){
    useEffect(()=>{
        AOS.init({
            duration:800
        })
    },[])
    return(
        <div className={Contactstyles.contact_main} id='contact'>
            <div id="MyProjects_Ram">
                <div className={Contactstyles.animi_circle}></div>
                <p className={Contactstyles.name_head}>Get In Touch</p>
            </div>
            <div className={Contactstyles.contact_details}>
                <div className={Contactstyles.address}>
                    <div style={{display:'flex',gap:'10px'}}>
                        <p><SiGooglemaps size={30} color='red'/></p>  <h4>Bangalore,Karnataka</h4>
                    </div>
                    <div style={{display:'flex',gap:'10px'}}>
                        <MdOutlineMail size={30} color='orange'/> <p> narasimhapuchakayala35@gmail.com</p>
                    </div>
                    <div style={{display:'flex',gap:'10px'}}>
                    <CiMobile3 size={30} color='grey'/> <p>+91  9573597108</p>
                    </div>
                </div>
                <div className={Contactstyles.form_details} data-aos='fade-right'>
                    <p>Say Something</p>
                    <form action="" autoComplete="off">
                        <div className={Contactstyles.form_main}>
                            <div className={Contactstyles.input_one}>
                                <input type="text" name="fullname" placeholder="fullname"/>
                            </div>
                            <div className={Contactstyles.input_one}>
                                <input type="email" name='email' placeholder="email address"/>
                            </div>
                        </div>
                            <div className={Contactstyles.text_area}>
                                <textarea rows="7"   placeholder="Type comment" name="comment"></textarea>   
                            </div>
                            <div style={{margin:'20px 12px'}}>
                                <Button variant="contained">Send Message</Button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}