import React from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import './Hero.css';
import slider1 from '../images/slider1.webp';
import slider2 from '../images/slider2.avif';
import slider3 from '../images/newslider3.jpeg';

const slides = [
  {
    title: 'Experience the Taste of Authentic Momos',
    subtitle: 'Hand-crafted Himalayan dumplings made fresh daily using traditional recipes',
    backgroundImage: slider3,
    buttonText: 'View Our Menu',
    buttonLink: '/menu',
  },
  {
    title: 'Spice Up Your Day!',
    subtitle: 'Try our spicy stream momos that will tingle your taste buds.',
    backgroundImage: slider1,
    buttonText: 'Order Now',
    buttonLink: '/order',
  },
  {
    title: 'Made with Loves',
    subtitle: 'Every momo is prepared with care, just like home.',
    backgroundImage: slider2,
    buttonText: 'Visit Us',
    buttonLink: '/contact',
  },
];

const HeroCarousel = () => {
  return (
    <Carousel controls={true} indicators={false} fade interval={3000}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div
            className="hero-section"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              color: 'white'
            }}
          >
            <div
              className="hero-overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }}
            ></div>

            <Container
              className="hero-content"
              style={{
                position: 'relative',
                zIndex: 2,
                top: '10%'
              }}
            >
              <Row className="justify-content-center text-center">
                <Col md={10} lg={8}>
                  <h1 className="display-4 fw-bold mb-4">{slide.title}</h1>
                  <p className="lead mb-4">{slide.subtitle}</p>
                  {slide.buttonText && slide.buttonLink && (
                    <Button
                      variant={slide.buttonVariant || 'primary'}
                      href={slide.buttonLink}
                      size="lg"
                    >
                      {slide.buttonText}
                    </Button>
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
