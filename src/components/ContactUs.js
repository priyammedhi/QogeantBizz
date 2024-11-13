import React from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
      Swal.fire({
        icon: 'error',
        title: 'All fields are required',
        text: 'Please fill out all fields.',
      });
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
      });
      return;
    }

    Swal.fire({
      icon: 'info',
      title: 'Sending...',
      showConfirmButton: false,
    });

    formData.append("access_key", "#");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Form Submitted Successfully',
      });
      event.target.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: data.message,
      });
    }
  };

  return (
    <div className='p-5' style={{ backgroundColor: 'rgb(149, 166, 119)'}}>
      <section id="contact" className="p-3 bg-light" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
        <div className="container bg-light">
          <div className="row align-items-center flex-column flex-md-row">
            {/* Left Column: Contact Information */}
            <div className="col-md-6">
              <h1 className="text-center text-md-left">For further information,<br /> reach out to us</h1>
              <br />
              <div className="contact-details" style={{ textAlign: 'left', maxWidth: '400px', margin: 'auto' }}>
                <p><FontAwesomeIcon className='fa-2xl' icon={faPhone} style={{color:'rgb(92, 107, 66)'}} /> <strong> Phone:</strong> (123) 456-7890</p>
                <p><FontAwesomeIcon className='fa-2xl' icon={faEnvelope} style={{color:'rgb(92, 107, 66)'}} /> <strong> Email:</strong> qbizz@</p>
                <p><FontAwesomeIcon className='fa-2xl' icon={faMapMarkerAlt} style={{color:'rgb(92, 107, 66)'}} /> <strong> Address:</strong> Assam State Center, Lakhtokia, Assam</p>
              </div>
              <br />
            </div>

            {/* Right Column: Contact Form */}
            <div className="col-md-6 mt-3">
              <h6 style={{color:'rgb(92, 107, 66)'}}>How May We Help You</h6>
              <h1 className="text-center text-md-left">Get in Touch!</h1>
              <br />
              <form onSubmit={onSubmit} style={{ textAlign: 'left', maxWidth: '400px', margin: 'auto' }}>
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input type="text" name='name' className="form-control" id="inputName" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input type="email" name='email' className="form-control" id="inputEmail" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputMessage">Message</label>
                  <textarea name='message' className="form-control" id="inputMessage" rows="5" placeholder="Your Message"></textarea>
                </div>
                <br />
                <button type="submit" className="btn btn-success" style={{ backgroundColor: 'purple', width:'100%' }}>Send →</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;