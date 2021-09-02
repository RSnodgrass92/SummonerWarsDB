import React, {Component} from "react"
import FactionBtn from "./factionBtn"
import {factionsArr} from "../factionInfo/index.js"


const factionBtnsArr = factionsArr.map(a => {
    return(
        <div className="row my-2 modal-filler-button" key={factionsArr.indexOf(a)}>
        <FactionBtn  className="col"  faction={a.name}/>
        </div>
    )
})

class ModalContent extends Component
{
 
    render()
    {
        return(
            <>
                <div className="container" id="modal-content-filler">
                    {
                        factionBtnsArr
                    }
                </div>
            </>
            )
    }
    
}
export default ModalContent