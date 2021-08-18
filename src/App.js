import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import { Tabs, Tab, Modal, Row, Button, Col, Nav, Form, Card, Container, Sonnet } from "react-bootstrap";
import Home from "./Home";
import Product from "./Product";
import About from './About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="whole">
        {/* <Container>
        <Row>
          <Col>
            <Tabs defaultActiveKey="Home"
              id="controlled-tab-example">
              <Tab eventKey="home" title="Home">
                <Home />
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Profile />
              </Tab>
              <Tab eventKey="contact" title="Contact">
                <Contact />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container> */}
        <Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">

          <Tab eventKey="home" title="Nike Air 20S">
            <Home />
          </Tab>
          <Tab eventKey="about" title="About Air 20S">
            <About />
          </Tab>
          <Tab eventKey="product" title="Order Now">
            <Product />
          </Tab>
        </Tabs>

      </div>
    );
  }
}

export default App;