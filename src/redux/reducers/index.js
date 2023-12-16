import { combineReducers } from "redux";
import signupReducer from "./signupReducer";

const rootReducer=combineReducers({
    signupdata:signupReducer
})
export default rootReducer