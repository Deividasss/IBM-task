import { Navbar, Nav, Container } from "react-bootstrap"
import { useState } from "react"
import { Form, Card, Button, Modal } from "react-bootstrap"

const Navigation = () => {
   
    return (
        <Navbar style={{ backgroundColor: '#DEB887' }}>
            <Container>
                <Navbar.Brand>Companies</Navbar.Brand>
            </Container>
        </Navbar >
    )
}

export default Navigation