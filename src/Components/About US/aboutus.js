import React, {useEffect } from 'react';
import './aboutus.css'
import banner from '../Assest/Group 50.webp'
import AOS from "aos";
import "aos/dist/aos.css";
export function Aboutus(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>
            <div className="container-fluid bg-white pb-5"  id="aboutpage">
                <h3 className="text-center pt-5 credtext" >About Us</h3>
                <div className="row" >
                        <div className="col-lg-6 mt-n2"  > 
                            <img src={banner}   data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" title='KG Genius Labs'  alt="KG Genius Labs provides tailored IT solutions, from web development and mobile apps to digital marketing, CRM, LMS, and SAP, driving innovative business partnerships."/> 
                        </div>
                    <div className="col-lg-6 p-5"  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                        <p className="styl mb-3">The KG Group, with its decades-long legacy, is an established name in fields across the board, but we are best known for our innovative technologies. 25 years ago, the Group’s KG Information system private Limited (KGiSL) pioneered cutting-edge technological solutions in South India. Today, it is one of the fastest growing IT companies in the Indo-Pacific with an active presence in over 7 countries.  </p>
                        <p className="styl">Introducing KG Genius Labs, the latest venture from the KG brand, aimed at helping businesses worldwide succeed. Our team of experts offers custom solutions and services, including IT Startup Incubators/Accelerators, Manpower Consultancy for healthcare sectors targeting regions like MENA, UK and Canada, IT products for talent acquisition and comprehensive IT services and support such as KPO, BPO, Development services and SAP. KG Genius Labs stands out as the top choice for businesses seeking a progressive partner.</p>
                    </div>
                </div>
            </div>
        </>
    );
}