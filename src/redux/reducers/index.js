import { combineReducers } from "redux";
import factionSelectReducer from "./factionSelectReducer";

const allReducers = combineReducers({
    faction: factionSelectReducer,
})

export default allReducers