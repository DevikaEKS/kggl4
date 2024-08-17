

import React, { useState } from "react";
import './Menubar.css'
import logo from '../../Assest/GL.webp'
import { Link as Sclink } from "react-scroll";
import { Link } from "react-router-dom";

export function Menusap() {
    const [collapsed, setCollapsed] = useState(true);

    const handleLinkClick = () => {
        setCollapsed(true);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bgcolor navmain">
                <div className="container-fluid">
                    <a className="navbar-brand col-lg-5 col-8" href="#">
                        <Link to='/'><img src={logo} className="siz" alt="KG Genius Labs offers tailored IT services and solutions, including web development, mobile apps, digital marketing, CRM, LMS, and SAP, for progressive business partnerships" title="KG Genius Labs"/></Link>
                    </a>
                    <button 
                        className="navbar-toggler bg-white" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        onClick={() => setCollapsed(!collapsed)} // Toggle collapse state
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse col-lg-6 ${collapsed ? 'collapse' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-5">
                                <Link to="/" className="nav-link active text-white" >Home</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Sclink 
                                    to="aboutsap" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    className="nav-link active text-white" 
                                    aria-current="page"
                                    onClick={handleLinkClick}>
                                    About Us
                                </Sclink>
                            </li>
                            <li className="nav-item dropdown ms-2 me-4  ">
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
                            <li className="nav-item me-5">
                                <Sclink 
                                    activeClass="active" 
                                    to="expertisesap" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    className="nav-link active text-white" 
                                    aria-current="page"
                                    onClick={handleLinkClick} >
                                    Our Expertise
                                </Sclink>
                            </li>
                            <li className="nav-item me-5">
                                <Sclink 
                                    to="footersap" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    className="nav-link text-white" 
                                    onClick={handleLinkClick} >Contact Us </Sclink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
