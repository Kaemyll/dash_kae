import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import DoneColumn from "../columns/DoneColumn";
import TodoColumn from "../columns/TodoColumn";
import InProgressColumn from "../columns/InProgressColumn";
import PriorityColumn from "../columns/PriorityColumn";

export default function Main() {
    return (
        <div>
            <Container>
                <Row>
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
        </div>
    );
}
