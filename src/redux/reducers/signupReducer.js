import { SIGNUP_TYPE } from '../type';

const initialState = {
  signupData:[]
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_TYPE.setSignupData:
      return {
        ...state,
        signupData: [...state.signupData,action.payload],
      };
    default:
      return state;
  }
};

export default signupReducer;
