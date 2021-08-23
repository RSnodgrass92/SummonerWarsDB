import React, {Component} from "react"
import {connect} from "react-redux"

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
            console.log(this.props.faction.unitsArr)
            return(
                <>
                <div className="container">
                    <div className="row">
                        <h1 className="col">{this.props.faction.factionName}</h1>
                    </div>
                    <div className="row">
                        <img className=" col-6 img-fluid" src={this.props.faction.summoner}/>
                        <hr></hr>
                    </div>
                    <div className="row">
                        <h3 className="col">Champions</h3>
                    </div>
                    <div className="row">
                    <img className=" col-6 img-fluid" src={this.props.faction.champions[0]}/>
                    <img className=" col-6 img-fluid" src={this.props.faction.champions[1]}/>
                    </div>
                    <div className="row">
                    <img className=" offset-3 col-6 img-fluid" src={this.props.faction.champions[2]}/>
                    </div>
                    <hr></hr>
                    <div className="row">
                    <h3 className="col">Units</h3>
                    </div>
                    <div className="row">
                        {this.props.faction.unitsArr.map(element => <img className=" col-6 img-fluid" src={this.props.faction.unitsArr[this.props.faction.unitsArr.indexOf(element)]}/>)}
                    </div>
                    <hr></hr>
                    <div className="row">
                        <h3 className="col">Events</h3>
                    </div>
                    <div className="row">
                        {this.props.faction.eventsArr.map(element => <img className=" col-6 img-fluid" src={this.props.faction.eventsArr[this.props.faction.eventsArr.indexOf(element)]}/>)}
                    </div>
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