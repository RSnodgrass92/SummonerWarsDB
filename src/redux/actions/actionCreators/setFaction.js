  
import * as actionTypes from "../actionTypes"
const setFaction = (faction) =>
{
    {
        return {
            type: actionTypes.SET_FACTION, 
            name: faction
        }
    }
}

export default setFaction