import React from "react";
import { Card } from "react-bootstrap";

export default function TodoColumn() {
    return (
        <div>
            <h2 className="text-center bg-secondary text-light">A faire</h2>
            <Card>
                <Card.Body>
                    <Card.Title>Tâche 1</Card.Title>
                    <Card.Text>Description de la tâche 1 à réaliser</Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Tâche 2</Card.Title>
                    <Card.Text>Description de la tâche 2 à réaliser</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
