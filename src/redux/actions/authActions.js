import { axiosInstance } from "../../constants/constants";
import { SIGNUP_TYPE } from "../type";
import { setSignupData } from "./signupActions";

const checkUserAuthSuccess = () => {
    return {
      type: SIGNUP_TYPE.checkUserAuth,
      payload: { isAuthenticated:true,error:null },
    };
  };
  const checkUserAuthFailure=(err)=>({
    type:SIGNUP_TYPE.checkUserAuth,
    payload:{isAuthenticated:false,error:err}
  })
  
  export const checkUserAuth=()=>{
    return async(dispatch)=>{
      try {
        axiosInstance.get('/checkuserauth').then((response)=>{
          if(response.data.status){
            alert('ds')
            dispatch(checkUserAuthSuccess())
            dispatch(setSignupData(response.data.userData))
          }else{
            dispatch(checkUserAuthFailure(response.data.err))
          }
        })
      } catch (error) {
        console.log(error.message);
        dispatch(checkUserAuthFailure(error.message))
      }
    }
  }