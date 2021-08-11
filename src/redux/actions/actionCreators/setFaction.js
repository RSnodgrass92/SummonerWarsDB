  
import * as actionTypes from "../actionTypes"
const setFaction = (faction) =>
{
    {
        return {
            type: actionTypes.SET_FACTION, 
            faction: faction
        }
    }
}

export default setFaction