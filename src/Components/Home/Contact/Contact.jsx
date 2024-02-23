import React, { useEffect, useRef, useState } from "react";
import Contactstyles from './Contact.module.css'
import { Button} from "@mui/material";
import AOS from "aos";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import emailjs from '@emailjs/browser';
export default function Contact(){
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [formerror,setFormerror]=useState({
        username:'',
        password:''
    })
    function UsernameErrorhandler(){
        let  Isuserhandler = username && username.trim();
        let UserError ="";
        if(!Isuserhandler){
            UserError="*Enter your full name";
        }
        setFormerror((prev)=>{
            prev.username=UserError
            return Object.assign({},prev)
        })
    }
    function EmailErrorhandler(){
        let IsEmailhandler =  email && email.trim();
        let EmailError =''
        if(!IsEmailhandler){
            EmailError='*Enter your email address'
        }
        else if(email.length < 8){
            EmailError ='Should be minimum 8 char';
        }
        setFormerror((prev)=>{
            prev.email= EmailError;
             return Object.assign({},prev)
        })
    }
    function Userhandler(event){
            setUsername(event.target.value)
            UsernameErrorhandler();
    }
    function Emailhandler(event){
        setEmail(event.target.value)
        EmailErrorhandler()
    }
    useEffect(()=>{
        AOS.init({
            duration:800
        })
    },[])
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    UsernameErrorhandler();
    EmailErrorhandler();
    // console.log("e.....",e.current)
    emailjs
      .sendForm('service_dyr8h7s', 'template_j29f2fc', form.current, {
        publicKey: 'XivewA8f3Y5Qt2Cd9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };
    return(
        <div className={Contactstyles.contact_main} id='contact'>
            <div>
                <div className={Contactstyles.animi_circle}></div>
                <p className={Contactstyles.name_head}>Get In Touch</p>
            </div>
            <div className={Contactstyles.contact_details}>
                <div className={Contactstyles.address}>
                    <div style={{display:'flex',gap:'10px'}}>
                        <p><SiGooglemaps size={30} color='red'/></p> <h4> BTM layout, 2nd stage, Bangalore,Karnataka</h4>
                    </div>
                    <div style={{display:'flex',gap:'10px'}}>
                        <MdOutlineMail size={30} color='orange'/> <p> narasimhapuchakayala15@gmail.com</p>
                    </div>
                    <div style={{display:'flex',gap:'10px'}}>
                    <CiMobile3 size={30} color='grey'/> <p>+91  9573597108</p>
                    </div>
                </div>
                <div className={Contactstyles.form_details} data-aos='fade-right'>
                    <p>Say Something</p>
                    <form ref={form} onSubmit={sendEmail} autoComplete="off">
                        <div className={Contactstyles.form_main}>
                            <div className={Contactstyles.term_one}>
                                <div className={Contactstyles.input_one}>
                                    <input type="text" name="from_name" placeholder="fullname" value={username} onChange={Userhandler}/>
                                </div>
                                {
                                    formerror.username && 
                                    <div className={Contactstyles.errormgs}>
                                    <small >{formerror.username}</small>
                                    </div>
                                }
                            </div>
                            <div className={Contactstyles.term_two}>
                            <div className={Contactstyles.input_one}>
                                <input type="email" name='from_email' placeholder="email address" value={email} onChange={Emailhandler}/>
                            </div>
                            {
                                formerror.email &&
                                <div className={Contactstyles.errormgs}>
                                    <small >{formerror.email}</small>
                                </div> 
                            }
                            </div>
                        </div>
                            <div className={Contactstyles.text_area}>
                                <textarea rows="7" name="message"  placeholder="Type comment"></textarea>   
                            </div>
                            <div style={{margin:'20px 12px'}}>
                                <Button variant="contained" style={{textTransform:'capitalize'}} type="submit">Send Message</Button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}