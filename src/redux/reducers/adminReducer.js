import { SIGNUP_TYPE } from "../type";

const initialState = {
    adminData: {},
  };
  
 export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_TYPE.setAdminData:
        console.log(action.payload,' signup payload for admin');
        return {
          ...state,
          adminData: {...state.adminData, ...action.payload},
        };
      default:
        return state;
    }
  };