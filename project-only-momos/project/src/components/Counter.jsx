import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Counter.css';
import { ArrowRight } from 'lucide-react';
import newimg from '../images/about-momo.jpeg'

// Sample data
const countersData = [
  { id: 1, start: 100, end: 10000, duration: 1500, label: 'Momos Served!' },
  { id: 2, start: 100, end: 2000, duration: 1500, label: 'Happy Customers!' },
  { id: 3, start: 1, end: 3, duration: 2000, label: 'Experience!' },
  { id: 4, start: 100, end: 100, duration: 1500, label: 'Collabrate Clients!' },
];

function Counter({ start, end, duration }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const startTime = Date.now();
    let timer;

    const step = () => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed >= duration) {
        setCount(end);
        clearInterval(timer);
      } else {
        const progress = elapsed / duration;
        const value = Math.round(start + (end - start) * progress);
        setCount(value);
      }
    };

    timer = setInterval(step, 30);
    return () => clearInterval(timer);
  }, [start, end, duration]);

  return <span className="counter">{count}+</span>;
}

export default function CounterSection() {
  return (
    <section className="page-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div style={{ width: '100%', height: '350px' }}>
              <img 
                src={newimg} 
                alt="About Only Momos" 
                className="img-fluid rounded shadow-lg"
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="ps-lg-4">
              <h2 className="mb-4">Welcome to Only Momos</h2>
              <p className="lead mb-4">
                Where tradition meets taste in every bite of our authentic Himalayan dumplings.
              </p>
              <p className="mb-4">
                At Only Momos, we take pride in serving the most authentic momos outside of the Himalayan region. 
                Our recipes have been passed down through generations, and we use only the freshest ingredients 
                to ensure an unforgettable dining experience.
              </p>
              <Button variant="primary" href="/about" className="mt-2 d-inline-flex align-items-center">
                Learn More About Us <ArrowRight size={18} className="ms-2" />
              </Button>
            </div>
          </Col>
        </Row>

        <div className="box-container mt-5">
          {countersData.map(({ id, start, end, duration, label }) => (
            <div className="box" key={id}>
              <div className="box-inner">
                <Counter start={start} end={end} duration={duration} />
                <p>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
