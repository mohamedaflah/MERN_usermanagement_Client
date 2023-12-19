
import { useEffect } from "react";
import AdLoginControl from "../../components/admin/AdlogControl";
import { axiosInstance } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
function AdLogin() {
  // const state=useSelector(state=>state.userAuth)
  const navigate=useNavigate()
  useEffect(()=>{
    axiosInstance.get('/admin/checkadminauth').then(resposne=>{
        if(resposne.data.status){
            navigate('/admin/home')
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
            <h1 className="font-medium text-[20px] mb-4">Login for admin</h1>
        </div>
        <AdLoginControl/>
      </div>
    </main>
  );
}
export default AdLogin;
