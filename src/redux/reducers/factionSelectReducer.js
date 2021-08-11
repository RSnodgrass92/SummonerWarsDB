const factionSelectReducer = (state="Breakers",action) =>
{
    switch(action.type)
    {
        case "SET_FACTION": 
        state= action.name; 
        return state;
        default: 
        return state;
    }
}

export default factionSelectReducer