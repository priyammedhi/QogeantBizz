import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: 'rgb(106, 128, 88)' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={require('../images/logo.png')} alt="LOGO" className="img-fluid" style={{ width: '100px', borderRadius: '10px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{
          fontFamily: "Georgia", fontSize:'18px'}}>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/services">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/gallery">Updates and Gallery</NavLink>
          </li>
        </ul>
        <a href="tel:+913613578853"><button type="button" className="btn btn-dark ms-3">Contact Us</button></a>
      </div>
    </div>
    </nav >
  );
}

export default Navbar;