import React, {Component} from "react"
import {Navbar, Container, Button} from "react-bootstrap"

// TODO add change functionality to button.
class MobileNav extends Component
{
    render()
    {
        return(
            <> 
            <Navbar  sticky="top" className="d-lg-none">
            <Container id="navbar">
                <Navbar.Brand>Summoner Wars DB</Navbar.Brand>
            <Button variant="danger" id="navbar-btn">Change Faction</Button>
            </Container>
            </Navbar>
            </>
            )
    }
    
}
export default MobileNav
