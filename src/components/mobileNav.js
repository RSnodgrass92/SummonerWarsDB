import React, {Component} from "react"
import {Navbar, Container, Button, Modal} from "react-bootstrap"
import ModalContent from "../components/modalContent"
import {connect} from "react-redux"
import {setModalStatus} from "../redux/actions/actionCreators"

class MobileNav extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <> 
            <Navbar  sticky="top" className="d-lg-none">
            <Container id="navbar">
                <Navbar.Brand>Summoner Wars DB</Navbar.Brand>
            <Button variant="danger" id="navbar-btn" onClick={()=>this.props.setModalStatus(true)}>Change Faction</Button>
            </Container>
            </Navbar>
            
            <Modal show={this.props.modalIsOpen} fullscreen={true}>
            <Modal.Header>
                        <Modal.Title>Factions</Modal.Title>
                        <Button variant="danger" id="modal-btn" onClick={()=>this.props.setModalStatus(false)} >x</Button>
            </Modal.Header>
                <div className="container-fluid modal-body">
                        <ModalContent/>
                </div>
            </Modal>
            </>

            )
    }
    
}

  
const mapStateToProps= (state) => {
    return {
      modalIsOpen: state.modalIsOpen,
    }
}

const mapDispatchToProps= ()=> {
    return {
       setModalStatus: setModalStatus  
    }
   }

export default connect(mapStateToProps,mapDispatchToProps())(MobileNav)
