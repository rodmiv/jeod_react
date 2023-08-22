import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Image from 'react-bootstrap/Image';
//import Jeod from "../Images/Jeod.svg";
//import logo from "../Images/Jeod.svg";

function MyNavbar() {
    return (
        <Navbar className="navbar" expand="lg" >
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">
                    Jessy & Rod
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="nav-links">
                    <Nav className="me-auto ">
                        <Nav.Link href="#home" className="nav-text">Evento</Nav.Link>
                        <Nav.Link href="#link" className="nav-text">Lugar </Nav.Link>
                        <NavDropdown title="Alojamiento" id="basic-nav-dropdown" className="nav-text">
                            <NavDropdown.Item href="#action/3.1" className="nav-text">Hoteles</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className="nav-text">AIRBNBS</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home" className="nav-text">Regalos</Nav.Link>
                        <Nav.Link href="#link" className="nav-text">Confirmar </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;