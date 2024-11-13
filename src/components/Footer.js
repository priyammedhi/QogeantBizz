import React from 'react';
import Map from './Map';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'rgb(106, 128, 88)' }}>
      <div className="container-fluid" style={{ padding: '20px' }}>
        <div className="row text-center text-md-left align-items-center">
          <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <img 
              src={require('../images/logo.png')} 
              alt="LOGO" 
              className="img-fluid" 
              style={{ width: '120px', borderRadius: '10px' }} 
            />
            <p className="mt-2 mb-0">Qogeant-Bizz</p>
            <p className="mb-0">Assam State Centre, The Institution of Engineers, Lakhtokia</p>
            <p className="mb-0">Guwhati, Assam, 781001</p>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0 text-center text-md-left">
            <h5>Contact Us:</h5>
            <p className="mb-0">info@qbizznow.info</p>
            <p className="mb-0">Tel: +91-9706086345 </p>
          </div>
          <div className="col-12 col-md-4 ">
            <Map/>
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
