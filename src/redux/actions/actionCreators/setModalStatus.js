  
import * as actionTypes from "../actionTypes"
const setModalStatus = (val) =>
{
    {
        return {
            type: actionTypes.SET_MODAL_STATUS, 
            val:val
        }
    }
}

export default setModalStatus