import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import { Accordion, Tabs, Tab, Modal, Row, Button, Col, Nav, Form, Card, Container, Alert } from "react-bootstrap";
import './App.css';
import shoe from './shoe.png';


class Home extends Component {
    render() {
        return (
            <div id="home">
                {/* <Container>
                    <Alert variant="success">
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Aww yeah, you successfully read this important alert message. This example
                            text is going to run a bit longer so that you can see how spacing within an
                            alert works with this kind of content.
                        </p>
                        <hr />
                        <p className="mb-0">
                            Whenever you need to, be sure to use margin utilities to keep things nice
                            and tidy.
                        </p>
                    </Alert>
                </Container> */}
                <div className="d-flex justify-content-lg-center align-items-lg-center" style={{ height: "39.7rem" }}>
                    <div className="container" style={{ paddingTop: "12px", paddingBottom: "12px" }}>
                        <div className="row">
                            <div className="col d-lg-flex justify-content-lg-center align-items-lg-cemter" style={{ marginTop: "6rem" }}>
                                <div>
                                    <p style={{ height: "13px", color: "#5eddc1", fontFamily: "Source Sans Pro, sans-serif", marginLeft: "26px", fontWeight: "bold" }}>NIKE Air 20S</p>
                                    <h1 id="titleh1" style={{ fontSize: "4.8rem", width: "27.75rem", fontWeight: "bold", fontStyle: "italic", textShadow: "3px 1px #5eddc1", textAlign: "left", height: "283px", marginTop: "15px" }}>GET A GOOD DOSE OF SPEED!</h1>
                                    <p style={{ fontFamily: "Roboto Condensed, sans-serif", fontStyle: "italic", color: "#5eddc1", fontSize: "15px", fontWeight: "bold", textAlign: "justify", paddingLeft: "12px" }}>Nike Air is our iconic innovation that uses <br /> pressurised air in a durable, flexible membrane to provide lightweight<br /> cushoining. More durable and more lightweight</p>
                                    {/* <div className="d-flex d-lg-flex justify-content-around" style={{padding:"52px"}}>
                                        <a className="btn" role="button" href="./About" style={{fontFamily:"Roboto Condensed, sans-serif", fontStyle:"italic", borderRadius:"0px", border:"2px solid #5eddc1", color:"#FFFFFF", background:"#5eddc1", boxShadow:"2px 2px #000000"}}>Know More</a>
                                        <a className="btn" role="button" href="#/Product" style={{fontFamily:"Roboto Condensed, sans-serif", fontStyle:"italic", borderRadius:"0px", border:"2px solid #5eddc1", color:"#FFFFFF", background:"#5eddc1", boxShadow:"2px 2px #000000"}}>Shop Now</a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-center">
                                    <img src={shoe} alt="shoe" style={{ width: "33.438rem", boxShadow: "7px 0px #5eddc1, 0px 7px 0px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;