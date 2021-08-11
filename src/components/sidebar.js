import React, {Component} from "react"

const factionNamesArr=["Breakers", "Cave Goblins", "Fallen Kingdom", "Phoenix Elves", "Polar Dwarves", "Savanna Elves", "Tundra Orcs", "Vanguards"]

const factionBtnsArr = factionNamesArr.sort().map(a => {
    return(
        <div className="row my-1" key={factionNamesArr.indexOf(a)}>
        <button className="col">{a}</button>
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