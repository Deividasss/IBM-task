import { Navbar, Nav, Container } from "react-bootstrap"
import "../nav/Nav.scss"

const Navigation = () => {

    return (
        <Navbar className="naviBar">
            <Container>
                <a className="navLink" href="/">
                    <div className="navMain">
                        <img className="navLogo" src="https://rekvizitai.vz.lt/photos/uab_companies_house_uflyw0_1308059421.jpg"></img>
                        <h3 className="navHeading">Companies House</h3>
                    </div>
                </a>
            </Container>
        </Navbar >
    )
}

export default Navigation