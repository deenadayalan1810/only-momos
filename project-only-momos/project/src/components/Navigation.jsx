import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logo from '../only-momos.jpg';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={scrolled ? 'py-2' : 'py-2'}
      style={{
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <Container>
        {/* <Navbar.Brand as={NavLink} to="/" style={{ color: '#FFA000', fontWeight: 700 }}>
          Only Momose
        </Navbar.Brand> */}
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ height: '60px', objectFit: 'contain', borderRadius: '50px', border: '2px solid red' }}
          />{' '}
          <span style={{ color: 'rgb(221 56 7)', fontWeight: 700, position: 'relative', top: '10px', fontSize: '45px' }}>
            nly Momos
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          style={{ border: 'none' }}
        >
          <Menu size={24} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeNavbar}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeNavbar}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/menu"
              className={location.pathname === '/menu' ? 'active' : ''}
              onClick={closeNavbar}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/events"
              className={location.pathname === '/events' ? 'active' : ''}
              onClick={closeNavbar}
            >
              Events
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={closeNavbar}
            >
              Contact
            </Nav.Link>

            {/* <Nav.Link
              as={NavLink}
              to="/contactDemo"
              className={location.pathname === '/contactDemo' ? 'active' : ''}
              onClick={closeNavbar}
            >
              Contact2
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
