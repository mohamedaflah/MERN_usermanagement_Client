import { SIGNUP_TYPE } from "../type";

const initialState = {
  isAuthenticated: false,
  error: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_TYPE.checkUserAuth:
      console.log("payload in reducer ", action.payload);
      return {
        ...state,
          isAuthenticated: action.payload.isAuthenticated,
          error: action.payload.error,
      };
    default:
      return state;
  }
};
