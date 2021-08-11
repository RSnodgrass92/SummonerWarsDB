import React, {Component} from "react"
import SideBarFactionBtn from "./sidebarFactionBtn"

const factionNamesArr=["Breakers", "Cave Goblins", "Fallen Kingdom", "Phoenix Elves", "Polar Dwarves", "Savanna Elves", "Tundra Orcs", "Vanguards"]

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