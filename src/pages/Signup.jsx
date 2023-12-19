
import { useEffect } from "react";
import SignupControlls from "../components/SignupControlls";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../constants/constants";
// import backgroudAvatar from "../assets/9.svg"
function Signup() {
  const navigate=useNavigate()
  // const state=useSelector(state=>state.userAuth)
  useEffect(()=>{
    axiosInstance.get('/checkuserauth').then(res=>{
      if(res.data.status){
        
        navigate('/')
      }
    })
  },[])
  return (
    <main className="flex items-center justify-center gap-4 w-full h-[92vh] login_page backdrop-filter ">

      <div
        className="lg:w-[30%] md:w-[50%]  w-[90%]  h-[500px]  rounded-sm flex flex-col"
        style={{
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          transition: " all 0.3s cubic-bezier(.25,.8,.25,1)",
        }}
      >
        
        <SignupControlls/>
      </div>
    </main>
  );
}
export default Signup;
