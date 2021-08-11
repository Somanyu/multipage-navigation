import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// eslint-disable-next-line
import { Tabs, Tab, Modal, Row, Button, Col, Nav, Form, Card, Container, ListGroup, Alert } from "react-bootstrap";


class Contact extends Component {
    render() {
        return (
            <div id="home">
                <Container>
                    <Alert variant="success">
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Aww yeah, you successfully saw this amazing project of mine. This project
                            is going to take a bit longer to be developed so that you can see how amazing
                            this whole product website looks.
                        </p>
                        <hr />
                        <p className="mb-0">
                            Whenever you need to get the code you can visit my <a href="https://github.com/Somanyu">Github</a>.
                        </p>
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default Contact;