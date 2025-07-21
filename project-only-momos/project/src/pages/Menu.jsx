import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import MenuItem from '../components/MenuItem';
import checkenStearm from '../images/checken-momo.avif'
import mixvegSt from '../images/mixed-veg.jpeg'
import pannerSt from '../images/panner-momo.webp'
import mushroommomo from '../images/mushroom-momo.png'
import fishSt from '../images/fish-momo.jfif'
import prawnSt from '../images/prawn-momo.jfif'
import momocollection from '../images/momo-collection.jpeg'

const Menu = () => {
  const [activeKey, setActiveKey] = useState('all');

  const menuCategories = [
    { id: 'all', name: 'All' },
    { id: 'steamed', name: 'Steamed Momos' },
    { id: 'fried', name: 'Fried Momos' },
    { id: 'soup', name: 'Soup & Maggi' },
    { id: 'PanFried', name: 'Pan Fried Momos' },
    { id: 'specials', name: "Chef's Specials" }
  ];

  const menuItems = [
    {
      id: 1,
      category: 'steamed',
      image: checkenStearm,
      title: "Classic Chicken Momos",
      description: "Traditional steamed momos filled with spiced minced chicken and served with tomato chutney.",
      price: "$8.99"
    },
    {
      id: 2,
      category: 'steamed',
      image: mixvegSt,
      title: "Vegetable Momos",
      description: "Steamed dumplings filled with a mix of fresh vegetables, garlic, and ginger.",
      price: "$7.99",
      isVegetarian: true
    },
    {
      id: 3,
      category: 'fried',
      image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Chili Momos",
      description: "Fried momos tossed in a spicy chili sauce with bell peppers and onions.",
      price: "$9.99",
      isSpicy: true
    },
    {
      id: 4,
      category: 'soup',
      image: "https://images.pexels.com/photos/5175537/pexels-photo-5175537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Jhol Momos",
      description: "Steamed momos served in a flavorful broth with tomatoes, sesame, and timur.",
      price: "$10.99"
    },
    {
      id: 5,
      category: 'specials',
      image: "https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Tandoori Momos",
      description: "Momos marinated in tandoori spices, grilled in clay oven and served with mint chutney.",
      price: "$12.99",
      isNew: true,
      isSpicy: true
    },
    {
      id: 6,
      category: 'steamed',
      image: 'https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/992f44ea-c1d6-4491-84be-b84edd1e7e3a.png',
      title: "Mushroom Steam Momos",
      description: "Our freshly steamed mushroom momos—juicy dumplings bursting with savory mushroom filling, served hot and delicious!",
      price: "$9.99",
      isVegetarian: true
    },
    {
      id: 7,
      category: 'fried',
      image: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Crispy Pork Momos",
      description: "Crispy fried momos filled with seasoned ground pork and served with spicy dipping sauce.",
      price: "$10.99"
    },
    {
      id: 8,
      category: 'soup',
      image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Clear Soup Momos",
      description: "Delicate chicken momos served in a light, clear broth with spring onions and cilantro.",
      price: "$11.99"
    },
    {
      id: 9,
      category: 'specials',
      image: "https://images.pexels.com/photos/4224305/pexels-photo-4224305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Chocolate Momos",
      description: "Sweet momos filled with chocolate and served with a side of vanilla ice cream.",
      price: "$8.99",
      isVegetarian: true,
      isNew: true
    },
    {
      id: 10,
      category: 'steamed',
      image: pannerSt,
      title: "Panner Steam Momos",
      description: "Steamed dumplings filled with a mix of fresh vegetables, garlic, and ginger.",
      price: "$7.99",
      isVegetarian: true
    },
    // {
    //   id: 11,
    //   category: 'steamed',
    //   image: mushSt,
    //   title: "Mushroom Steam Momos",
    //   description: "Steamed dumplings filled with a mix of fresh vegetables, garlic, and ginger.",
    //   price: "$7.99",
    //   isVegetarian: true
    // },
    {
      id: 11,
      category: 'steamed',
      image: fishSt,
      title: "Fish Steam Momos",
      description: "Steamed dumplings filled with a mix of fresh vegetables, garlic, and ginger.",
      price: "$7.99",
      isVegetarian: false
    },
    {
      id: 12,
      category: 'steamed',
      image: prawnSt,
      title: "Prawn Steam Momos",
      description: "Steamed dumplings filled with a mix of fresh vegetables, garlic, and ginger.",
      price: "$7.99",
      isVegetarian: false
    }
  ];

  const filteredItems = activeKey === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeKey);

  return (
    <>
      <HeroSection
        title="Our Menu"
        subtitle="Explore our wide variety of handcrafted momos and specialty dishes"
        backgroundImage= {momocollection}
      />

      <section className="page-section">
        <Container>
          <SectionTitle 
            title="Explore Our Momos" 
            subtitle="Each momo is handcrafted with love and attention to detail"
          />

          <Tab.Container 
            id="menu-tabs" 
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k || 'all')}
          >
            <Row className="mb-5">
              <Col xs={12}>
                <Nav 
                  variant="pills" 
                  className="justify-content-center flex-wrap"
                >
                  {menuCategories.map(category => (
                    <Nav.Item key={category.id}>
                      <Nav.Link 
                        eventKey={category.id}
                        className="mx-2 mb-2"
                      >
                        {category.name}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
            </Row>

            <Tab.Content>
              <Tab.Pane eventKey={activeKey}>
                <Row>
                  {filteredItems.map(item => (
                    <Col lg={4} md={6} key={item.id} className="mb-4">
                      <MenuItem
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        isVegetarian={item.isVegetarian}
                        isSpicy={item.isSpicy}
                        isNew={item.isNew}
                      />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>

      {/* Additional Info Section */}
      <section className="page-section bg-light-yellow">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h3 className="mb-4">Special Dietary Requirements</h3>
              <p className="mb-4">
                We offer a variety of vegetarian options and can accommodate most dietary restrictions. 
                Please inform our staff about any allergies or special requirements when placing your order.
              </p>
              <p className="mb-5">
                All our momos are made fresh to order. During busy periods, please allow extra time for preparation.
              </p>
              <div className="d-flex justify-content-center">
                <div className="me-4 text-center">
                  <span className="d-inline-block p-2 rounded-circle bg-success mb-2" style={{ width: '20px', height: '20px' }}></span>
                  <p>Vegetarian</p>
                </div>
                <div className="me-4 text-center">
                  <span className="d-inline-block p-2 rounded-circle bg-danger mb-2" style={{ width: '20px', height: '20px' }}></span>
                  <p>Spicy</p>
                </div>
                <div className="text-center">
                  <span className="d-inline-block p-2 rounded-circle bg-warning mb-2" style={{ width: '20px', height: '20px' }}></span>
                  <p>New Item</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Menu;
