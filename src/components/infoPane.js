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
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col">{this.props.faction}</div>
                </div>
                <div className="row">
                    <div className="col">Summoner Wars DB</div>
                    <div className="col">Summoner Wars DB</div>
                </div>
            </div>
            </>
            )
    }
    
}

const mapStateToProps= (state) => {
    return {
     faction: state.faction,
    }
}

export default connect(mapStateToProps)(InfoPane)