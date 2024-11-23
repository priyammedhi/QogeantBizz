import React from 'react';
import Map from './Map';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'rgb(106, 128, 88)' }}>
      <div className="container-fluid" style={{ padding: '20px' }}>
        <div className="row text-center text-md-left align-items-center">
          <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column align-items-md-start">
            <img
              src={require('../images/logo.png')}
              alt="LOGO"
              className="img-fluid"
              style={{ width: '120px', borderRadius: '10px' }}
            />
            <p className="mt-2 mb-0">Qogeant-Bizz Pvt. LTD</p>
            <p className="mb-0">Institute of Engineers (India), Assam State Centre, 3rd floor, East lane, Near Panbazar Over Bridge, Panbazar,  Guwahati : 781001</p>
            <p className="mb-0">Guwhati, Assam, 781001</p>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0 text-center text-md-left">
            <h5>Contact Us:</h5>
            <p className="mb-0">info@qbizznow.info</p>
            <p className="mb-0">Tel: +91 361 357 8853 </p>
            <a
              href="https://www.linkedin.com/company/qogeant-bizz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="icon-circle mt-2">
              <i className="fab fa-linkedin fa-1.5x"></i> 
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4 ">
            <Map />
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2017 Qogeant-Bizz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
