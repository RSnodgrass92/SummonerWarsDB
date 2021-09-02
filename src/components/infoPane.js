import React, {Component} from "react"
import {connect} from "react-redux"
import {factionsArr} from "../factionInfo/index.js"
import factionWheelImg from "../assets/build_symbol_wheel.jpg"

class InfoPane extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        if(this.props.faction)
        {
            const factionObj = factionsArr.filter(element=> element.name===this.props.faction)[0]
            return(
                <>

                {/* desktop */}
                <div className="container d-none d-lg-block info-pane-container">
                    <div className="row">
                        <h1 className="col sub-title">{factionObj.name}</h1>
                    </div>
                    <div className="row">
                        <img className=" col-6 img-fluid" src={factionObj.summoner}/>
                        <hr></hr>
                    </div>
                    <div className="row">
                        <h3 className="col sub-title">Champions</h3>
                    </div>
                    <div className="row">
                    <img className=" col-6 img-fluid" src={factionObj.champions[0]}/>
                    <img className=" col-6 img-fluid" src={factionObj.champions[1]}/>
                    </div>
                    <div className="row">
                    <img className=" offset-lg-3 col-6 img-fluid" src={factionObj.champions[2]}/>
                    </div>
                    <hr></hr>
                    <div className="row">
                    <h3 className="col sub-title">Common Units</h3>
                    </div>
                    <div className="row">
                        {factionObj.units.map(element => <img key={factionObj.units.indexOf(element)} className=" col-6 img-fluid" src={factionObj.units[factionObj.units.indexOf(element)]}/>)}
                    </div>
                    <hr></hr>
                    <div className="row">
                        <h3 className="col sub-title">Events</h3>
                    </div>
                    {factionObj.events.map(element => <img key={factionObj.events.indexOf(element)} className=" col-6 img-fluid" src={factionObj.events[factionObj.events.indexOf(element)]}/>)}
                </div>


                {/* mobile */}
                <div className="container d-lg-none" id="mobile-content-wrapper">
                    <div className="row">
                        <h1 className="col mobile-sub-title">{factionObj.name}</h1>
                    </div>
                    <div className="row">
                        <img className=" col-12 img-fluid mobile-img-wrapper" src={factionObj.summoner}/>
                        <hr></hr>
                    </div>
                    <div className="row">
                        <h3 className="col mobile-sub-title">Champions</h3>
                    </div>
                    <div className="row">
                    <img className=" col-12 img-fluid mobile-img-wrapper" src={factionObj.champions[0]}/>
                    <img className=" col-12 img-fluid mobile-img-wrapper" src={factionObj.champions[1]}/>
                    </div>
                    <div className="row">
                    <img className=" col-12 img-fluid mobile-img-wrapper" src={factionObj.champions[2]}/>
                    </div>
                    <hr></hr>
                    <div className="row">
                    <h3 className="col mobile-sub-title">Common Units</h3>
                    </div>
                    <div className="row">
                        {factionObj.units.map(element => <img key={factionObj.units.indexOf(element)} className=" col-12 img-fluid mobile-img-wrapper" src={factionObj.units[factionObj.units.indexOf(element)]}/>)}
                    </div>
                    <hr></hr>
                    <div className="row">
                        <h3 className="col-12 mobile-sub-title">Events</h3>
                    </div>
                    {factionObj.events.map(element => <img key={factionObj.events.indexOf(element)} className=" col-12 img-fluid mobile-img-wrapper" src={factionObj.events[factionObj.events.indexOf(element)]}/>)}
                </div>

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