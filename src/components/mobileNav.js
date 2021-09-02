import React, {Component} from "react"
import {Navbar, Container, Button} from "react-bootstrap"
import {connect} from "react-redux"
import {setModalStatus, setFaction} from "../redux/actions/actionCreators"
import MobileModal from "./mobileModal"

class MobileNav extends Component
{

    render()
    {
        return(
            <> 
            <Navbar  sticky="top" className="d-lg-none">
            <Container id="navbar">
            <Navbar.Brand 
                onClick={()=>
                    {
                        this.props.setFaction("")
                        this.props.setModalStatus(false)
                    }
                }>Summoner Wars DB
            </Navbar.Brand>
            <Button variant="danger" id="navbar-btn" onClick={()=>this.props.setModalStatus(true)}>Change Faction</Button>
            </Container>
            </Navbar>

            <MobileModal />
            </>
            )
    }
    
}

const mapDispatchToProps= ()=> {
    return {
       setFaction: setFaction,
       setModalStatus: setModalStatus  
    }
   }

export default connect(undefined,mapDispatchToProps())(MobileNav)
