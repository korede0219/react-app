import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from 'react';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
        <Container>
          <Navbar.Brand href="#home">AnimeZone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Trending</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Top Rated</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Genres</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h1 className="text-center mb-4">Popular Anime</h1>
        <Row className="g-4">
          <Col md={4}>
            <Card  className="anime-card">
              <Card.Img variant="top" src="https://img.flawlessfiles.com/_r/300x400/100/82/40/82402f796b7d84d7071ab1e03ff7747a/82402f796b7d84d7071ab1e03ff7747a.jpg" />
              <Card.Body>
                <Card.Title>Jujutsu Kaisen</Card.Title>
                <Card.Text>
                  Paranormal battles and curses await Yuuji Itadori after a cursed item changes his life forever.
                </Card.Text>
                <Button variant="primary">Watch</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="anime-card">
              <Card.Img variant="top" src="https://img.flawlessfiles.com/_r/300x400/100/bc/d8/bcd84731a3eda4f4a306250769675065/bcd84731a3eda4f4a306250769675065.jpg" />
              <Card.Body>
                <Card.Title>One Piece</Card.Title>
                <Card.Text>
                  Join Luffy and his pirate crew in search of the ultimate treasure that could make him the Pirate King.
                </Card.Text>
                <Button variant="primary">Watch</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="anime-card">
              <Card.Img variant="top" src="https://img.flawlessfiles.com/_r/300x400/100/2c/be/2cbe94bcbf18f0f3c205325d4e234d16/2cbe94bcbf18f0f3c205325d4e234d16.jpg" />
              <Card.Body>
                <Card.Title>Dragon Ball Daima</Card.Title>
                <Card.Text>
                  Goku faces new demonic threats in a fresh battle following the defeat of Majin Buu.
                </Card.Text>
                <Button variant="primary">Watch</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
