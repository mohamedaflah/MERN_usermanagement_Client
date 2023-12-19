// import { axiosInstance } from "../../constants/constants";
// import { SIGNUP_TYPE } from "../type";
// import { setSignupData } from "./signupActions";

// import { axiosInstance } from "../../constants/constants";
// import { SIGNUP_TYPE } from "../type";

// const checkUserAuthSuccess = () => {
//     return {
//       type: SIGNUP_TYPE.checkUserAuth,
//       payload: { isAuthenticated:true,error:null },
//     };
//   };
//   const checkUserAuthFailure=(err)=>({
//     type:SIGNUP_TYPE.checkUserAuth,
//     payload:{isAuthenticated:false,error:err}
//   })
  
//   export const checkUserAuth=()=>{
//     return async(dispatch)=>{
//       try {
//         axiosInstance.get('/checkuserauth').then((response)=>{
//           if(response.data.status){
//             dispatch(checkUserAuthSuccess())
//             dispatch(setSignupData(response.data.userData))
//           }else{
//             dispatch(checkUserAuthFailure(response.data.err))
//           }
//         })
//       } catch (error) {
//         console.log(error.message);
//         dispatch(checkUserAuthFailure(error.message))
//       }
//     }
//   }


// const checkAdminAuthSuccess=()=>{
//     return{
//         type:SIGNUP_TYPE.checkAdminAuth,
//         payload:{isAdminAuth:true,error:null}
//     }
// }
// const  checkAdminAuthFailure=(error)=>{
//     return{
//         type:SIGNUP_TYPE.checkAdminAuth,
//         payload:{isAdminAuth:false,error:error}
//     }
// }
// export const checkAdminAuth=()=>async(dispatch)=>{
//     try {
//         axiosInstance.get('/checkadminauth').then(response=>{
//             if(response.data.status){
//                 dispatch(checkAdminAuthSuccess())
//             }else{
//                 dispatch(checkAdminAuthFailure(response.data.err))
//             }
//         })
//     } catch (error) {
//         dispatch(checkAdminAuthFailure(error.message))
//         console.log(error.message,'admin autggh err');
//     }
// }
import { SIGNUP_TYPE } from "../type";
export const setAdmindata = (signupData) => ({
  type: SIGNUP_TYPE.setAdminData,
  payload: signupData,
});
