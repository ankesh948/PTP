import React, {Component} from 'react';
import { Container, Row, Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap'
import './Header.scss'


class Footer extends Component {
    
    render() {
        return (
            <Container className="py-5 bg-light">
            <Row>
                <p>Copyright 2021 by Practice to Perfect. All Rights Reserved. Designed By 
                    <a href="https://webcloudindia.com"> WebCloudIndia </a>
                </p>
            </Row>
            </Container>
        )
    }
}

export default Footer   
