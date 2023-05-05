import React from "react";
import { Card } from "react-bootstrap";

export default class PriorityColumn extends React.Component {
    render() {
        return (
            <div>
                <h2 className="text-center bg-danger text-warning">
                    Prioritaire
                </h2>
                <Card>
                    <Card.Body>
                        <Card.Title>Tâche 3</Card.Title>
                        <Card.Text>
                            Description de la tâche 3 à réaliser
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
