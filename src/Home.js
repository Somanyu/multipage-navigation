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
                <div className="container d-lg-flex justify-content-lg-center align-items-lg-center">
                    <div className="row">
                        <div className="col offset-lg-0 d-lg-flex align-items-lg-center">
                            <div>
                                <p style={{ color: "#5eddc1", fontFamily: "Source Sans Pro, sans-serif", fontWeight: "bold", fontStyle: "italic" }}>NIKE Air 20S</p>
                                <h1 style={{ color: "#212529", fontFamily: "Source Sans Pro, sans-serif", fontStyle: "italic", textShadow: "2px 1px #5eddc1", fontSize: "4rem", fontWeight: "bold" }}>GET A GOOD</h1>
                                <h1 style={{ color: "#212529", fontFamily: "Source Sans Pro, sans-serif", fontWeight: "bold", fontStyle: "italic", textShadow: "2px 0px #5eddc1", fontSize: "4rem" }}>DOSE OF</h1>
                                <h1 style={{ color: "#212529", fontFamily: "Source Sans Pro, sans-serif", fontWeight: "bold", fontStyle: "italic", textShadow: "2px 0px #5eddc1", fontSize: "4rem" }}>SPEED!!</h1>
                                <p style={{ color: "#5eddc1", fontStyle: "italic", fontWeight: "bold" }}>Nike Air is out iconic innovation that uses pressurised air in a durable, flexible membrane to provide lightweight cushioning. More durable and more lightweight.</p>
                            </div>
                        </div>
                        <div className="col-md-6"><img className="img-fluid" src={shoe} alt="shoe" /></div>
                    </div>
                </div>
                        {/* <footer className="footer-dark" style={{background: "#000000", paddingTop: "35px", paddingBottom: "35px"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6 col-md-3 item">
                                        <h3 style={{fontFamily: "Roboto, sans-serif", fontWeight: "bold", color: "#ffffff"}}>GET HELP</h3>
                                    </div>
                                </div>
                            </div>
                        </footer> */}
            </div>

        );
    }
}

export default Home;