import { axiosInstance } from "../constants/constants"

const checkUserAuthentication=(navigate)=>{
    axiosInstance.get('/checkuserauth').then(res=>{
        if(res.err){
            alert(res.err)
            navigate('/login')
        }
    })
}
export default checkUserAuthentication