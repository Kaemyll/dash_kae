import React from "react";
import { Router, Routes, Route } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";

import TodoColumn from "./components/columns/TodoColumn";
import DoneColumn from "./components/columns/DoneColumn";
import InProgressColumn from "./components/columns/InProgressColumn";
import PriorityColumn from "./components/columns/PriorityColumn";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function App() {
    return (
        // <Router>
        <Container>
            <Row>
                <Header />
                {/* <Routes>
                        <Route exact path="/"></Route>
                    </Routes> */}
            </Row>
            <Row className="my-3">
                <Col>
                    <DoneColumn />
                </Col>
                <Col>
                    <TodoColumn />
                </Col>
                <Col>
                    <InProgressColumn />
                </Col>
                <Col>
                    <PriorityColumn />
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
        // </Router>
    );
}
