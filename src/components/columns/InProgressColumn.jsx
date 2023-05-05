import React from "react";
import { Card } from "react-bootstrap";

export default class InProgressColumn extends React.Component {
    render() {
        return (
            <div>
                <h2 className="text-center bg-success text-light">En cours</h2>
                <Card>
                    <Card.Body>
                        <Card.Title>Tâche 4</Card.Title>
                        <Card.Text>
                            Description de la tâche 4 à réaliser
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Tâche 5</Card.Title>
                        <Card.Text>
                            Description de la tâche 5 à réaliser
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Tâche 6</Card.Title>
                        <Card.Text>
                            Description de la tâche 6 à réaliser
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
