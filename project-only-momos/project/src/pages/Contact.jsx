import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name : '',
    email : '',
    phone : '',
    menu : '',
    message : ''
  })

  const handleForm = (e)=>{
    setFormData(prev => ({
  ...prev,
  [e.target.name]: e.target.value
}));
  }

  const handleChange = async (e) =>{
    e.preventDefault()

    try{
      const res = await fetch('http://localhost:5000/api/contact/send',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
      })

      const data = await res.json();
      
      if (res.ok){
        alert("Message sent sucessfully")
        setFormData({
        name: '',
        email: '',
        phone: '',
        menu:  '',
        message: ''
      });
      }else{
        alert("Message sent Failed")
      }

    }catch (err){
      alert("Error")
      console.log(err)
    }
  }
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions or to make a reservation."
        backgroundImage="https://images.pexels.com/photos/6646017/pexels-photo-6646017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Contact Info Section */}
      <section className="page-section">
        <Container>
          <Row>
            <Col lg={5} className="mb-5 mb-lg-0">
              <h2 className="mb-4">Get In Touch</h2>
              <p className="lead mb-4">
                We're here to answer any questions you may have about our menu, services, or events.
              </p>

              <div className="mb-4">
                <h4 className="mb-3">Contact Information</h4>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-3">
                    <MapPin size={22} className="me-3" style={{ color: 'var(--primary)' }} />
                    <span>VPM FOOD COURT, Ellis Chathiram Rd, Moovendar Nagar, Viluppuram, Tamil Nadu</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <Phone size={22} className="me-3" style={{ color: 'var(--primary)' }} />
                    <span><a href="tel:9551628855" className="text-decoration-none pt-2 text-dark">
                      95516 28855
                      </a></span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <Mail size={22} className="me-3" style={{ color: 'var(--primary)' }} />
                    <span>info@onlymomos.com</span>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="mb-3">Hours of Operation</h4>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-3">
                    <Clock size={22} className="me-3" style={{ color: 'var(--primary)' }} />
                    <div>
                      <strong>Monday - Friday:</strong> 11:00 AM - 10:00 PM
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <Clock size={22} className="me-3" style={{ color: 'var(--primary)' }} />
                    <div>
                      <strong>Saturday - Sunday:</strong> 10:00 AM - 11:00 PM
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3">Reservations</h4>
                <p>
                  For reservations, please call us or fill out the form. We recommend making reservations 
                  at least 48 hours in advance for weekends and special events.
                </p>
                <Button variant="primary" href="tel:1234567890" className="d-inline-flex align-items-center">
                  <Phone size={18} className="me-2" /> Call For Reservations
                </Button>
              </div>
            </Col>

            <Col lg={7}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4 p-md-5">
                  <div className="mb-4 text-center">
                    <MessageSquare size={40} style={{ color: 'var(--primary)' }} />
                    <h3 className="mt-2">Send Us a Message</h3>
                  </div>

                  <Form onSubmit={handleChange}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control type="text" placeholder="Your name" name='name' onChange={handleForm} value={formData.name} required />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Your email" name='email' onChange={handleForm} value={formData.email} required />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="tel" placeholder="Your phone number" name='phone' onChange={handleForm} value={formData.phone} />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Menus</Form.Label>
                          {/* <Form.Control type="text" placeholder="Your menu" name='menu' onChange={handleForm} /> */}
                          <Form.Select name='menu' onChange={handleForm} value={formData.menu} >
                            <option value="">Select-Menu</option>
                            <option value="Veg Momos">Veg Momos</option>
                            <option value="Chicken Momos">Chicken Momos</option>
                            <option value="Fish Momos">Fish Momos</option>
                            <option value="Prawn Momos">Prawn Momos</option>
                            <option value="Bread Omblate">Bread Omblate</option>
                            <option value="Other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={12} className="mb-3">
                        <Form.Group>
                          <Form.Label>Message</Form.Label>
                          <Form.Control as="textarea" rows={5} placeholder="Your message" name='message' onChange={handleForm} value={formData.message} required />
                        </Form.Group>
                      </Col>
                      <Col md={12} className="text-center">
                        <Button 
                          variant="accent" 
                          type="submit" 
                          size="lg"
                          className="d-inline-flex align-items-center"
                        >
                          Send Message <Send size={18} className="ms-2" />
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="page-section bg-light-yellow">
        <Container>
          <SectionTitle 
            title="Find Us" 
            subtitle="Visit our restaurant and experience authentic momos"
          />
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="ratio ratio-21x9 rounded overflow-hidden shadow">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.669011015361!2d79.4790434750593!3d11.928107188299508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5357ef9b00c3ed%3A0x54c643dc16900157!2sThe%20ONLY%20MOMO!5e0!3m2!1sen!2sin!4v1752941089069!5m2!1sen!2sin" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Only Momos Location"
                ></iframe>
              </div>
              <div className="bg-white p-4 mt-4 rounded shadow text-center">
                <p className="mb-0">
                  <strong>Only Momos</strong> is conveniently located in the heart of the Foodie District, 
                  with easy access to public transportation. Street parking is available, and there's a 
                  parking garage just one block away.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="page-section">
        <Container>
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find quick answers to common questions"
          />
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item mb-3 border-0 shadow-sm">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      Do you take reservations?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we accept reservations for parties of all sizes. We recommend making reservations in advance, especially for weekends and holidays. You can call us or use the reservation form on this page.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border-0 shadow-sm">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Do you offer vegetarian options?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Absolutely! We have a wide variety of vegetarian momos and other dishes. All our vegetarian items are clearly marked on the menu with a green indicator.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border-0 shadow-sm">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Can you accommodate large groups?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we can accommodate groups of various sizes. For larger parties (more than 8 people), we recommend making a reservation at least a week in advance. We also offer private event spaces for larger gatherings.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border-0 shadow-sm">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      Do you offer delivery?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we offer delivery through several food delivery platforms. You can also order directly through our website for pickup to save on delivery fees.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 shadow-sm">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                      Are your momos gluten-free?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Our traditional momo wrappers contain gluten. However, we do offer rice paper wrapped options for those with gluten sensitivities. Please inform your server about any allergies or dietary restrictions.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
