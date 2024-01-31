import React from 'react';
// import './AboutUs.css';
// import centerImage from './images/center-image.jpg';
import '../css/AboutUs.css';
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header>
        <h1>About Us</h1>
      </header>

      <section className="center-image-section">
        <img src="https://www.multipe.in/wp-content/uploads/2023/06/rechgt.gif" className="center-image" />
      </section>

      <section className="recharge-details-section">
        <h2>Mobile Recharge Services</h2>
        <p>
          We are dedicated to providing top-notch mobile recharge services to
          our customers. With our user-friendly platform, you can easily
          recharge your mobile anytime, anywhere.
        </p>
        <p>
          Whether you need to recharge your prepaid mobile or pay your postpaid
          bill, we've got you covered. Enjoy the convenience of quick and secure
          mobile recharge with us.
        </p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
            <center>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main Street, Cityville</p>
          </center>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
