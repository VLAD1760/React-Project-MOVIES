/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Nav.css';


export default function NavComponet() {
    return (

        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>Movie Info</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/Home">Home </NavLink>,
                    <NavLink to="/independientes">independientes </NavLink>,
                    <NavLink to="/comedia">Comedia</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}
