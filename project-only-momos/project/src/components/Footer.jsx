import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h3 className="footer-title">Only Momos</h3>
            <p>
              Authentic Himalayan dumplings served with love. Experience the taste of tradition with our 
              handcrafted momos, made fresh daily using family recipes passed down through generations.
            </p>
            <div className="social-icons mt-4">
              <a href="https://www.instagram.com/the.onlymomo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="https://www.instagram.com/the.onlymomo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={22} />
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h3 className="footer-title">Opening Hours</h3>
            <ul className="list-unstyled footer-links">
              <li className="d-flex align-items-center mb-3">
                <Clock size={18} className="me-2" />
                <span>Monday - Friday: 11:00 AM - 10:00 PM</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <Clock size={18} className="me-2" />
                <span>Saturday - Sunday: 10:00 AM - 11:00 PM</span>
              </li>
            </ul>

            <h3 className="footer-title mt-4">Quick Links</h3>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/events">Events</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </Col>

          <Col lg={4} md={12}>
            <h3 className="footer-title">Contact Us</h3>
            <ul className="list-unstyled footer-links">
              <li className="d-flex align-items-center mb-3">
                <MapPin size={18} className="me-2" />
                <span>VPM FOOD COURT, Ellis Chathiram Rd, Moovendar Nagar, Viluppuram, Tamil Nadu</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <Phone size={18} className="me-2" />
                <span><a href="tel:9551628855" className="text-decoration-none pt-2">
    95516 28855
  </a></span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <Mail size={18} className="me-2" />
                <span>info@onlymomos.com</span>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="mt-4 mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Row>
          <Col md={12} className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Only Momos. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
