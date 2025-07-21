import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EventCard = ({ image, title, date, description, link }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <div className="mb-2">
          <small className="text-muted">{date}</small>
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {link && (
          <Button 
            variant="outline-primary" 
            href={link}
            className="mt-2"
          >
            Learn More
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default EventCard;
