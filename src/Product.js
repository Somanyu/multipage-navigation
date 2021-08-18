import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
// eslint-disable-next-line
import { Tabs, Tab, Modal, Row, Button, Col, Nav, Form, Card, Container, Alert } from "react-bootstrap";
import blackshoe from './blackshoe.jpg';
import rainbowshoe from './rainbowshoe.jpg';
import orangeshoe from './orangeshoe.jpg';



class Product extends Component {
    render() {
        return (
            <div justify id="home">
                <section>
                    <div id="w_shop_105" class="carousel slide w_shop_105_indicators w_shop_105_control_button thumb_scroll_x swipe_x ps_easeOutInCubic" data-duration="2000" data-bs-ride="carousel" data-bs-pause="hover" data-bs-interval="3000" style={{ background: "#f3f4f6", paddingTop: "70px" }}>
                        <div class="w_shop_105_main_header">
                            <h1><span style={{ fontStyle: "italic", color: "#000000", fontSize: "40px", textShadow: "2px 0px #5eddc1" }}>Nike</span><span style={{ fontStyle: "italic", color: "#000000", fontSize: "40px", textShadow: "2px 0px #5eddc1" }}><strong>Air 20s</strong></span></h1>
                        </div>
                        <ol class="carousel-indicators">
                            <li class="active" style={{ filter: "blur(0px)", background: "#5eddc1", borderRadius: "0px", width: "18px", height: "6px" }} data-bs-target="#w_shop_105" data-bs-slide-to="0"></li>
                            <li data-bs-target="#w_shop_105" data-bs-slide-to="1" style={{ background: "#5eddc1", width: "18px", height: "6px", borderRadius: "0px" }}></li>
                            <li data-bs-target="#w_shop_105" data-bs-slide-to="2" style={{ background: "#5eddc1", borderRadius: "0px", width: "18px", height: "6px" }}></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active"><img class="img-fluid" src={blackshoe} alt="black-shoe" />
                                <div class="w_shop_105_left_box"><span data-animation="animated fadeInLeft" style={{ fontFamily: "Roboto, sans-serif", color: "#5eddc1", fontSize: "30px" }}>$535.00 <i class="fa fa-tag"></i></span>
                                    <h1 class="left-h" data-animation="animated fadeInLeft" style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "bold", fontSize: "30px" }}>Nike Air 20s <span id="black">Black</span></h1>
                                    <p data-animation="animated fadeInLeft" style={{ fontFamily: "Roboto, sans-serif", fontStyle: "italic", fontSize: "18px" }}>Lorem ipsum dolor sit amet onsectetuer adipiscing elit unc varius facilisis eros in velit quis arcu ornare laoreet urabitur adipiscing luctus sit amet onsectetuer adispiscing.</p><a href="#home" id="orderbutton" data-animation="animated fadeInLeft" style={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold", fontSize: "13px", background: "#5eddc1" }}>order now </a>
                                </div>
                                <div class="w_shop_105_right_box" data-animation="animated fadeInRight">
                                    <ul>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-serif", fontStyle: "italic", fontSize: "16px" }}>Light Weight</li>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-serif", fontStyle: "italic", fontSize: "16px" }}>High Velocity</li>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-serif", fontStyle: "italic", fontSize: "16px" }}>Soft Material</li>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-serif", fontStyle: "italic", fontSize: "16px" }}>Sole Cushioned</li>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-serif", fontStyle: "italic", fontSize: "16px" }}>Sustainable</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="carousel-item"><img class="img-fluid" src={rainbowshoe} alt="rainbow-shoe" />
                                <div class="w_shop_105_left_box"><span data-animation="animated fadeInLeft" style={{ fontFamily: "Roboto, sans-serif", color: "#5eddc1", fontSize: "30px" }}>$535.00 <i class="fa fa-tag"></i></span>
                                    <h1 class="left-h" data-animation="animated fadeInLeft" style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "bold", fontSize: "30px" }}>Nike Air 20s <span id="funky">Funky</span></h1>
                                    <p data-animation="animated fadeInLeft" style={{ fontFamily: "Roboto, sans-serif", fontStyle: "italic", fontSize: "18px" }}>Lorem ipsum dolor sit amet onsectetuer adipiscing elit unc varius facilisis eros in velit quis arcu ornare laoreet urabitur adipiscing luctus sit amet onsectetuer adispiscing.</p><a href="#home" id="orderbutton" data-animation="animated fadeInLeft" style={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold", fontSize: "13px", background: "#5eddc1" }}>order now </a>
                                </div>
                                <div class="w_shop_105_right_box" data-animation="animated fadeInRight">
                                    <ul>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-seri", fontStyle: "italic", fontSize: "16px" }}>Light Weight</li>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-seri", fontStyle: "italic", fontSize: "16px" }}>High Velocity</li>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-seri", fontStyle: "italic", fontSize: "16px" }}>Soft Material</li>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-seri", fontStyle: "italic", fontSize: "16px" }}>Sole Cushioned</li>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-seri", fontStyle: "italic", fontSize: "16px" }}>Sustainable</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="carousel-item"><img class="img-fluid" src={orangeshoe} alt="w_shop_105_03" />
                                <div class="w_shop_105_left_box"><span data-animation="animated fadeInLeft" style={{ fontFamily: "Roboto, sans-serif", color: "#5eddc1", fontSize: "30px" }}>$535.00 <i class="fa fa-tag"></i></span>
                                    <h1 class="left-h" data-animation="animated fadeInLeft" style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "bold", fontSize: "30px" }}>Nike Air 20s <span style={{color: "#f85327"}}>Orange</span></h1>
                                    <p data-animation="animated fadeInLeft" style={{ fontFamily: "Roboto, sans-serif", fontStyle: "italic", fontSize: "18px" }}>Lorem ipsum dolor sit amet onsectetuer adipiscing elit unc varius facilisis eros in velit quis arcu ornare laoreet urabitur adipiscing luctus sit amet onsectetuer adispiscing.</p><a href="#home" id="orderbutton" data-animation="animated fadeInLeft" style={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold", fontSize: "13px", background: "#5eddc1" }}>order now </a>
                                </div>
                                <div class="w_shop_105_right_box" data-animation="animated fadeInRight">
                                    <ul d-none d-sm-block>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-serif", fontStyle: "italic", fontSize: "16px" }}>Light Weight</li>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-serif", fontStyle: "italic", fontSize: "16px" }}>High Velocity</li>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-serif", fontStyle: "italic", fontSize: "16px" }}>Soft Material</li>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-serif", fontStyle: "italic", fontSize: "16px" }}>Sole Cushioned</li>
                                        <li data-animation="animated fadeInRight" style={{ fontFamily: "Source Sans Pro, sans-serif", fontStyle: "italic", fontSize: "16px" }}>Sustainable</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Product;