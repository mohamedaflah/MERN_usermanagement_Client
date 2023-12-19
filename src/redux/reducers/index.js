import { combineReducers } from "redux";
import signupReducer from "./signupReducer";
import { authReducer } from "./authReducer";

const rootReducer=combineReducers({
    signupdata:signupReducer,
    userAuth:authReducer,
})
export default rootReducer