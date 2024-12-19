import React from 'react';

function Allservices() {
    return (
        <div className="m-5 bg-light d-flex justify-content-center" style={{ borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div className="m-5 p-5">
                <h1 style={{ fontFamily: 'Georgia' }}>Select the Service You Want to Avail !!!</h1>
                <br/>
                <div className="row mt-4">
                    <div className="col-md-6 d-flex justify-content-center">
                        <a href="/sservices" className="text-decoration-none">
                            <div style={{ fontFamily: 'Georgia' }} className="service-card text-center p-4 mb-3">
                                <h3>Software</h3>
                                <br/>
                                <p>Explore our software services, including development, maintenance, and support.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <a href="/hservices" className="text-decoration-none">
                            <div style={{ fontFamily: 'Georgia' }} className="service-card text-center p-4 mb-3">
                                <h3>Hardware</h3>
                                <br/>
                                <p>Discover our hardware solutions, from installation to troubleshooting.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Allservices;
