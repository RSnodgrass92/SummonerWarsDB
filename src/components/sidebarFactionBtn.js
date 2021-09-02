import React, {Component} from "react"
import {Button} from "react-bootstrap"
import {connect} from "react-redux"
import {setFaction, setModalStatus} from "../redux/actions/actionCreators/index.js"


class SideBarFactionBtn extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <>
                <Button variant="danger" onClick={()=>
                {
                    this.props.setFaction(this.props.faction)
                    this.props.setModalStatus(false)
                }}>
                    
                {this.props.faction}</Button>
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
  

export default connect(undefined,mapDispatchToProps())(SideBarFactionBtn)