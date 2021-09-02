import { combineReducers } from "redux";
import factionSelectReducer from "./factionSelectReducer";
import modalStatusReducer from "./modalStatusReducer";

const allReducers = combineReducers({
    faction: factionSelectReducer,
    modalIsOpen: modalStatusReducer,
})

export default allReducers