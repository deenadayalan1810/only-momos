import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const MenuItem = ({
  image,
  title,
  description,
  price,
  isVegetarian = false,
  isSpicy = false,
  isNew = false,
  isCold = false,
}) => {
  return (
    <Card className="menu-item h-100">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body className="menu-item-info">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title className="mb-0">{title}</Card.Title>
          <span className="fw-bold" style={{ color: 'var(--accent)' }}>{price}</span>
        </div>
        <Card.Text>{description}</Card.Text>
        <div className="mt-3">
          {isVegetarian && (
            <Badge bg="success" className="me-2">Vegetarian</Badge>
          )}
          {isSpicy && (
            <Badge bg="danger" className="me-2">Spicy</Badge>
          )}
          {isNew && (
            <Badge bg="warning" text="dark" className="me-2">New</Badge>
          )}
          {isCold && (
            <Badge bg="primary" text="dark" className="me-2">Hot & Sweet</Badge>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default MenuItem;
