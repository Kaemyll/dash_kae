import React from "react";

import { Link } from "react-router-dom";

import { Button, Container, Nav, Navbar, Form } from "react-bootstrap";
import Evelogo from "../../assets/img/eve_logo.png";

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt="logo"
                        src={Evelogo}
                        width="60"
                        height="40"
                        className="d-inline-block align-top"
                    />
                    KAE Dashboard (version test)
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/addTask">
                        Ajouter une tâche
                    </Nav.Link>
                    <Nav.Link as={Link} to="/editTask">
                        Editer une tâche
                    </Nav.Link>
                    <Nav.Link as={Link} to="/deleteTask">
                        Supprimer une tâche
                    </Nav.Link>
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
