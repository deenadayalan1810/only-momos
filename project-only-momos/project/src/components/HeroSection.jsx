import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
  buttonVariant = 'primary',
}) => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay"></div>
      <Container className="hero-content">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1 className="display-4 fw-bold mb-4 fade-in">{title}</h1>
            <p className="lead mb-4 slide-up">{subtitle}</p>
            {buttonText && buttonLink && (
              <Button
                variant={buttonVariant}
                href={buttonLink}
                size="lg"
                className="mt-2 slide-up"
                style={{ animationDelay: '0.3s' }}
              >
                {buttonText}
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
