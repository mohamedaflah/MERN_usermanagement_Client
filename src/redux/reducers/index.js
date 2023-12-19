import { combineReducers } from "redux";
import signupReducer from "./signupReducer";
import { authReducer } from "./authReducer";
import { adminReducer } from "./adminReducer";
import { userListReducer } from "./getUsers";

const rootReducer=combineReducers({
    signupdata:signupReducer,
    userAuth:authReducer,
    admindata:adminReducer,
    usersList:userListReducer
})
export default rootReducer