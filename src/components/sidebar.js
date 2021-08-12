import React, {Component} from "react"
import SideBarFactionBtn from "./sidebarFactionBtn"
import {factionsArr} from "../factionInfo/index.js"

const factionNamesArr=[]

for(let x=0; x<factionsArr.length; x++)
{
    factionNamesArr.push(factionsArr[x].factionName)
}

const factionBtnsArr = factionNamesArr.sort().map(a => {
    return(
        <div className="row my-2" key={factionNamesArr.indexOf(a)}>
        <SideBarFactionBtn  className="col"  faction={a}/>
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