import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';
import Vector1 from '../assets/images/Vector.svg'
import Vector2 from '../assets/images/Advanced Teachnology icon.svg'
import Vector3 from '../assets/images/exepts.svg'
import CEO from '../assets/images/ceo.jpg'

const Home = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>The Tech Hub</h1>
          <p>Discover the latest in technology and innovation.</p>
          <Link to="/signin" className="cta-button">Get Started</Link>
        </div>
        <div className="ellipses">
          <div className="ellipse1"></div>
          <div className="ellipse2"></div>
        </div>
      </section>

      <Footer />

      <section className="features">
        <div className="feature">
          
          <div className="ellipse-before-header">
           
            <img src={Vector1} alt="vector" />
          </div>
          <h2>Expert Team</h2>
          <p>Our team of experts is dedicated to delivering cutting-edge solutions.</p>
        </div>
        <div className="feature">
          <div className="ellipse-before-header">
            {/* Add the image inside the ellipse */}
            <img src={Vector2} alt="vector" />
          </div>
          <h2>Advanced Technology</h2>
          <p>Stay ahead of the curve with our state-of-the-art technology solutions.</p>
        </div>
        <div className="feature">
          <div className="ellipse-before-header">
            {/* Add the image inside the ellipse */}
            <img src={Vector3} alt="vector" />
          </div>
          <h2>Exceptional Service</h2>
          <p>We are committed to providing exceptional service to our clients.</p>
        </div>
      </section>
<section className="testimonials">
  <h2>What Our Team Says</h2>
  <div className="testimonial-container">
    <div className="testimonial-image">
      
      <img src={CEO} alt="vector" />
    </div>
    <div className="testimonial-text">
      <p>"The Tech Hub provides a collaborative and supportive work environment, allowing our team to thrive and reach new heights. It's inspiring to witness the incredible ideas and solutions that emerge from our collective expertise."</p>
     <p> <p className='ceo'>- Yipmong Said,</p> Team Leader</p>
    </div>
  </div>
</section>


    </div>
  );
};

export default Home;
