import React, { useEffect } from "react";
import BannerStyle from './Banner.module.css'
import { Button } from "@mui/material";
import AOS from 'aos';
// import Snowfall from "react-snowfall";
export default function Banner(){
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out'});
    }, []);
    
    return(
        <>
        <div className={BannerStyle.banner_home} id="Bannaer_page">
            {/* <Snowfall color="#fff" snowflakeCount={100}  fontSize="1px"/> */}
            <div className={BannerStyle.banner_text}>
                <div className={BannerStyle.text_details} data-aos="fade-up" data-aos-duration='1000'>
                    <p style={{fontSize: '20px',fontWeight: "400"}}>Hello, My name is</p>
                    <p className={BannerStyle.title}>Narasimha<br/> Puchakayala</p>
                    <div style={{fontSize:'30px',fontWeight: "500"}} >
                        <p className={BannerStyle.desig_nation}>Front-end Developer</p>
                    </div>
                    <div className={BannerStyle.para}>
                        <p>I design and develop services for customers of all sizes, </p>
                        <p>specializing in creating stylish, modern websites,</p>
                        <p> web services and online stores.</p>
                    </div>
                    <div>
                        <Button variant="contained" style={{backgroundColor:'black',textTransform:'capitalize'}}>Download CV</Button>
                    </div>
                </div>
            </div>
            <div className={BannerStyle.banner_img}>
                <div className={BannerStyle.person_img} data-aos='zoom-in'data-aos-duration='1000' data-aos-delay='300'>

                </div>
            </div>
            <div className={BannerStyle.bannerhide_img}>
                <div className={BannerStyle.personhide_img} data-aos='zoom-in'data-aos-duration='1000' data-aos-delay='300'>

                </div>
            </div>
        </div>
         <div className={BannerStyle.texthide_details} data-aos="zoom-in" data-aos-duration='1000'>
                    <p style={{fontSize: '20px',fontWeight: "400"}}>Hello, My name is</p>
                    <p className={BannerStyle.title}>Narasimha<br/> Puchakayala</p>
                    <div style={{fontSize:'30px',fontWeight: "500"}} >
                        <p className={BannerStyle.desig_nation}>Front-end Developer</p>
                    </div>
                    <div className={BannerStyle.para_hide}>
                        <p>I design and develop services for customers of all sizes, </p>
                        <p>specializing in creating stylish, modern websites,</p>
                        <p> web services and online stores.</p>
                    </div>
                    <div>
                        <Button variant="contained" style={{backgroundColor:'black',textTransform:'capitalize'}}>Download CV</Button>
                    </div>
                    <div className={BannerStyle.top_bottom}></div>
                    <div className={BannerStyle.right_left}></div>
                    <div className={BannerStyle.left_right}></div>
                    <div className={BannerStyle.middle}></div>
                    <div className={BannerStyle.middle_end}></div>
            </div>
        </>
    )
}