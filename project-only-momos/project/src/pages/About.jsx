import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Users, Award, History } from 'lucide-react';
import aboutShop from '../images/our-momo-shop.png'
import momosoup from '../images/Momo_soup-noodle.jpg'

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Anish Sharma",
      position: "Founder & Head Chef",
      image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Anish grew up in Nepal and learned the art of momo-making from his grandmother. With over 15 years of culinary experience, he founded Only Momos to share authentic Himalayan flavors."
    },
    {
      id: 2,
      name: "Priya Rai",
      position: "Executive Chef",
      image: "https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Priya specializes in creating innovative momo fillings while staying true to traditional techniques. Her vegetarian momos have won multiple local food awards."
    },
    {
      id: 3,
      name: "David Chen",
      position: "Restaurant Manager",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "With a background in hospitality management, David ensures that every guest at Only Momos receives exceptional service and an authentic dining experience."
    }
  ];

  return (
    <>
      <HeroSection
        title="Our Story"
        subtitle="Learn about our journey, our team, and our passion for authentic Himalayan dumplings"
        backgroundImage= {momosoup}
      />

      {/* Our Story Section */}
      <section className="page-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src= {aboutShop} 
                alt="Only Momos Restaurant" 
                className="img-fluid rounded shadow-lg"
              />
            </Col>
            <Col lg={6}>
              <div className="ps-lg-4">
                <h2 className="mb-4">The Only Momos Story</h2>
                <p className="lead mb-4">
                  Come visit us and enjoy Villupuram’s tastiest, freshly handcrafted momos!
                </p>
                <p className="mb-4">
                  Located in the heart of Villupuram, Only Momos opened its doors in 2023, quickly becoming a favorite for those seeking freshly made, authentic-style momos. Every momo is prepared daily using the finest ingredients, ensuring unbeatable taste and quality for every customer.
                </p>
                <p className="mb-4">
                  At Only Momos, we’re passionate about delivering a true taste experience—serving soft, juicy dumplings filled with delicious flavors and made with genuine care. Whether you’re craving a quick snack or planning to share with friends and family, our menu offers something for everyone.
                </p>
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="page-section bg-light-yellow">
        <Container>
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide everything we do"
          />
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <Card className="h-100 text-center p-4 border-0 shadow-sm">
                <div className="mb-3 text-center">
                  <Award size={48} color="#FFC107" strokeWidth={1.5} />
                </div>
                <Card.Body>
                  <Card.Title>Quality</Card.Title>
                  <Card.Text>
                    We never compromise on quality. From selecting the freshest ingredients to 
                    perfecting our cooking techniques, excellence is our standard.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <Card className="h-100 text-center p-4 border-0 shadow-sm">
                <div className="mb-3 text-center">
                  <History size={48} color="#FFC107" strokeWidth={1.5} />
                </div>
                <Card.Body>
                  <Card.Title>Tradition</Card.Title>
                  <Card.Text>
                    We honor traditional Himalayan recipes and techniques while thoughtfully 
                    incorporating modern culinary innovations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center p-4 border-0 shadow-sm">
                <div className="mb-3 text-center">
                  <Users size={48} color="#FFC107" strokeWidth={1.5} />
                </div>
                <Card.Body>
                  <Card.Title>Community</Card.Title>
                  <Card.Text>
                    We believe food brings people together. Our restaurant is a place where 
                    friends and family can gather to share good food and create memories.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="page-section">
        <Container>
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The talented people behind Only Momos"
          />
          <Row>
            {teamMembers.map(member => (
              <Col lg={4} md={6} key={member.id} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Img 
                    variant="top" 
                    src={member.image} 
                    alt={member.name}
                    style={{
                      height: '300px',
                      objectFit: 'cover'
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">{member.position}</Card.Subtitle>
                    <Card.Text>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
