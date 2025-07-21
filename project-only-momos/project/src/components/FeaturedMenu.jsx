import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';

const FeaturedMenu = ({ featuredMenuItems }) => {
  return (
    <section className="page-section bg-light-yellow">
      <Container>
        <SectionTitle 
          title="Our Featured Momos" 
          subtitle="Discover our most popular handcrafted dumplings"
        />
        <Row>
          {featuredMenuItems.map(item => (
            <Col md={6} lg={4} key={item.id} className="mb-4">
              <MenuItem 
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                isVegetarian={item.isVegetarian}
                isSpicy={item.isSpicy}
                isNew={item.isNew}
                isCold={item.isCold}
              />
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button variant="accent" href="/menu" size="lg" className="d-inline-flex align-items-center">
            View Full Menu <ArrowRight size={20} className="ms-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedMenu;
