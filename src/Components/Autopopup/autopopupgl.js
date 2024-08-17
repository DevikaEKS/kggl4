import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import '../../Components/nursing/call to action/contactform.css';
import axios from 'axios';

const AutoPopupModalgl = () => {
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    phonenumber: '',
    email: '',
    services: '',
    message: ''
  });

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 30000); 

    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowModal(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    let formValid = true;
    const newErrors = {
      name: '',
      phonenumber: '',
      email: '',
      services: '',
      message: ''
    };

    if (formData.name.trim() === '') {
      newErrors.name = 'Please fill in the name';
      formValid = false;
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name)) {
      newErrors.name = 'Please enter a valid name ';
      formValid = false;
    }

    if (formData.phonenumber.trim() === '') {
      newErrors.phonenumber = 'Please fill in the phone number';
      formValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.phonenumber)) {
      newErrors.phonenumber = 'Please enter a valid 10-digit phone number';
      formValid = false;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Please fill in the email';
      formValid = false;
    } else if (!/^[a-z]\S+@\S+\.\S{2,20}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      formValid = false;
    }

    if (formData.services === '' || formData.services === 'Select the Services') {
      newErrors.services = 'Please select a service';
      formValid = false;
    }

    if (formValid) {
   
      axios.post("https://kggeniuslabs.com:4000/dmform", formData)
        .then((res) => {
          if (res.data.status === "inserted") {
            alert("Will Get Back You Soon...");
            window.location.reload();
          } else if (res.data.status === "error") {
            alert("Already registered...");
          } else {
            alert("Data are not registered");
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
    
      setErrors(newErrors);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    email: '',
    services: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <Modal show={showModal} onHide={handleClose} className='mt-5 zindexdm'>
      <Modal.Header closeButton>
        <Modal.Title><b>Get in Touch with Us</b></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <form onSubmit={handleSubmit}>
            <div className="col-lg-12">
              <input type="text" className="form-control mb-3" placeholder='Full Name' required name="name" id="name" onChange={handleChange} />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>

            <div className="mt-3">
              <input type="tel" className="form-control mb-3" placeholder='Phone Number' required name="phonenumber" id="phonenumber" onChange={handleChange} />
              {errors.phonenumber && <small className="text-danger">{errors.phonenumber}</small>}
            </div>

            <div className="mt-3">
              <input type="email" className="form-control mb-3" placeholder='Email' required name="email" id="email" onChange={handleChange} />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            <div className="input-box">
              <select className="border-bottom border-1 border-black rounded mb-3 col-lg-12 form-active-color  py-3" name='services' id="services" onChange={handleChange}>
                <option>Select the Services</option>
                <option value="Manpower Consultancy">Manpower Consultancy</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="SAP">SAP</option>
                <option value="IT Services">IT Services</option>
              </select>
              {errors.services && <small className="text-danger">{errors.services}</small>}
            </div>

            <div className="input-box">
              <textarea placeholder="Message" className="border-bottom border-1 border-black rounded form-control mb-3 col-lg-12  py-3" name='message' id="message" onChange={handleChange}></textarea>
            </div>

            <div className="input-box">
              <input type="submit" value="Submit" className='btn btn-primary' />
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AutoPopupModalgl;
