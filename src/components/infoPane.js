import React, {Component} from "react"
import {connect} from "react-redux"
import {factionsArr} from "../factionInfo/index.js"

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
                <div className="container info-pane-container">
                    <div className="row">
                        <h1 className="col">{factionObj.name}</h1>
                    </div>
                    <div className="row">
                        <img className=" col-6 img-fluid" src={factionObj.summoner}/>
                        <hr></hr>
                    </div>
                    <div className="row">
                        <h3 className="col">Champions</h3>
                    </div>
                    <div className="row">
                    <img className=" col-6 img-fluid" src={factionObj.champions[0]}/>
                    <img className=" col-6 img-fluid" src={factionObj.champions[1]}/>
                    </div>
                    <div className="row">
                    <img className=" offset-3 col-6 img-fluid" src={factionObj.champions[2]}/>
                    </div>
                    <hr></hr>
                    <div className="row">
                    <h3 className="col">Units</h3>
                    </div>
                    <div className="row">
                        {factionObj.units.map(element => <img key={factionObj.units.indexOf(element)} className=" col-6 img-fluid" src={factionObj.units[factionObj.units.indexOf(element)]}/>)}
                    </div>
                    <hr></hr>
                    <div className="row">
                        <h3 className="col">Events</h3>
                    </div>
                    {factionObj.events.map(element => <img key={factionObj.events.indexOf(element)} className=" col-6 img-fluid" src={factionObj.events[factionObj.events.indexOf(element)]}/>)}
                </div>
                </>
                )
        }
        else{
            return(<></>)
        }
        }
        
    
}

const mapStateToProps= (state) => {
    return {
     faction: state.faction,
    }
}

export default connect(mapStateToProps)(InfoPane)