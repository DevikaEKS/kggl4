import React from 'react';
import "./Expertise.css";
import im1 from "../Asset/Component 9.webp";
import im2 from "../Asset/Component 10.webp";
import im3 from "../Asset/Component 11.webp";
import im4 from "../Asset/Component 12.webp";

function Expertise() {
  const expertiseData = [
    { img: im1,
      alt: "Offering Greenfield and Brownfield implementations, plus company, plant, and international rollouts", 
      title: "SAP Implementation Services", text: [
      (
        <>
          <li>Greenfield Implementation</li>
          <li>Brownfield Implementation</li>
          <li>Company Rollout</li>
          <li>Plant Rollout</li>
          <li>International Company Rollout</li>
        </>
      ) 
  ] },
    { img: im2,
      alt: "Expert services in SAP ABAP, BASIS, BI/BO, PI/PO/CPI, and BODS for comprehensive SAP support.", 
      title: "SAP Services", text: [(
      <>
        <li>SAP ABAP</li>
        <li>SAP BASIS</li>
        <li>SAP BI/BO</li>
        <li>SAP PI/PO/CPI</li>
        <li>BODS</li>
      </>
    ) ] },
    { img: im3, 
      alt: "Seamlessly transition from ECC to S/4HANA and move from on-premise to cloud with Rise with SAP.", 
      title: "ECC to S/4HANA Migration",text: [(
      <>
        <li>ECC to S/4 HANA(Rise with SAP)</li>
        <li>On-Premise to Cloud</li>
      </>
    ) ] },
    { img: im4, 
      alt: "Offering technical, functional, training, application, security, optimization, and SAP Basis administration support services", 
      title: "Comprehensive SAP Support Services",text: [(
     <>
        <li>Technical Support</li>
        <li>Functional Support</li>
        <li>Training Support</li>
        <li>SAP Application Support</li>
        <li>Security Services</li>
        <li>Optimization & Enhancement<br/> Services</li>
        <li>SAP Basis Administration Service</li>
        </>
    )] },
  ];

  return (
    <div className='container-fluid exp m-0 p-0 ' id='expertisesap'>
        <h3 className='exptext'><b>Our Expertise</b></h3>
        <p className='text-center'>SAP Implementation, Support Services and Training for Modernization of Your Business</p>
        <div className='row'>
          {expertiseData.map((expertise, index) => (
            <div key={index} className='col-sm-12 col-md-6 col-lg-3'>
              <div className="image-container">
                <img src={expertise.img} alt={expertise.alt} 
                  title={expertise.title}  className="image"/>
                <div className="hover-card">
                  <ul>
                    {expertise.text.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Expertise;
