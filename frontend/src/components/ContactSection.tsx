// src/components/ContactSection.tsx
import React from 'react';
import '../assets/css/ContactSection.css';

const ContactSection: React.FC = () => { // Added React.FC for functional component typing
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-subtext">
          We'd love to hear from you! Whether you have a question about our services,
          pricing, or anything else, our team is ready to answer all your questions.
        </p>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          {/* Corrected rows attribute below */}
          <textarea name="message" rows={5} placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;