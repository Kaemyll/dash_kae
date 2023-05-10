import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./styles/index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

import TodoColumn from "./components/columns/TodoColumn";
import DoneColumn from "./components/columns/DoneColumn";
import InProgressColumn from "./components/columns/InProgressColumn";
import PriorityColumn from "./components/columns/PriorityColumn";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home/Home";
import Contact from "./components/pages/Contact";
import AddTask from "./components/tasks/AddTask";
import EditTask from "./components/tasks/EditTask";
import DeleteTask from "./components/tasks/DeleteTask";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Row>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/addTask" element={<AddTask />} />
                    <Route path="/editTask" element={<EditTask />} />
                    <Route path="/deleteTask" element={<DeleteTask />} />
                </Routes>
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
        </Router>
    </React.StrictMode>
);
