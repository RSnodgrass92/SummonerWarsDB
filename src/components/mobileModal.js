import React, {Component} from "react"
import {Button, Modal} from "react-bootstrap"
import ModalContent from "./modalContent"
import {connect} from "react-redux"
import {setModalStatus} from "../redux/actions/actionCreators"

class MobileModal extends Component
{

    render()
    {
        return(
            <> 
            <Modal show={this.props.modalIsOpen}>
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

export default connect(mapStateToProps,mapDispatchToProps())(MobileModal)
