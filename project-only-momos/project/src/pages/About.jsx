import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Users, Award, History } from 'lucide-react';

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
        backgroundImage="https://images.pexels.com/photos/6646351/pexels-photo-6646351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Our Story Section */}
      <section className="page-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="https://images.pexels.com/photos/7363665/pexels-photo-7363665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Only Momos Restaurant" 
                className="img-fluid rounded shadow-lg"
              />
            </Col>
            <Col lg={6}>
              <div className="ps-lg-4">
                <h2 className="mb-4">The Only Momos Story</h2>
                <p className="lead mb-4">
                  From a small family kitchen in Nepal to your neighborhood.
                </p>
                <p className="mb-4">
                  Only Momos began with a simple mission: to bring the authentic taste of Himalayan momos to food lovers everywhere. Our founder, Anish Sharma, grew up watching his grandmother prepare these delicious dumplings for family gatherings in Nepal.
                </p>
                <p className="mb-4">
                  After moving to the United States, Anish found himself longing for the taste of home. He began making momos for friends and family, who quickly fell in love with these flavorful dumplings. Encouraged by their enthusiasm, he decided to share his family's recipes with a wider audience.
                </p>
                <p>
                  In 2018, Only Momos opened its doors, offering handcrafted dumplings made fresh daily using traditional techniques and the finest ingredients. Today, we continue to honor those family recipes while creating new and exciting flavors that celebrate the art of momo-making.
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
