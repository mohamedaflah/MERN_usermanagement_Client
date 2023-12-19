import { SIGNUP_TYPE } from "../type";

const initialState = {
  users: [],
};
export const userListReducer = (state = initialState, action) => {
    // alert('in payload seciont')
  switch (action.type) {
    case SIGNUP_TYPE.setUsersList:
      console.log("payload for userlist",action.payload);
      return {...state,users: action.payload};
    default:
      return state;
  }
};
