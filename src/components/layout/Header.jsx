import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Button, Col, Container, Nav, Navbar, Form } from "react-bootstrap";
import Evelogo from "../../assets/img/eve_logo.png";

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Col lg="3">
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt="logo"
                            src={Evelogo}
                            width="60"
                            height="40"
                            className="d-inline-block align-top"
                        />
                        KAE-DashB (wip)
                    </Navbar.Brand>
                </Col>

                <Col>
                    <Nav className="me-auto">
                        <h3 className="text-warning">headerTitle</h3>
                        <Nav.Link as={Link} to="/manageTask">
                            Gérer les tâches
                        </Nav.Link>
                    </Nav>
                </Col>

                <Col lg="1">
                    <Form inline>
                        <Form.Control
                            type="text"
                            placeholder="Tâche à rechercher"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-light">Rechercher</Button>
                    </Form>
                </Col>
            </Container>
        </Navbar>
    );
}
