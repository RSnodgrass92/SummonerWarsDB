import React, {Component} from "react"
import {connect} from "react-redux"
import {factionsArr} from "../factionInfo/index.js"


class MobileView extends Component
{
    render()
    {
        {
            const factionObj = factionsArr.filter(element=> element.name===this.props.faction)[0]
            return(
                <>
                <div className="container d-lg-none text-center" id="mobile-content-wrapper">
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
        }
        
    
}

const mapStateToProps= (state) => {
    return {
     faction: state.faction,
    }
}

export default connect(mapStateToProps)(MobileView)