import React, { useEffect } from 'react';
import '../App.css';
import Aos from 'aos';
import { Carousel } from 'react-bootstrap';
// import Map from '../components/Map';
import Achievements from '../components/Achievements';


function MainContent() {

  const logos = [
    "https://logowik.com/content/uploads/images/443_huawei.jpg",
    "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/666ad33b90b7c3001de29d3f.png",
    "https://nds-association.org/wp-content/uploads/2020/08/hitachi-logo.jpg",
    "https://cxotoday.com/wp-content/uploads/2018/11/NetApp_Logo_II_2.jpg",
    "https://logowik.com/content/uploads/images/dell-technologies9919.logowik.com.webp",
    "https://cf-images.dustin.eu/cdn-cgi/image/format=auto,quality=75,width=828,,fit=contain/image/d20000100149512/cisco-tilbehrsst-til-strmsystem.jpg",
    "https://logowik.com/content/uploads/images/juniper-networks9898.jpg",
    "https://www.logotypes101.com/logos/108/742EA2A13DA6EEF16EDE3D95755D43B1/aruba_networks.png",
    "https://coworktech.io/wp-content/uploads/2017/11/rukus.png",
    "https://getlogo.net/wp-content/uploads/2020/05/riverbed-technology-logo-vector.png",
    "https://d1pt6w2mt2xqso.cloudfront.net/AcuCustom/Sitename/DAM/072/Untitled_design_5.png",
    "https://seekvectorlogo.com/wp-content/uploads/2019/04/qlik-vector-logo.png",
    "https://its.inside.tru.ca/files/2014/07/adobe.jpg",
    "https://www.virtualhome.blog/wp-content/uploads/2019/12/vmware_workstation_logo.png",
    "https://logowik.com/content/uploads/images/microsoft44289.logowik.com.webp",
  ];

  const reviews = [
    {
      stars: 5,
      text: "Qogeant-Bizz (India) Private Limited Provides Great and Innovative Solutions in IT Security. Loved their work.",
      name: "John Doe",
      designation: "CEO, Company Inc."
    },
    {
      stars: 4,
      text: "Exceptional quality and support.They provides a huge Range of solutions related to Complete automation. Thank you for your work. Will use again.",
      name: "Jane Smith",
      designation: "Marketing Director, Another Co."
    },
    {
      stars: 5,
      text: "Best place to get complete solution for any It related requirements. I am fully satisfied after receiving their service.",
      name: "Emily Johnson",
      designation: "CTO, Tech Solutions"
    },
    {
      stars: 5,
      text: "Best place to get complete solution for any It related requirements. I am fully satisfied after receiving their service.",
      name: "Emily Johnson",
      designation: "CTO, Tech Solutions"
    }
  ];

  useEffect(() => {
    Aos.init({
      // Customize settings here
      duration: 1000, // Animation duration
      offset: 200,    // Offset (in pixels) from the original trigger point
      easing: 'ease-in-out', // Animation easing
    });
  }, []);


  return (
    <div className='mt-5'>
      <div className="container main-content bg-dark" >
        <div className="text-overlay text-center text-white">
          <h1>QOGEANT-BIZZ (India) PRIVATE LIMITED!</h1>
          <br />
          <h5>An ISO 9001 Certified Company</h5>
        </div>
      </div>
      <div className='bg-light svr'>
        <div className="services-container" style={{ backgroundColor: 'white', padding: '50px 20px' }}>
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-md-8 text-justify">
                <p>
                  Qogeant-Bizz (India) Private Limited has started on 30/10/2017, Qogeant is an IT consulting firm that offers complete office solution for all classified spaces. Since its inception, the company embraces a prolific record of providing excellent and dedicated services to its clients.
                </p>
                <p>
                  With its base in Guwahati, Assam, Qogeant has been trading technology-driven equipment to major PSUs, MHEs, SMEs, Defense, Government Offices, etc. and has been celebrating smiles for its commendable works. Emphasizing primarily on customer satisfaction, a team of dedicated professionals works relentlessly to maintain the efficacy of the company and ensure precise accomplishment of projects.
                </p>
              </div>
              <div className="col-md-4">
                <img data-aos="flip-left" src={require('../images/logo.png')} alt="QBIZZ" className="img-fluid" style={{ maxWidth: '200px' }} />
              </div>
            </div>

            <hr className="my-5" />

            <h2 className="mb-4">Our Services</h2>
            <br />

            <div className="row text-justify">
              <div data-aos="fade-right" className="col-md-4 mb-4">
                <a href="/services#getinfo" className="text-decoration-none">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Office Automation</h5>
                      <p className="card-text">
                        Office automation refers to the computer machineries and softwares used to digitally create, collect, store, manipulate, and relay office information needed for accomplishing basic tasks. Office automation helps in optimizing or automating existing office procedures.
                      </p>
                    </div>
                  </div>
                </a>
              </div>


              <div data-aos="zoom-in-up" className="col-md-4 mb-4"><a href="/services#getinfo"  className="text-decoration-none" >
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Data Center</h5>
                    <p className="card-text">
                      Qbizz centralizes an organization’s shared IT operations and equipment for the purposes of storing, processing, and disseminating data and applications. Because they store the most critical and proprietary assets, data centers are vital to the continuity of daily operations.

                    </p>
                  </div>
                </div>
              </a>
              </div>

              <div data-aos="fade-left" className="col-md-4 mb-4">
                <a href="/services#getinfo"  className="text-decoration-none" >
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Networking & Security</h5>
                      <p className="card-text">
                        Qbizz Provides Network security service which consists of the policies, processes, and practices adopted to prevent, detect and monitor unauthorized access, misuse, modification, or denial of a computer network and network-accessible resources.
                        &gt;&gt;
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div data-aos="fade-right" className="col-md-4 mb-4">
                <a href="/services#getinfo"  className="text-decoration-none" >
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Smart Class</h5>
                      <p className="card-text">
                        Qogeant-Bizz (India) Private Limited provides digitally equipped classroom solutions, enhancing the learning experience for students through advanced technological setups.
                        &gt;&gt;
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div data-aos="zoom-in-up" className="col-md-4 mb-4">
                <a href="/services#getinfo"  className="text-decoration-none" >
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">UAV</h5>
                      <p className="card-text">
                        An Unmanned Aerial Vehicle (UAV) is an aircraft with no pilot on board. In the commercial and civilian sector, UAVs are used for purposes like surveillance, photography, and delivery services.
                        &gt;&gt;
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div data-aos="fade-left" className="col-md-4 mb-4">
                  <a href="/services#getinfo"  className="text-decoration-none" >
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Smart City</h5>
                      <p className="card-text">
                        Qbizz provides a technologically modern urban area that uses different types of electronic methods and sensors to collect specific data. Insights gained from that data are used to manage assets, resources, and services efficiently.
                        &gt;&gt;
                      </p>
                    </div>
                </div>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center">
        <div className="row m-3 align-items-center">
          {/* Left Column */}
          <div data-aos="fade-right" className="col-md-7 text-center" style={{ borderRadius: '10px', border: '2px solid black', backgroundColor: 'rgb(149, 166, 119)', padding: '50px' }}>
            <div>
              <h1 style={{ fontWeight: 'lighter' }}>For Any Services In Guwahati.</h1>
            </div>
            <div>
              <p>
                Call us @ <a href="tel:+913613578853" style={{ color: 'black' }}>+913613578853</a>
              </p>
            </div>
            <img
              src="https://qweb3.wordpress.com/wp-content/uploads/2024/07/screenshot-2024-07-11-113815.svg_.jpg?w=1024"
              alt="Service in Guwahati"
              className="img-fluid"
              style={{ borderRadius: '15px' }}
            />
            <div className="container mt-3">
              <p>
                Qognant is an IT consulting firm that offers complete office solutions for all classified spaces. Since its inception, the company embraces a prolific record of providing excellent and dedicated services to its clients.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div data-aos="fade-left" className="col-md-5 bg-dark d-flex align-items-center justify-content-center" style={{ padding: '50px' }}>
            <div>
              <h1 className="text-white text-center" style={{ fontFamily: "Grey Qo", fontStyle: 'oblique' }}>
                “When you care enough to send the very best”
              </h1>
            </div>
          </div>
        </div>
      </div>



      <div
        className="brands-section py-5"
        style={{ padding: "50px 0", marginLeft: '0' }}
      >
        <div className="container">
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "Georgia",
            }}
          >
            Brands That Trust Us
          </h2>
          <div
            className="row bg-white p-4"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: "2px solid black",

            }}
          >
            <div className="d-none d-md-flex justify-content-center align-items-center flex-wrap" >
              {logos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Brand logo ${idx + 1}`}
                  data-aos="flip-left"
                  className="img-fluid mx-2 my-2"
                  style={{
                    width: "120px", // Fixed width
                    height: "80px", // Fixed height
                    objectFit: "contain", // Maintains aspect ratio within the fixed size
                    border: "2px solid black",
                    borderRadius: "5px",
                    filter: "grayscale(100%)",
                    padding: "5px",
                  }}
                />
              ))}
            </div>
            <div className="d-md-none">
              <Carousel interval={null} controls={true} indicators={false}>
                {logos.map((logo, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      src={logo}
                      alt={`Brand logo ${idx + 1}`}
                      className="img-fluid"
                      style={{
                        width: "120px", // Fixed width
                        height: "80px", // Fixed height
                        objectFit: "contain", // Maintains aspect ratio within the fixed size
                        border: "2px solid black",
                        borderRadius: "5px",
                        filter: "grayscale(100%)",
                        padding: "5px",
                        margin: "0 auto",
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>


      <h2 className="text-center mb-4" style={{ fontFamily: 'Georgia' }}>Client Reviews:</h2>
      <div className="container" style={{ border: '2px solid black', borderRadius: '10px', backgroundColor: 'rgb(149, 166, 119)' }}>
        <div className="row d-flex justify-content-center mt-3">
          {reviews.map((review, index) => (
            <div className="col-md-4 mb-4" key={index} data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300">
              <div className="review-card" style={{
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '10px',
                height: '250px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div className="stars" style={{ color: 'gold' }}>
                  {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
                </div>
                <p style={{ fontStyle: 'italic', overflow: 'hidden', textOverflow: 'ellipsis' }}>"{review.text}"</p>
                <p><strong>- {review.name}</strong>, {review.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr style={{ width: "40%", margin: "30px auto", border: "1px solid #000" }}></hr>

      <div className="m-5 bg-light d-flex justify-content-center" style={{ borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className='m-5 p-5'>
          <h1 style={{ fontFamily: 'Georgia' }}>Come Join Us
            On Our Exciting Journey!!</h1>

          <p style={{ fontSize: '20px' }}>Stay in the loop with everything you need to know.</p>
          <button type="button" class="btn btn-dark">Contact Us</button>
        </div>
      </div>
      <div>
        <Achievements />
      </div>



    </div>
  );
}

export default MainContent;