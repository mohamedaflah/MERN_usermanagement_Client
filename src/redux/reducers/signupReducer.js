import { SIGNUP_TYPE } from "../type";

const initialState = {
  signupData: {},
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_TYPE.setSignupData:
      console.log(action.payload,' signup payload');
      return {
        ...state,
        signupData: {...state.signupData, ...action.payload},
      };
    default:
      return state;
  }
};
// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SIGNUP_TYPE.checkUserAuth:
//       return {
//         ...state,
//         isAuthenticated: true,
//         message: action.payload.message,
//         error: null,
//       };
//     case SIGNUP_TYPE.authCheckFailure:
//       return {
//         ...state,
//         isAuthenticated: false,
//         error: action.payload.err,
//       };
//     default:
//       return state;
//   }
// };

export default signupReducer;
