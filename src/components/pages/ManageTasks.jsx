import React from "react";
import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";

export default function ManageTask() {
    return (
        <div>
            <h2>Gestion des tâches</h2>
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
        </div>
    );
}
