import React, {Component} from "react"
import {Button} from "react-bootstrap"
import {connect} from "react-redux"
import {setFaction} from "../redux/actions/actionCreators/index.js"


class SideBarFactionBtn extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        console.log(this.props)
        return(
            <>
                <Button variant="danger" onClick={()=>this.props.setFaction(this.props.faction)}>{this.props.faction}</Button>
            </>
            )
    }
    
}

const mapDispatchToProps= ()=> {
    return {
       setFaction: setFaction  
    }
   }
  

export default connect(undefined,mapDispatchToProps())(SideBarFactionBtn)