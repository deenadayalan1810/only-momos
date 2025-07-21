import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import HeroSection from '../components/HeroSection';
import HeroCarousel from '../components/HeroCarousel';
import SectionTitle from '../components/SectionTitle';
import Counter from '../components/Counter';
import Testimonial from '../components/Testimonial';
// import MenuItem from '../components/MenuItem';
import { Star, Clock, MapPin } from 'lucide-react';
import FeaturedMenu from '../components/FeaturedMenu';
import panfried from '../images/panfried.jpg';
import vegmomo from '../images/veg.jpg';
import sizling from '../images/sizlingmomo.jpg';

const Home = () => {
  const featuredMenuItems = [
    {
      id: 1,
      image: panfried,
      title: "Fish Pan Fried Momos",
      description: "Crispy pan-fried momos filled with flavorful spiced fish, served with tangy chutney.",
      price: "₹140",
      isNew: true
    },
    {
      id: 2,
      image: vegmomo,
      title: "Vegetable Momos",
      description: "Steamed dumplings filled with a mix of fresh vegetables, garlic, and ginger.",
      price: "₹89",
      isVegetarian: true
    },
    {
      id: 3,
      image: sizling,
      title: "Sizzling Browniee",
      description: "Warm chocolate brownie topped with vanilla ice cream and sizzling hot chocolate sauce",
      price: "₹180",
      isCold: true
    }
  ];

  return (
    <>
      {/* <HeroSection
        title="Experience the Taste of Authentic Momos"
        subtitle="Hand-crafted Himalayan dumplings made fresh daily using traditional recipes"
        backgroundImage="https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        buttonText="View Our Menu"
        buttonLink="/menu"
      /> */}
      <HeroCarousel />

      {/* About Section */}
      <Counter />

      {/* Featured Menu Section */}
      <FeaturedMenu featuredMenuItems={featuredMenuItems} />

      {/* Features Section */}
      <section className="page-section">
        <Container>
          <SectionTitle
            title="Why Choose Only Momos"
            subtitle="What makes our momos special"
          />
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <Card className="h-100 text-center p-4 border-0 shadow-sm" style={{ backgroundColor: '#f4c70c' }}>
                <div className="mb-3 text-center">
                  <Star size={48} color="#dd3807" strokeWidth={1.5} />
                </div>
                <Card.Body>
                  <Card.Title>Authentic Recipes</Card.Title>
                  <Card.Text>
                    Our recipes have been passed down through generations,
                    preserving the authentic taste of Himalayan momos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <Card className="h-100 text-center p-4 border-0 shadow-sm" style={{ backgroundColor: '#f4c70c' }}>
                <div className="mb-3 text-center">
                  <Clock size={48} color="#dd3807" strokeWidth={1.5} />
                </div>
                <Card.Body>
                  <Card.Title>Freshly Made Daily</Card.Title>
                  <Card.Text>
                    We prepare our momos fresh every day, using locally sourced
                    ingredients to ensure the best quality and taste.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center p-4 border-0 shadow-sm" style={{ backgroundColor: '#f4c70c' }}>
                <div className="mb-3 text-center">
                  <MapPin size={48} color="#dd3807" strokeWidth={1.5} />
                </div>
                <Card.Body>
                  <Card.Title>Warm Atmosphere</Card.Title>
                  <Card.Text>
                    Experience the warmth of Himalayan hospitality in our
                    cozy restaurant designed to make you feel at home.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <Testimonial /> */}

      {/* CTA Section */}
      <section
        className="py-5"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }}
        ></div>
        <Container className="position-relative">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="text-white mb-4">Ready to Experience Our Momos?</h2>
              <p className="text-white-50 mb-4">
                Join us for a memorable dining experience or order online for delivery or pickup.
              </p>
              <div>
                <Button variant="primary" href="/contact" size="lg" className="me-3 mb-3 mb-md-0">
                  Make a Reservation
                </Button>
                <Button variant="outline-light" href="/menu" size="lg">
                  Order Online
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
