import React from "react";

import { Link } from "react-router-dom";

import { Button, Container, Nav, Navbar, Form } from "react-bootstrap";
import Evelogo from "../../assets/img/eve_logo.png";

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src={Evelogo}
                        width="60"
                        height="40"
                        className="d-inline-block align-top"
                    />
                    KAE Dashboard (version test)
                </Navbar.Brand>

                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#contact">Me contacter</Nav.Link>
                    <Nav.Link href="#addTask">Ajouter une tâche</Nav.Link>
                    <Nav.Link href="#editTask">Editer une tâche</Nav.Link>
                    <Nav.Link href="#deleteTask">Supprimer une tâche</Nav.Link>
                </Nav>
                <Form inline>
                    <Form.Control
                        type="text"
                        placeholder="Tâche à rechercher"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-light">Rechercher</Button>
                </Form>
            </Container>
        </Navbar>
    );
}
