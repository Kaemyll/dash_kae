import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import TodoColumn from "./components/columns/TodoColumn";
import DoneColumn from "./components/columns/DoneColumn";
import InProgressColumn from "./components/columns/InProgressColumn";
import PriorityColumn from "./components/columns/PriorityColumn";
import Header from "./components/layout/Header";

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Header />
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
            </Container>
        );
    }
}
