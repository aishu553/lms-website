import React, { useEffect, useState } from "react";
import "./Contact.css";
import contactVector from "../assets/Contact.svg";

function Contact() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div className={`contact-container ${animate ? "fade-in" : ""}`}>
      {/* Left side with vector */}
      <div className="contact-left">
        <img src={contactVector} alt="Contact illustration" className="contact-vector" />
      </div>

      {/* Right side with form */}
      <div className="contact-right">
        <div className="contact-card">
          <h2>Get in Touch 💬</h2>
          <p>We’d love to hear from you! Fill out the form below and we’ll get back soon.</p>

          <form className="contact-form">
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Write your message here..." rows="4" required></textarea>
            </div>

            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
