import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <div>
            <Container className="bg-dark fixed-bottom">
                <Row className="mr-auto">
                    <Col></Col>
                    <Col className="text-center">
                        <p className="text-light">
                            by Kaemyll &copy; {new Date().getFullYear()}
                        </p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}
