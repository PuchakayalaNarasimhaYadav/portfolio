import React, { useEffect } from "react";
import ProjectStyle from "./Project.module.css";
import Myprojectdata from "./Project-data";
import AOS from "aos";
export default function Myprojects() {
  useEffect(()=>{
    AOS.init({
      duration:800
    })
  },[])
  return (
    <div className={ProjectStyle.project_main} id="MyProjects">
      <div >
        <div className={ProjectStyle.animi_ball}></div>
        <p className={ProjectStyle.name_heading}>Projects</p>
      </div>
      <div className={ProjectStyle.project_details} data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='200'>
        {Myprojectdata &&
          Myprojectdata.map((item, id) => (
            <div className={ProjectStyle.project_card} key={id}>
              <div>
                  <a href={item.proj_link} target ="_blank">
                    <img src={item.image} alt="logo" className={ProjectStyle.image}/>
                  </a>
              </div>
              <div>
                <p>{item.project_title}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
