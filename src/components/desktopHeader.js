import React, {Component} from "react"
import {connect} from "react-redux"
import {setModalStatus, setFaction} from "../redux/actions/actionCreators"

class DesktopHeader extends Component
{

    render()
    {
        return(
            <> 
                <h1 className="d-none d-lg-block page-title text-center"
                    onClick={()=>
                        {
                            this.props.setFaction("")
                            this.props.setModalStatus(false)
                        }}>
                    Summoner Wars <span className="text-highlight">DB</span></h1>
            </>

            )
    }
    
}

const mapDispatchToProps= ()=> {
    return {
       setModalStatus: setModalStatus,
       setFaction: setFaction  
    }
   }

export default connect(undefined,mapDispatchToProps())(DesktopHeader)
