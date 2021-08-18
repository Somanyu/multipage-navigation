import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import { Accordion, Tabs, Tab, Row, Button, Col, Nav, Form, Card, Container, Alert } from "react-bootstrap";
import './App.css';
import NIKE from './NIKE.png';



class About extends Component {
    render() {
        return (
            <div id="about">
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7" style={{ paddingTop: "5px" }}>
                                <h1 style={{ fontFamily: "Source Sans Pro, sans-serif", fontStyle: "italic", color: "#f85327", fontWeight: "bold", fontSize: "39.6px" }}>Our Mission</h1>
                                <hr style={{ color: "#f85327", width: "8rem" }} />
                                <p style={{ fontFamily: "Roboto, sans-serif", fontStyle: "italic", fontSize: "17px" }}>Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sports innovations, by making our products more sustainability, by building a creative and diverse global team and by making a positive impact in communities where we live and work. </p>
                            </div>
                        </div>
                        <div className="row" style={{ height: "450px" }}>
                            <div className="col-md-12 d-lg-flex justify-content-lg-center"><img className="img-fluid" src={NIKE} width="540" height="540" alt="orange_shoe" /></div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-8 offset-lg-4" style={{ textAlign: "right", color: "rgb(33, 37, 41)" }}>
                                <div>
                                    <h1 style={{ fontFamily: "Source Sans Pro, sans-serif", fontStyle: "italic", color: "#f85327", fontWeight: "bold", fontSize: "39.6px" }}>What is Nike Air ?</h1>
                                </div>
                                <p style={{ fontFamily: "Roboto, sans-serif", fontStyle: "italic", fontSize: "17px" }}>Nike Air is our iconic innovation that uses pressurised air in a durable, flexible membrane to provide lightweight cushioning. The air compresses on impact and then immediately returns to it original shape and volume, ready for the next impact. We&#39;ve been continuously evolving and improving it ever since.   </p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer-dark" style={{ background: "#000000", paddingTop: "35px", paddingBottom: "35px", marginTop: "20px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3 style={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold", color: "#ffffff" }}>GET HELP</h3>
                                <ul>
                                    <li>
                                        <a href="#home">Order status</a>
                                    </li>
                                    <li>
                                        <a href="#home">Delivery</a>
                                    </li>
                                    <li>
                                        <a href="#home">Returns</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3 style={{ fontFamily: "Roboto, sans-serif" }}>ABOUT NIKE</h3>
                                <ul>
                                    <li>
                                        <a href="#home">News</a>
                                    </li>
                                    <li>
                                        <a href="#home">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#home">Investors</a>
                                    </li>
                                    <li>
                                        <a href="#home">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col item social" style={{ marginTop: "25px" }}>
                                <a href="#home" style={{ background: "#ffffff" }}>
                                    <i className="fa fa-facebook-f" style={{ color: "#000000" }}></i>
                                </a>
                                <a href="#home" style={{ background: "#ffffff" }}>
                                    <i className="fa fa-twitter" style={{ color: "#000000" }}></i>
                                </a>
                                <a href="#home" style={{ background: "#ffffff" }}>
                                    <i className="fa fa-youtube" style={{ color: "#000000" }}></i>
                                </a>
                                <a href="#home" style={{ background: "#ffffff" }}>
                                    <i className="fa fa-instagram" style={{ color: "#000000" }}></i>
                                </a>
                            </div>
                        </div>
                        <p className="copyright company" style={{ color: "#ffffff" }}>Nike Air © 2021</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default About;