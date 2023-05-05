import React from "react";
import { Card } from "react-bootstrap";

export default class DoneColumn extends React.Component {
    render() {
        return (
            <div>
                <h2 className="text-center bg-info">Terminé</h2>
                <Card>
                    <Card.Body>
                        <Card.Title>Tâche 0</Card.Title>
                        <Card.Text>
                            Description de la tâche 0 à réaliser
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
