import { Navbar, Nav, Container } from "react-bootstrap"
import "../nav/Nav.scss"

const Navigation = () => {
   
    return (
        <Navbar className="naviBar">
            <Container>
                <Navbar.Brand>Companies</Navbar.Brand>
            </Container>
        </Navbar >
    )
}

export default Navigation