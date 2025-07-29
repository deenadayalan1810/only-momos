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
import vegFried from '../images/fried-veg-momo.jpg'
import chikenFried from '../images/fried-momos-chiken.jpeg'
import paneerFried from '../images/paneer-fried-momos.webp'
import mushFried from '../images/mushroom-fried-momo.avif'
import fishFried from '../images/fish-fried-momo.jpg'
import prawnFried from '../images/prawn-fried-momo.jpg'
import schezwanFried from '../images/schezwan-pan-fried.jpeg'
import vegSoup from '../images/veg-momo-soup.jpg'
import chickenSoup from '../images/chicken-momo-Soup.webp'
import momoMaggi from '../images/momo-maggi.jpg'
import chickenPan from '../images/chicken-pan-fry.png'
import vegPan from '../images/veg-pan-fry.jpeg'
import schezwanPan from '../images/schezwan-chi-pan.jpg'
import nachos from '../images/nachos.jpg'
import nuggets from '../images/nuggets.avif'
import burger from '../images/momo-burger.webp'
import sandwich from '../images/momo-sandwich.webp'
import breadOmelette from '../images/bread-omelette.jpeg'
import frenchFry from '../images/french-fry.jpg'
import momoRoll from '../images/momo-roll.jpg'
import blueMojito from '../images/blue-mojito.webp'
import greenMogito from '../images/green-mojito.webp'
import lemonMojito from '../images/lemon-mint.jpg'
import watermelonMojito from '../images/watermelon-mojito.jpg'

