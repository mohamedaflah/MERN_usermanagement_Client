import { axiosInstance } from "../../constants/constants"
import { SIGNUP_TYPE } from "../type"

//  const setUsers=(userlist)=>{
//     return
// }

export const setAllUsers=()=>{
  console.log('hiy');
  return (dispatch)=>{
    try {
        axiosInstance.get('/admin/getallusers').then((response)=>{
          console.log(response.data,'helo')
          if(response.data.status){
            dispatch({
              type:SIGNUP_TYPE.setUsersList,
              payload:response.data.usersList
          })
          }
        })
      } catch (error) {
        console.log(error.message);
        // dispatch(checkUserAuthFailure(error.message))
      }
    }
  }