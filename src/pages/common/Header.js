import React, {Component} from 'react';
import { Container, Row, Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <Container>
            <Row>
                <Navbar className="col-12" bg="light" expand="lg">
                <Navbar.Brand href="/" className="logo"><b>PRACTICE TO PERFECT</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end" style={{cssFloat: 'right' }}>
                    <Nav
                    className="right my-2 my-lg-0"
                    style={{ maxHeight: '100px', cssFloat: 'right' }}
                    navbarScroll
                    >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="about">About Us</Nav.Link>
                    <Nav.Link href="blog">Blog</Nav.Link>

                    <NavDropdown title="Services" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Item 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Item 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">Item 3</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="career">Career</Nav.Link>

                    <Nav.Link href="contact">Contact Us</Nav.Link>


                 

                    </Nav>

                 
                 

                </Navbar.Collapse>
                </Navbar>
            </Row>
            </Container>
        )
    }
}

export default Header
