import React, {Component} from "react"
import SideBarFactionBtn from "./sidebarFactionBtn"
import {factionsArr} from "../factionInfo/index.js"


const factionBtnsArr = factionsArr.map(a => {
    return(
        <div className="row my-2" key={factionsArr.indexOf(a)}>
        <SideBarFactionBtn  className="col"  faction={a.name}/>
        </div>
    )
})

class SideBar extends Component
{
 
    render()
    {

        return(
            <>
                <div className="container">
                    {
                        factionBtnsArr
                    }
                </div>
            </>
            )
    }
    
}
export default SideBar