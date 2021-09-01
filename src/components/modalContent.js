import React, {Component} from "react"
import SideBarFactionBtn from "./sidebarFactionBtn"
import {factionsArr} from "../factionInfo/index.js"


const factionBtnsArr = factionsArr.map(a => {
    return(
        <div className="row my-2 modal-filler-button" key={factionsArr.indexOf(a)}>
        <SideBarFactionBtn  className="col"  faction={a.name}/>
        </div>
    )
})

class ModalContent extends Component
{
 
    render()
    {
        console.log(factionsArr)
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