import React, { useState } from "react";
import contact from '../Assest/Group 37454.png'
import axios from "axios";
import "./newsletter.css"

export function Newsletter() {
  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    email: '',
    services: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phonenumber: '',
    email: '',
    services: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });


    switch (name) {
      case 'name':
        setErrors({ ...errors, name: /^[a-zA-Z\s]{2,}$/.test(value) ? '' : 'Please enter a valid name with only letters and spaces' });
        break;
      case 'phonenumber':
        setErrors({ ...errors, phonenumber: /^[6-9]\d{9}$/.test(value) ? '' : 'Please enter a valid 10-digit phone number' });
        break;
      case 'email':
        setErrors({ ...errors, email: /^[a-z]\S+@\S+\.\S{2,20}$/.test(value) ? '' : 'Please enter a valid email address (2-20 characters after the dot)' });
        break;
      case 'services':
        setErrors({ ...errors, services: value !== '' ? '' : 'Please select the Services' });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.services === '' || formData.services === 'Select the Services') {
      setErrors({ ...errors, services: 'Please select the Services' });
      return;
    }

    const formValid = Object.values(errors).every(error => error === '');
    if (formValid) {
      axios.post("https://kggeniuslabs.com:4000/dmform", formData)
        .then((res) => {
          if (res.data.status === "inserted") {
            alert("Will Get Back You Soon...");
            window.location.reload();
          } else if (res.data.status === "error") {
            alert("Already registered...");
          } else {
            alert("Data are not Registered");
          }
        })
        .catch(error => {
          console.error("Error submitting form:", error);
          alert("Failed to submit form. Please try again later.");
        });
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <>
      <section className="" id="sapform">  
        <div className="section-header ">
          <div className="container">
            <h3><b>Get in Touch with Us</b></h3>
            <p className="text-center">Let's connect! Our experienced team is available to answer your questions and provide guidance, we're here to help.</p>
          </div>
        </div>
        
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6">
                <img src={contact} className="container" alt="Contact us for IT services" title="Get  in Touch with Us"/>
            </div>
            <div className="col-12 col-lg-6">
             <form onSubmit={handleSubmit} id="contact-form" className="p-2">
                <h3>Send Message</h3>
                <div className="input-box">
                  <input type="text" required name="name" id="name" className="form-control mb-3" placeholder="Full Name" onChange={handleChange} />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="input-box">
                  <input type="tel" required name="phonenumber" id="phonenumber" className="form-control mb-3" placeholder="Phone Number" onChange={handleChange} />
                  {errors.phonenumber && <small className="text-danger">{errors.phonenumber}</small>}
                </div>
                <div className="input-box">
                  <input type="email" required name="email" id="email" className="form-control mb-3" placeholder="Email" onChange={handleChange} />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="input-box col-lg-12">
                <select className=" border-bottom border-1 border-black rounded mb-3 col-lg-12 form-active-color  py-3" id="services"> 
                            <option>Select the Services</option>
                          <option value="Manpower Consultancy">Manpower Consultancy</option>
                           <option value="Digital Marketing">Digital Marketing</option>
                            <option value="SAP">SAP</option>
                           <option value="It Services">IT Services</option>
                        </select>
                  {errors.services && <small className="text-danger">{errors.services}</small>}
                </div>
                <div className="input-box">
                  <textarea placeholder="Message" className="border-bottom border-1 border-black rounded form-control mb-3 col-lg-12  py-3" id="message" name="message" onChange={handleChange}></textarea>
                </div>
                <div className="input-box">
                  <input type="submit" value="Connect with Us" name="" className="btn btn-primary"/>
                </div>
              </form>
            </div>
        </div>
        </div>
      </section>
    </>
  );
}
