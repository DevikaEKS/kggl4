

import React, { useState ,useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import '../../nursing/call to action/contactform.css';
import axios from 'axios';

const Autopopupsap = () => {
  const [showModal, setShowModal] = useState(false);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 30000); 

 
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowModal(false);

  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    email: '',
    services: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phonenumber: '',
    email: '',
    services: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
   
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = false;

    if (formData.name.trim() === '') {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        name: 'Please fill in the name'
      }));
      errors = true;
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name)) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        name: 'Please enter a valid name'
      }));
      errors = true;
    }

    if (formData.phonenumber.trim() === '') {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        phonenumber: 'Please fill in the phone number'
      }));
      errors = true;
    } else if (!/^[6-9]\d{9}$/.test(formData.phonenumber)) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        phonenumber: 'Please enter a valid 10-digit phone number'
      }));
      errors = true;
    }

    if (formData.email.trim() === '') {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        email: 'Please fill in the email'
      }));
      errors = true;
    } else if (!/^[a-z]\S+@\S+\.\S{2,20}$/.test(formData.email)) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        email: 'Please enter a valid email address'
      }));
      errors = true;
    }

    if (formData.services.trim() === '' || formData.services === 'Select the Services') {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        services: 'Please select a service'
      }));
      errors = true;
    }

    if (!errors) {
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
          console.error('Error submitting form:', error);
          alert("Failed to submit form. Please try again.");
        });
    }
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
              <input
                type="text"
                className="form-control mb-3"
                placeholder='Full name'
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <small className="text-danger">{formErrors.name}</small>}
            </div>

            <div className="">
              <input
                type="phone"
                className="form-control mb-3"
                required
                placeholder='Phone number'
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
              />
              {formErrors.phonenumber && <small className="text-danger">{formErrors.phonenumber}</small>}
            </div>

            <div className="">
              <input
                type="email"
                className="form-control mb-3"
                required
                placeholder='Email'
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <small className="text-danger">{formErrors.email}</small>}
            </div>
            <div className="input-box">
                  <select className="border-bottom border-1 border-black rounded mb-3 col-lg-12 form-active-color  py-3" id="services" name="services" onChange={handleChange}>
                    <option value="">Select the Services</option>
                    <option value="SAP Implementation And SAP Rollout">SAP Implementation And SAP Rollout</option>
                    <option value="SAP Technical Services">SAP Technical Services</option>
                    <option value="SAP Migration">SAP Migration</option>
                    <option value="SAP AMS">SAP AMS</option>
                  </select>
                  {formErrors.services && <small className="text-danger">{formErrors.services}</small>}
                </div>
            <div className="input-box ">
              <textarea
                placeholder="Message"
                className="border-bottom border-1 border-black rounded form-control mb-3 col-lg-12  py-3"
                name='message'
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="input-box">
              <input type="submit" value="Connect with us" className='btn btn-primary' />
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Autopopupsap;
