import React from 'react'
import "./Solution.css";
import im1 from "../Asset/Cloud1.webp";
import im2 from "../Asset/Cloud2.webp";
import im3 from "../Asset/Cloud3.webp";
import im4 from "../Asset/Cloud4.webp";
import "aos/dist/aos.css";
function Solutions(){
  return (
    <div className='container-fluid text-center'>
        <h3 className='mt-5'><b>Our Sap Solutions</b></h3>
        <p className='text-center'>Business Ready Solutions</p>
        <div className='row'>
            <div className='col'>
              <img src={im1} className='part1' title='Rise with SAP' alt='Rise with SAP offers an all-in-one solution to accelerate business transformation, combining cloud ERP, industry-specific practices, and continuous innovation' data-aos="fade-up"
              data-aos-duration="3000"/>
            <p className='text-center'>Rise with SAP</p>
            </div>
            <div className='col'>
            <img src={im2} className='part2' title='SAP S/4HANA: Next-Gen ERP Solution' alt='SAP S/4HANA is a powerful ERP system designed for real-time data processing, enabling businesses to streamline operations and drive innovation' data-aos="fade-up"
            data-aos-duration="3000"/>
             <p className='text-center'>SAP S/4 Hana</p>   
            </div>
            <div className='col'>
            <img src={im3} className='part1' title='SAP Business Technology Platform' alt='SAP BTP provides a unified platform for integrating and extending applications, driving innovation and agility in business operations.' data-aos="fade-up"
            data-aos-duration="3000"/>
              <p className='text-center'>SAP BTP</p>  
            </div>
            <div className='col'>
            <img src={im4} className='part2' title='SAP SuccessFactors' alt='Optimize HR processes with SAP SuccessFactors, offering solutions for workforce management, talent acquisition, and employee engagement' data-aos="fade-up"
              data-aos-duration="3000"/>
              <p className='text-center'>SAP Successfactors</p>  
            </div>
        </div>
    </div>
  )
}

export default Solutions