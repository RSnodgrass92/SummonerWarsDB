const modalStatusReducer = (state=false,action) =>
{
    switch(action.type)
    {
        case "SET_MODAL_STATUS": 
        state= action.val; 
        return state;
        default: 
        return state;
    }
}

export default modalStatusReducer