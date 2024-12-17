import React, { useEffect } from 'react';
import '../App.css';
import Aos from 'aos';
import { Carousel } from 'react-bootstrap';
// import Map from '../components/Map';
import Achievements from '../components/Achievements';


function MainContent() {

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
    <div><div style={{ backgroundColor: 'rgb(149, 166, 119)', padding: '100px 0' }}>
      <div className="container main-content bg-dark">
        <div className="text-overlay text-center text-white">
          <h1>QOGEANT-BIZZ (India) PRIVATE LIMITED!</h1>
          <br />
          <h5>An ISO 9001 Certified Company</h5>
        </div>
      </div>
    </div>
      <div className='bg-light svr'>
        <div className="services-container" style={{ backgroundColor: 'white', padding: '50px 20px' }}>
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-md-8 text-start">
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

            <div className="row text-start">
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Office Automation</h5>
                    <p className="card-text">
                      Office automation refers to the computer machineries and softwares used to digitally create, collect, store, manipulate, and relay office information needed for accomplishing basic tasks. Office automation helps in optimizing or automating existing office procedures.
                    <a href="/services#getinfo"  >
                        &gt;&gt;
                    </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Data Center</h5>
                    <p className="card-text">
                      Qbizz centralizes an organization’s shared IT operations and equipment for the purposes of storing, processing, and disseminating data and applications. Because they store the most critical and proprietary assets, data centers are vital to the continuity of daily operations.
                    <a href="/services#getinfo"  >
                        &gt;&gt;
                    </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Networking & Security</h5>
                    <p className="card-text">
                      Qbizz Provides Network security service which consists of the policies, processes, and practices adopted to prevent, detect and monitor unauthorized access, misuse, modification, or denial of a computer network and network-accessible resources.
                    <a href="/services#getinfo"  >
                        &gt;&gt;
                    </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Smart Class</h5>
                    <p className="card-text">
                      Qogeant-Bizz (India) Private Limited provides digitally equipped classroom solutions, enhancing the learning experience for students through advanced technological setups.
                    <a href="/services#getinfo"  >
                      &gt;&gt;
                    </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">UAV</h5>
                    <p className="card-text">
                      An Unmanned Aerial Vehicle (UAV) is an aircraft with no pilot on board. In the commercial and civilian sector, UAVs are used for purposes like surveillance, photography, and delivery services.
                    <a href="/services#getinfo"  >
                      &gt;&gt;
                    </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Smart City</h5>
                    <p className="card-text">
                      Qbizz provides a technologically modern urban area that uses different types of electronic methods and sensors to collect specific data. Insights gained from that data are used to manage assets, resources, and services efficiently.
                    <a href="/services#getinfo"  >
                        &gt;&gt;
                    </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="justify-content-center text-center" style={{ backgroundColor: 'rgb(149, 166, 119)', padding: '50px 0' }}>
        <div>
          <h1 style={{ fontWeight: 'lighter' }}>For Any Services In Guwahati.</h1>
        </div>
        <div>
          <p>Call us @ <a href="tel:+913613578853" style={{ color: 'black' }}>+913613578853</a></p>
        </div>
        <img
          src="https://qweb3.wordpress.com/wp-content/uploads/2024/07/screenshot-2024-07-11-113815.svg_.jpg?w=1024"
          alt=""
          className="img-fluid"
          style={{ borderRadius: '15px' }}
        />
        <div className="container">
          <br />
          <p className="mx-auto">
            Qognant is an IT consulting firm that offers complete office solutions for all classified spaces. Since its inception, the company embraces a prolific record of providing excellent and dedicated services to its clients.
          </p>
        </div>
      </div>

      <div className='bg-dark' style={{ padding: '50px 0' }}>
        <div className="containerd-flex justify-content-center">
          <div>
            <h1 className='text-white' style={{ fontFamily: "Grey Qo", fontStyle: 'oblique' }}>“When you care enough to send the very best”</h1>
          </div>
        </div>
      </div>

      <div className="partners-section py-5" style={{ backgroundColor: 'rgb(149, 166, 119)', padding: '100px 0' }}>
        <div className="container">
          <h2 className="text-center mb-4" style={{ fontFamily: 'Georgia' }}>Partners</h2>
          <br />
          <div className="container">
            <div className="row bg-light p-3 border" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>

              {/* Infra */}
              <div className="col-12 mb-5 text-center">
                <h4 style={{ textDecoration: "underline" }}>Infra</h4>
                <div className="d-none d-md-flex justify-content-center align-items-center flex-wrap">
                  <img
                    data-aos="fade-right"
                    src="https://logowik.com/content/uploads/images/443_huawei.jpg"
                    alt="Huawei"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-up"
                    src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/666ad33b90b7c3001de29d3f.png"
                    alt="HP"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-up"
                    src="https://nds-association.org/wp-content/uploads/2020/08/hitachi-logo.jpg"
                    alt="hitachi"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-up"
                    src="https://cxotoday.com/wp-content/uploads/2018/11/NetApp_Logo_II_2.jpg"
                    alt="netapp"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-left"
                    src="https://logowik.com/content/uploads/images/dell-technologies9919.logowik.com.webp"
                    alt="Dell"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                </div>
                <div className="d-md-none">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        src="https://logowik.com/content/uploads/images/443_huawei.jpg"
                        alt="huawei"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/666ad33b90b7c3001de29d3f.png"
                        alt="HP"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://nds-association.org/wp-content/uploads/2020/08/hitachi-logo.jpg"
                        alt="hitachi"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://cxotoday.com/wp-content/uploads/2018/11/NetApp_Logo_II_2.jpg"
                        alt="netapp"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://logowik.com/content/uploads/images/dell-technologies9919.logowik.com.webp"
                        alt="dell"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>

              {/* Software Licensing */}
              <div className="col-12 mb-5 text-center">
                <h4 style={{ textDecoration: "underline" }}>Software Licensing</h4>
                <div className="d-none d-md-flex justify-content-center align-items-center flex-wrap">
                  <img
                    data-aos="fade-left"
                    src="https://cf-images.dustin.eu/cdn-cgi/image/format=auto,quality=75,width=828,,fit=contain/image/d20000100149512/cisco-tilbehrsst-til-strmsystem.jpg"
                    alt="Cisco"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-up"
                    src="https://logowik.com/content/uploads/images/juniper-networks9898.jpg"
                    alt="Jupiter networks"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-up"
                    src="https://www.logotypes101.com/logos/108/742EA2A13DA6EEF16EDE3D95755D43B1/aruba_networks.png"
                    alt="aruba"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-up"
                    src="https://coworktech.io/wp-content/uploads/2017/11/rukus.png"
                    alt="ruckus"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-up"
                    src="https://getlogo.net/wp-content/uploads/2020/05/riverbed-technology-logo-vector.png"
                    alt="riverbed"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-right"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgd1w5-wC7rCcYurJVmfJwFYemOEEnA_t7tA&s"
                    alt="dellemc"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                </div>
                <div className="d-md-none">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        src="https://cf-images.dustin.eu/cdn-cgi/image/format=auto,quality=75,width=828,,fit=contain/image/d20000100149512/cisco-tilbehrsst-til-strmsystem.jpg"
                        alt="Cisco"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://logowik.com/content/uploads/images/juniper-networks9898.jpg"
                        alt="Jupiter networks"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://www.logotypes101.com/logos/108/742EA2A13DA6EEF16EDE3D95755D43B1/aruba_networks.png"
                        alt="aruba"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://coworktech.io/wp-content/uploads/2017/11/rukus.png"
                        alt="ruckus"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://getlogo.net/wp-content/uploads/2020/05/riverbed-technology-logo-vector.png"
                        alt="riverbed"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgd1w5-wC7rCcYurJVmfJwFYemOEEnA_t7tA&s"
                        alt="dellemc"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>

              {/* Analytics */}
              <div className="col-12 mb-5 text-center">
                <h4 style={{ textDecoration: "underline" }}>Analytics</h4>
                <div className="d-none d-md-flex justify-content-center align-items-center flex-wrap">
                  <img
                    data-aos="fade-right"
                    src="https://d1pt6w2mt2xqso.cloudfront.net/AcuCustom/Sitename/DAM/072/Untitled_design_5.png"
                    alt="SAS"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-left"
                    src="https://seekvectorlogo.com/wp-content/uploads/2019/04/qlik-vector-logo.png"
                    alt="qlink"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                </div>
                <div className="d-md-none">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        src="https://d1pt6w2mt2xqso.cloudfront.net/AcuCustom/Sitename/DAM/072/Untitled_design_5.png"
                        alt="SAS"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://seekvectorlogo.com/wp-content/uploads/2019/04/qlik-vector-logo.png"
                        alt="qlink"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>

              {/* Network */}
              <div className="col-12 mb-5 text-center">
                <h4 style={{ textDecoration: "underline" }}>Network</h4>
                <div className="d-none d-md-flex justify-content-center align-items-center flex-wrap">
                  <img
                    data-aos="fade-left"
                    src="https://its.inside.tru.ca/files/2014/07/adobe.jpg"
                    alt="Adobe"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-up"
                    src="https://www.virtualhome.blog/wp-content/uploads/2019/12/vmware_workstation_logo.png"
                    alt="vmware"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-right"
                    src="https://logowik.com/content/uploads/images/microsoft44289.logowik.com.webp"
                    alt="Microsoft"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                </div>
                <div className="d-md-none">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        src="https://its.inside.tru.ca/files/2014/07/adobe.jpg"
                        alt="Adobe"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://www.virtualhome.blog/wp-content/uploads/2019/12/vmware_workstation_logo.png"
                        alt="vmware"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://logowik.com/content/uploads/images/microsoft44289.logowik.com.webp"
                        alt="Microsoft"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>

              {/* Cloud Partner */}
              <div className="col-12 mb-5 text-center">
                <h4 style={{ textDecoration: "underline" }}>Cloud</h4>
                <div className="d-none d-md-flex justify-content-center align-items-center flex-wrap">
                  <img
                    data-aos="fade-right"
                    src="https://techbldrs.com/wp-content/uploads/2023/01/Microsoft-Partner-Logo.jpg"
                    alt="Microsoft Partners"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-up"
                    src="https://nightingalehq.ai/knowledgebase/glossary/what-is-aws/aws.png"
                    alt="AWS"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                  <img
                    data-aos="fade-left"
                    src="https://www.cibirix.com/cdn/uploads//2018/01/google-partner-1.png"
                    alt="Google partners"
                    className="img-fluid mx-2"
                    style={{ width: '150px', borderRadius: '10px' }}
                  />
                </div>
                <div className="d-md-none">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        src="https://techbldrs.com/wp-content/uploads/2023/01/Microsoft-Partner-Logo.jpg"
                        alt="Microsoft Partners"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://nightingalehq.ai/knowledgebase/glossary/what-is-aws/aws.png"
                        alt="AWS"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src="https://www.cibirix.com/cdn/uploads//2018/01/google-partner-1.png"
                        alt="Googlepartners"
                        className="d-block w-100"
                        style={{ height: '100px', borderRadius: '10px', objectFit: 'contain' }}
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="client-reviews-section py-5" style={{ backgroundColor: 'rgb(149, 166, 119)', padding: '100px 0' }}>
        <div className="container">
          <h2 className="text-start mb-4" style={{ fontFamily: 'Georgia' }}>Client Reviews:</h2>
          <div className="row d-flex justify-content-center">
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
        <Achievements />


        {/* <Map/> */}
      </div>



    </div>
  );
}

export default MainContent;