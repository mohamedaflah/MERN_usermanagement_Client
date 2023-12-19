
import { useEffect } from "react";
import LoginControlls from "../components/LoginControls";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../constants/constants";
function Login() {
  // const state=useSelector(state=>state.userAuth)
  const navigate=useNavigate()
  useEffect(()=>{
    axiosInstance.get('/checkuserauth').then(res=>{
      if(res.data.status){
        navigate('/')
      }
    })
  },[])
  return (
    <main className="flex items-center justify-center w-full h-screen login_page">
      <div
        className="lg:w-[30%] md:w-[50%]  w-[90%]  h-[300px]  rounded-sm flex flex-col"
        style={{
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          transition: " all 0.3s cubic-bezier(.25,.8,.25,1)",
        }}
      >
        <div className="flex justify-start px-6 mt-2 header ">
            <h1 className="font-medium text-[20px] mb-4">Login</h1>
        </div>
        <LoginControlls/>
      </div>
    </main>
  );
}
export default Login;
