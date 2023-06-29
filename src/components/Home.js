import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to The Tech Hub</h1>
          <p>Discover the latest in technology and innovation.</p>
          <Link to="/signin" className="cta-button">Get Started</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Expert Team</h2>
          <p>Our team of experts is dedicated to delivering cutting-edge solutions.</p>
        </div>
        <div className="feature">
          <h2>Advanced Technology</h2>
          <p>Stay ahead of the curve with our state-of-the-art technology solutions.</p>
        </div>
        <div className="feature">
          <h2>Exceptional Service</h2>
          <p>We are committed to providing exceptional service to our clients.</p>
        </div>
      </section>

      <section className="newsletter">
        <h2>Join our Waitlist</h2>
        <p>Be the first to know about our updates when we roll out.</p>
        <Link to="/waitlist" className="cta-button">Join Now</Link>
      </section>

      <section className="testimonials">
  <h2>What Our Team Says</h2>
  <div className="testimonial">
    <p>"The Tech Hub provides a collaborative and supportive work environment, allowing our team to thrive and reach new heights. It's inspiring to witness the incredible ideas and solutions that emerge from our collective expertise."</p>
    <p>- Yipmong Said, Team Leader</p>
  </div>
</section>

    </div>
  );
};

export default Home;
