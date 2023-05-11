import React from "react";
import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";
import { MdAddTask, MdEditSquare, MdDeleteForever } from "react-icons/md";

export default function ManageTask() {
    return (
        <div>
            <h2>Gestion des tâches</h2>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/addTask">
                    <MdAddTask />
                    Ajouter une tâche
                </Nav.Link>
                <Nav.Link as={Link} to="/editTask">
                    <MdEditSquare />
                    Editer une tâche
                </Nav.Link>
                <Nav.Link as={Link} to="/deleteTask">
                    <MdDeleteForever />
                    Supprimer une tâche
                </Nav.Link>
            </Nav>
        </div>
    );
}