const Menu = () => {
  const [activeKey, setActiveKey] = useState('all');

  const menuCategories = [
    { id: 'all', name: 'All' },
    { id: 'steamed', name: 'Steamed Momos' },
    { id: 'fried', name: 'Fried Momos' },
    { id: 'soup', name: 'Soup & Maggi' },
    { id: 'PanFried', name: 'Pan Fried Momos' },
    { id: 'specials', name: "Lite Bites & Drinks" }
  ];

  const menuItems = [
    {
      id: 1,
      category: 'steamed',
      image: checkenStearm,
      title: "Classic Chicken Momos",
      description: "Traditional steamed momos filled with spiced minced chicken and served with tomato chutney.",
      price: "$99"
    },
    {
      id: 2,
      category: 'steamed',
      image: mixvegSt,
      title: "Vegetable Momos",
      description: "Soft and healthy dumplings filled with a flavorful mix of spiced vegetables.",
      price: "₹89",
      isVegetarian: true
    },
    {
      id: 3,
      category: 'fried',
      image: vegFried,
      title: "Veg Fried Momos",
      description: "Veg fried momos are crispy outside due to deep frying and delicious inside with their juicy, spiced vegetable filling.",
      price: "₹99",
      isVegetarian: true
    },
    {
      id: 4,
      category: 'soup',
      image: vegSoup,
      title: "Veg Momo Soup",
      description: "Steamed veg momos served in a warm, flavorful vegetable broth—light, healthy, and satisfying.",
      price: "₹109"
    },
    {
      id: 6,
      category: 'steamed',
      image: mushroommomo,
      title: "Mushroom Steam Momos",
      description: "Our freshly steamed mushroom momos—juicy dumplings bursting with savory mushroom filling, served hot and delicious!",
      price: "₹109",
      isVegetarian: true
    },
    {
      id: 7,
      category: 'fried',
      image: chikenFried,
      title: "Chicken Fried Momos",
      description: "Crispy golden fried dumplings stuffed with juicy, spiced chicken filling.",
      price: "₹10.99"
    },
    {
      id: 8,
      category: 'soup',
      image: chickenSoup,
      title: "Chicken Momo Soup",
      description: "Soft chicken momos dunked in a rich, spicy chicken soup that’s perfect for a cozy meal.",
      price: "₹119"
    },
    {
      id: 9,
      category: 'specials',
      image: frenchFry,
      title: "French Fry",
      description: "Golden, crispy fries served hot with a dash of salt and optional dips.",
      price: "₹50",
      isNew: true
    },
    {
      id: 10,
      category: 'steamed',
      image: pannerSt,
      title: "Panner Steam Momos",
      description: "Fluffy momos stuffed with mildly spiced paneer, perfect for a light yet satisfying bite.",
      price: "₹109",
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
      description: "Tender fish-filled momos steamed to perfection with subtle herbs and spices.",
      price: "₹119",
      isVegetarian: false
    },
    {
      id: 12,
      category: 'steamed',
      image: prawnSt,
      title: "Prawn Steam Momos",
      description: "Delicate dumplings loaded with seasoned prawn filling, soft and bursting with flavor.",
      price: "₹119",
      isVegetarian: false
    },
    {
      id: 13,
      category: 'fried',
      image: paneerFried,
      title: "Paneer Fried Momos",
      description: "Crispy paneer-filled momos with a rich and mildly spiced stuffing.",
      price: "₹109",
      isVegetarian: true
    },
    {
      id: 14,
      category: 'fried',
      image: mushFried,
      title: "Mushroom Fried Momos",
      description: "Deep-fried momos filled with savory, seasoned mushroom mix.",
      price: "₹109",
      isVegetarian: true
    },
    {
      id: 15,
      category: 'fried',
      image: fishFried,
      title: "fish Fried Momos",
      description: "Fried to perfection with a deliciously spiced prawn filling.",
      price: "₹119"
    },
    {
      id: 16,
      category: 'fried',
      image: prawnFried,
      title: "Prawn Fried Momos",
      description: "Crisp exterior with a soft and aromatic fish stuffing that melts in your mouth.",
      price: "₹119",
      isSpicy: true
    },
    {
      id: 17,
      category: 'fried',
      image: schezwanFried,
      title: "Schezwan chicken Fried Momos",
      description: "Spicy and flavorful momos tossed in fiery Schezwan sauce with tender chicken filling.",
      price: "₹109",
      isSpicy: true,
      isNonveg: true
    },
    {
      id: 18,
      category: 'soup',
      image: momoMaggi,
      title: "Veg Momo Maggi",
      description: "A delightful fusion of steamed veg momos tossed with spicy, masala-loaded Maggi noodles.",
      price: "₹109"
    },
    {
      id: 19,
      category: 'soup',
      image: momoMaggi,
      title: "Chicken Momo Maggi",
      description: "Juicy chicken momos paired with hot, saucy Maggi for a bold and comforting combo.",
      price: "₹119"
    },
    {
      id: 20,
      category: 'PanFried',
      image: chickenPan,
      title: "Chicken Panfried Momos",
      description: "Crispy-edged momos filled with juicy chicken, pan-seared to golden perfection.",
      price: "₹150",
      isSpicy: true,
      isNonveg: true
    },
    {
      id: 21,
      category: 'PanFried',
      image: vegPan,
      title: "Veg Panfried Momos",
      description: "Deliciously spiced veggie-stuffed momos with a crispy pan-fried twist.",
      price: "₹140",
      isVegetarian:true,
      isSpicy: true
    },
    {
      id: 22,
      category: 'PanFried',
      image: schezwanPan,
      title: "Schezwan Chicken Panfried Momos",
      description: "Momos pan-fried and tossed in bold, spicy Schezwan sauce for an extra kick of flavor.",
      price: "₹150",
      isSpicy: true,
      isNonveg: true
    },
    {
      id: 23,
      category: 'specials',
      image: burger,
      title: "Momo Burger",
      description: "Soft buns filled with crispy momos, fresh veggies, and flavorful sauces for the perfect fusion bite.",
      price: "₹89",
      isVegetarian: true,
      isNonveg: true
    },
    {
      id: 24,
      category: 'specials',
      image: sandwich,
      title: "Momo Sandwich",
      description: "Grilled sandwich layered with juicy momos, spiced stuffing, and creamy spreads for a tasty twist.",
      price: "₹89",
      isVegetarian: true,
      isNonveg: true
    },
    {
      id: 28,
      category: 'specials',
      image: momoRoll,
      title: "Momos Tartila Roll",
      description: "Spiced momos wrapped in a soft roll with crunchy veggies and zesty sauces for a filling street-style treat.",
      price: "₹80",
      isVegetarian: true,
      isNonveg: true
    },
    {
      id: 25,
      category: 'specials',
      image: breadOmelette,
      title: "Bread Omelette",
      description: "Classic street-style bread omelette with fluffy eggs and a hint of masala.",
      price: "₹60"
    },
    {
      id: 26,
      category: 'specials',
      image: nachos,
      title: "Nachos",
      description: "Crunchy corn chips topped with cheesy goodness and spicy seasoning—perfect for snacking.",
      price: "₹80",
      isNew: true
    },
    {
      id: 27,
      category: 'specials',
      image: nuggets,
      title: "Nuggets",
      description: "Crispy golden nuggets with a juicy bite inside—ideal for both kids and adults.",
      price: "₹80",
      isNew: true
    },
    {
      id: 29,
      category: 'specials',
      image: blueMojito,
      title: "Blue Mint Mojito",
      description: "A refreshing blue-hued cooler with mint leaves and lime, perfect for beating the heat.",
      price: "₹60",
      isNew: true
    },
    {
      id: 30,
      category: 'specials',
      image: greenMogito,
      title: "Vergin Mojito",
      description: "A classic non-alcoholic mix of mint, lime, and soda served chilled and fizzy.",
      price: "₹60",
      isNew: true
    },
    {
      id: 31,
      category: 'specials',
      image: watermelonMojito,
      title: "Watermelon Mojito",
      description: "A juicy watermelon twist on the mojito with minty freshness and a fruity punch.",
      price: "₹60",
      isNew: true
    },
    {
      id: 32,
      category: 'specials',
      image: lemonMojito,
      title: "Lemon Mint",
      description: "A zesty and minty cooler bursting with lemony goodness—simple, fresh, and energizing.",
      price: "₹40",
      isNew: true
    },
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
                        isNonveg={item.isNonveg}
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
                <div className="text-center">
                  <span className="d-inline-block p-2 rounded-circle bg-warning mb-2" style={{ width: '20px', height: '20px' }}></span>
                  <p>Non Veg</p>
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
