import React, { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import Lottie from 'react-lottie';
import bell from '../json/bell.json'


const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleClose = () => setShowMenu(false);
    const handleShow = () => setShowMenu(true);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bell,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Header</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={handleShow}>
                            <Lottie
                                options={defaultOptions}
                                height={50}
                                width={50}
                            />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Offcanvas show={showMenu} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* Add your menu items here */}
                    <Nav className="flex-column">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header;
