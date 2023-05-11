import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Footer() {
    return (
        <div>
            <Container fluid className="bg-dark fixed-bottom">
                <Row className="mr-auto">
                    <Col></Col>
                    <Col className="text-center">
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className="text-light"
                        >
                            by Kaemyll &copy; {new Date().getFullYear()}
                        </Nav.Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}
