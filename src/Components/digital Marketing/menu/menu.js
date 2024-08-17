import React from "react";
import './menu.css'
import logo from '../../Assest/GL.webp'
import { Link as Sclink } from "react-scroll";
import { Link } from "react-router-dom";
export function Menudm(){
    return(
        <>
            <nav class="navbar navbar-expand-lg bgcolor navmain">
                <div class="container-fluid">
                    <a class="navbar-brand col-lg-5 col-8" href="#">
                        <Link to='/'><img src={logo} className="siz" alt="KG Genius Labs offers tailored IT services and solutions, including web development, mobile apps, digital marketing, CRM, LMS, and SAP, for progressive business partnerships." title="KG Genius Labs"/></Link>
                    </a>
                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse col-lg-6" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item me-5 ">
                       
                        <Link to="/" className="nav-link active text-white" >Home</Link>
                        </li>
                        <li class="nav-item me-5">
                        <Sclink to="aboutdm" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">About Us</Sclink>
                        </li>
                         <li className="nav-item dropdown ms-2 me-4">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/healthcare" className="dropdown-item">Manpower Consultancy for Healthcare</Link></li>
                                    <li><Link to="/digitalmarketing" className="dropdown-item">Digital Marketing</Link></li>
                                    <li><Link to="/sap" className="dropdown-item">SAP</Link></li>
                                    <li><Link to="/itservices" className="dropdown-item">IT Services and Support</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item me-5 ">
                                <Sclink activeClass="active" to="servicesdm" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Our Expertise</Sclink>
                            </li>
                        <li class="nav-item me-5">
                        <Sclink to="footer" spy={true} smooth={true} duration={500} className="nav-link text-white" href="#">Contact Us</Sclink>
                        </li>
                      </ul>        
                    </div>
                </div>
            </nav>
        </>
    );
}
