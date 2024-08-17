
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import '../call to action/contactform.css';
import axios from 'axios';

const AutoPopupModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    phonenumber: '',
    email: '',
    degree: '',
    specialization: '',
    experience: ''
  });

  // useEffect hook to show modal after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 30000); // 30 seconds in milliseconds

    // Cleanup function to clear timeout if component unmounts before 30 seconds
    return () => clearTimeout(timer);
  }, []);

  // Function to handle closing modal
  const handleClose = () => setShowModal(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    let formValid = true;
    const newErrors = {
      name: '',
      phonenumber: '',
      email: '',
      degree: '',
      specialization: '',
      experience: ''
    };

    // Validation logic
    if (formData.name.trim() === '') {
      newErrors.name = 'Please fill in the name';
      formValid = false;
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name)) {
      newErrors.name = 'Please enter a valid name with only letters and spaces';
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

    if (formData.degree.trim() === '') {
      newErrors.degree = 'Please fill in the degree';
      formValid = false;
    }else if (!/^[a-zA-Z\s\.]+$/.test(formData.degree)) {
      newErrors.degree= 'Please enter a valid Degree';
      formValid = false;
    }

    if (formData.specialization.trim() === '') {
      newErrors.specialization = 'Please fill in the specialization';
      formValid = false;
    }
    else if (!/^[a-zA-Z\s\.]+$/.test(formData.specialization)) {
      newErrors.specialization= 'Please fill in the specialization';
      formValid = false;
    }


    if (formData.experience.trim() === '') {
      newErrors.experience = 'Please fill in the experience';
      formValid = false;
    }
    else if (!/^[a-zA-Z0-9.\s]+$/.test(formData.experience)) {
      newErrors.experience = 'Please enter a valid experience (letters, numbers and dots only)';
      formValid = false;
    }
    


    if (formValid) {
      // Submit the form if valid
      axios.post("https://kggeniuslabs.com:4000/form", formData)
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
      // Update state with error messages if form is invalid
      setErrors(newErrors);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    email: '',
    degree: '',
    specialization: '',
    experience: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear the error message when user starts typing again
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <Modal show={showModal} onHide={handleClose} className='putmt-5 zindexdm'>
      <Modal.Header closeButton>
        <Modal.Title><b>Get in Touch with Us</b></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <form onSubmit={handleSubmit}>
            <div className="col-lg-12">
              <input type="text" className="form-control mb-3" required placeholder='Full Name' name="name" id="name" onChange={handleChange} />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>

            <div className="mt-3">
              <input type="tel" className="form-control mb-3" required placeholder='Phone Number' name="phonenumber" id="phonenumber" onChange={handleChange} />
              {errors.phonenumber && <small className="text-danger">{errors.phonenumber}</small>}
            </div>

            <div className="mt-3">
              <input type="email" className="form-control mb-3" required placeholder='Email' name="email" id="email" onChange={handleChange} />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            <div className="mt-3">
              <input type="text" className="form-control mb-3" required placeholder='Degree' name="degree" id="degree" onChange={handleChange} />
              {errors.degree && <small className="text-danger">{errors.degree}</small>}
            </div>

            <div className="mt-3">
              <input type="text" className="form-control mb-3" required placeholder='Specialization' name="specialization" id="specialization" onChange={handleChange} />
              {errors.specialization && <small className="text-danger">{errors.specialization}</small>}
            </div>

            <div className="mt-3">
              <input type="text" className="form-control mb-3" required placeholder='Years of Experience' name="experience" id="experience" onChange={handleChange} />
              {errors.experience && <small className="text-danger">{errors.experience}</small>}
            </div>

            <div className="mt-4">
              <input type="submit" value="Submit" className='form-control btn btn-primary' />
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AutoPopupModal;
