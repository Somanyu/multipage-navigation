import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import { Accordion, Tabs, Tab, Modal, Row, Button, Col, Nav, Form, Card, Container, Alert } from "react-bootstrap";
import './App.css';
import NIKE from './NIKE.png';



class About extends Component {
    render() {
        return (
            <div id="about">
                <section>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6"></div>
                                <div className="col-md-6" style={{ textAlign: "right" }}>
                                    <h1 style={{ textAlign: "right", color: "#f85327", fontSize: "2rem", fontStyle: "italic", fontFamily: "Source Sans Pro, sans-serif", fontWeight: "bold" }}>Our Mission</h1>
                                    <div className="d-lg-flex justify-content-lg-end align-items-lg-end" style={{ height: "1.4rem", padding: ".1rem" }}>
                                        <hr style={{ color: "#ff3600", fontWeight: "bold", padding: "1px", width: "8rem" }} />
                                    </div>
                                    <p style={{ fontSize: "1rem", fontStyle: "italic", fontFamily: "Roboto, sans-serif" }}>
                                        Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making our products more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work.
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-lg-flex justify-content-lg-center align-items-lg-center" style={{ height: "380px" }}>
                        <img className="img-fluid d-lg-flex" src={NIKE} style={{ width: "505px" }} alt="orange_shoe" />
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 style={{ color: "#f85327", fontFamily: "Source Sans Pro, sans-serif", fontWeight: "bold", fontStyle: "italic", fontSize: "2rem" }}>What is Nike Air ?</h1>
                                    <hr style={{ color: "#ff3600", fontWeight: "bold", padding: ".1rem", width: "10rem" }} />
                                    <p style={{ fontFamily: "Roboto, sans-serif", fontStyle: "italic", fontSize: "1rem" }}>Nike Air is our iconic innovation that uses pressurised air in a <br/>
                                        durable, flexible membrane to provide lightweight cushioning. The air compresses on impact and then immediately returns to its original shape and volume, ready for the next impact. We've been continuously evolving and improving it ever since.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;