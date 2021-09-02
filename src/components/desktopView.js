import React, {Component} from "react"
import {connect} from "react-redux"
import {factionsArr} from "../factionInfo/index.js"


class DesktopView extends Component
{

    render()
    {
        {
            const factionObj = factionsArr.filter(element=> element.name===this.props.faction)[0]
            return(
                <>
                <div className="container d-none d-lg-block info-pane-container text-center">
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

export default connect(mapStateToProps)(DesktopView)