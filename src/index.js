import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./styles/index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Row } from "react-bootstrap";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home/Home";
import Contact from "./components/pages/Contact";
import ManageTask from "./components/pages/ManageTasks";
import Error from "./components/error/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Row>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/manageTask" element={<ManageTask />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Row>
            <Main />
            <Row>
                <Footer />
            </Row>
        </Router>
    </React.StrictMode>
);
