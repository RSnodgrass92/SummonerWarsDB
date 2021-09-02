import React, {Component} from "react"
import {connect} from "react-redux"
import factionWheelImg from "../assets/build_symbol_wheel.jpg"
import DesktopView from "./desktopView.js"
import MobileView from "./mobileView.js"

class InfoPane extends Component
{
    render()
    {
        if(this.props.faction)
        {
            return(
                <>
                <DesktopView/>
                <MobileView/>
                </>
                )
        }
        else{
            return(
            <>
            <div className="container faction-wheel-wrapper">
                <div className="row">
                    <div className="col faction-wheel-wrapper">
                    <img className="col img-fluid" src={factionWheelImg}/>
                    </div>
                </div>
            </div>
            </>)
        }
        }
}

const mapStateToProps= (state) => {
    return {
     faction: state.faction,
    }
}

export default connect(mapStateToProps)(InfoPane)