import { SIGNUP_TYPE } from "../type";
export const setSignupData = (signupData) => ({
  type: SIGNUP_TYPE.setSignupData,
  payload: signupData,
});
