import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';

const Gallery = () => {
  // Embed data with captions
  const linkedInPosts = [
    {
      embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7265283646478065664" height="500" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
    },
    {
      embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7265682982990934016" height="926" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
    },
    {
      embed: `<iframe src="https://www.linkedin.com/feed/update/urn:li:activity:7265965500013117440" height="926" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,

    },
  ];
  const images = [
    image8,
    image7,
    image3,
    image4,
    image5,
    image6,
    image2,
    image1
  ];

  return (
    <div style={{ backgroundColor: 'rgb(149, 166, 119)', padding: '60px 0' }}>
      <div className="m-5">
        <div className="gallery-container">
          <div className="gallery-content">
            {/* Left Section: Heading */}
            <div className="gallery-heading">
              <h1 style={{ fontFamily: 'Dancing Script', fontSize: '3rem', fontStyle: 'solid' }}>Discover Our Latest Updates</h1>
            </div>

            {/* Right Section: Carousel */}
            <div className="gallery-carousel">
              <Carousel>
                {linkedInPosts.map((post, index) => (
                  <Carousel.Item key={index}>
                    <div
                      className="linkedin-carousel-embed"
                      dangerouslySetInnerHTML={{ __html: post.embed }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="mt-5" style={{ textAlign: "center" }}>
          <p className="beautiful-text">
            Qogeant-Bizz (India) Pvt. Ltd., founded on 30/10/2017, is an IT consulting firm offering office solutions for classified spaces. Known for high-quality services and innovative technology, Qogeant delivers efficient, client-focused results.
          </p>
          <div className="collage-container">
            {images.map((image, index) => (
              <div className="collage-item" key={index}>
                <img src={image} alt={`Collage item ${index + 1}`} className="collage-image" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;