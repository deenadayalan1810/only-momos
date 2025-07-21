import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import { Calendar, Clock, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Momo Making Workshop",
      date: "June 15, 2025 | 3:00 PM - 5:00 PM",
      description: "Learn how to make traditional momos from our head chef. All ingredients and tools provided.",
      link: "#"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1105325/pexels-photo-1105325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Himalayan Food Festival",
      date: "July 8-10, 2025 | 12:00 PM - 9:00 PM",
      description: "Join us for a three-day celebration of Himalayan cuisine featuring special menu items and cultural performances.",
      link: "#"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Charity Dinner",
      date: "August 5, 2025 | 7:00 PM - 10:00 PM",
      description: "A special dinner event with proceeds going to support education programs in Nepal. Featuring a multi-course tasting menu.",
      link: "#"
    }
  ];

  const privateEventSpaces = [
    {
      id: 1,
      name: "Main Dining Room",
      capacity: "Up to 40 guests",
      description: "Our beautiful main dining room can be reserved for private events during non-peak hours.",
      image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Private Dining Room",
      capacity: "Up to 20 guests",
      description: "An intimate space perfect for smaller gatherings, business meetings, or family celebrations.",
      image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Outdoor Patio",
      capacity: "Up to 30 guests",
      description: "Our charming outdoor patio is available for seasonal events, weather permitting.",
      image: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <>
      <HeroSection
        title="Events & Private Dining"
        subtitle="Join us for special events or host your own private gathering"
        backgroundImage="https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Upcoming Events Section */}
      <section className="page-section">
        <Container>
          <SectionTitle 
            title="Upcoming Events" 
            subtitle="Join us for these special occasions"
          />
          <Row>
            {upcomingEvents.map(event => (
              <Col lg={4} md={6} key={event.id} className="mb-4">
                <EventCard
                  image={event.image}
                  title={event.title}
                  date={event.date}
                  description={event.description}
                  link={event.link}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Private Events Section */}
      <section className="page-section bg-light-yellow">
        <Container>
          <SectionTitle 
            title="Host Your Private Event" 
            subtitle="Make your special occasion memorable at Only Momos"
          />
          <Row className="mb-5">
            {privateEventSpaces.map(space => (
              <Col lg={4} md={6} key={space.id} className="mb-4">
                <Card className="h-100">
                  <Card.Img 
                    variant="top" 
                    src={space.image} 
                    alt={space.name} 
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{space.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      <Users size={16} className="me-2" />
                      {space.capacity}
                    </Card.Subtitle>
                    <Card.Text>{space.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4 p-md-5">
                  <h3 className="mb-4 text-center">Inquire About Private Events</h3>
                  <Form>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control type="text" placeholder="Your name" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Your email" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="tel" placeholder="Your phone number" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Event Type</Form.Label>
                          <Form.Select>
                            <option>Please select</option>
                            <option>Birthday Party</option>
                            <option>Corporate Event</option>
                            <option>Wedding Reception</option>
                            <option>Family Gathering</option>
                            <option>Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>
                            <Calendar size={16} className="me-2" />
                            Preferred Date
                          </Form.Label>
                          <Form.Control type="date" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>
                            <Clock size={16} className="me-2" />
                            Preferred Time
                          </Form.Label>
                          <Form.Control type="time" />
                        </Form.Group>
                      </Col>
                      <Col md={12} className="mb-3">
                        <Form.Group>
                          <Form.Label>
                            <Users size={16} className="me-2" />
                            Number of Guests
                          </Form.Label>
                          <Form.Control type="number" placeholder="Estimated number of guests" />
                        </Form.Group>
                      </Col>
                      <Col md={12} className="mb-3">
                        <Form.Group>
                          <Form.Label>Additional Information</Form.Label>
                          <Form.Control as="textarea" rows={4} placeholder="Tell us more about your event..." />
                        </Form.Group>
                      </Col>
                      <Col md={12} className="text-center">
                        <Button variant="primary" type="submit" size="lg">
                          Submit Inquiry
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

      {/* Catering Section */}
      <section className="page-section">
        <Container>
          <SectionTitle 
            title="Catering Services" 
            subtitle="Bring the taste of Only Momos to your next event"
          />
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="https://images.pexels.com/photos/5677392/pexels-photo-5677392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Catering services" 
                className="img-fluid rounded shadow-lg"
              />
            </Col>
            <Col lg={6}>
              <div className="ps-lg-4">
                <h3 className="mb-3">Let Us Cater Your Next Event</h3>
                <p className="mb-4">
                  Whether you're planning a corporate lunch, a birthday celebration, or a wedding reception, 
                  our catering services bring the authentic taste of Himalayan cuisine to your event.
                </p>
                <h4 className="h5 mb-3">Our Catering Options Include:</h4>
                <ul className="mb-4">
                  <li>Customized momo stations with a variety of fillings and sauces</li>
                  <li>Buffet-style service with a selection of our most popular dishes</li>
                  <li>Full-service catering with staff for larger events</li>
                  <li>Drop-off catering for smaller gatherings</li>
                </ul>
                <p className="mb-4">
                  Contact us to discuss your catering needs and we'll create a custom menu that will delight your guests.
                </p>
                <Button variant="accent" href="/contact">
                  Request Catering Quote
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Events;
