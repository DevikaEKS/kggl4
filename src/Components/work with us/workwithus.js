import React,{useEffect} from "react";
import innovation from '../Assest/Why Us/2-Innovation.png'
import Stability from '../Assest/Why Us/3-Stability.png'
import Scalability from '../Assest/Why Us/4-Scalability.png'
import Dedication from '../Assest/Why Us/6-Dedication.png'
import Experience from '../Assest/Why Us/1-Experience.png'
import Versatility from '../Assest/Why Us/5-Versatility.png'
import  "./workwithus.css"
import AOS from "aos";
import "aos/dist/aos.css";
export function Workwithus(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>
        <div className="bgcolors pb-5 text-white container-fluid">

            <h3 className="text-center p-5 txtbld">Why KG Genius Labs?</h3>
            <div className="row ms-5">
                            <div className="col-lg-4 mb-5">
                                <img src={Experience} title="Experience" alt="Presence for 25+ years" className="mb-2" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
                                <h4>Experience</h4>
                                <p>Presence for <b>25+</b> years.</p>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <img src={innovation} alt="At the forefront of the Indian tech revolution" title="Innovation" className="mb-2" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
                                <h4>Innovation</h4>
                                <p>At the forefront of the Indian tech revolution.</p>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <img src={Stability} title="Stability" alt="Services and solutions that stand the test of time" className="mb-2" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
                                <h4>Stability</h4>
                                <p>Services and solutions that stand the test of time.</p>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <img src={Scalability} alt="Scalable solutions to match adapting needs" title="Scalability" className="mb-2" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
                                <h4>Scalability</h4>
                                <p>Scalable solutions to match adapting needs.</p>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <img src={Versatility} title="Versatility" alt="Covering all bases with 50+ services" className="mb-2" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
                                <h4>Versatility</h4>
                                <p>Covering all bases with 50+ services.</p>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <img src={Dedication} title="Dedication" alt="For lasting partnerships" className="mb-2" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
                                <h4>Dedication</h4>
                                <p>For lasting partnerships.</p>
                            </div>
            </div>
         </div>
        </>
    );
}