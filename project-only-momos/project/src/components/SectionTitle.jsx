import React from 'react';
import { Row, Col } from 'react-bootstrap';

const SectionTitle = ({ 
  title, 
  subtitle,
  light = false
}) => {
  return (
    <Row className="mb-5 justify-content-center text-center">
      <Col lg={8}>
        <h2 className={`section-title ${light ? 'text-white' : ''}`}>{title}</h2>
        {subtitle && (
          <p className={`lead ${light ? 'text-white-50' : 'text-muted'}`}>
            {subtitle}
          </p>
        )}
      </Col>
    </Row>
  );
};

export default SectionTitle;
