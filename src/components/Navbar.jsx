// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import demmyImage from '../assets/download.png'
import { axiosInstance } from "../constants/constants";
function Navbar() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.userAuth);
  const userData=useSelector((state)=>state.signupdata).signupData
  console.log(state, "state ");
  console.log(JSON.stringify(userData), "userdata ");
  console.log(userData.username, "userdataname ");
  return (
    <header className="flex items-center justify-center w-full h-16 border-b border-gray-500">
      <div className="lg:w-[75%] md:w-[85%] w-[90%]  flex justify-between">
        <h1 className="text-1xl text-grey-500  font-bold cursor-pointer" onClick={()=>navigate('/')}>Aflu.in</h1>

        <div className="flex items-center justify-between gap-2 w-36">
          {!state.isAuthenticated ? (
            <>
              <div
                className="flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg shadow-lg cursor-pointer p- bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"
                onClick={() => {
                  navigate("/login");
                }}
              >
                {"Login"}
              </div>
              <div
                className="flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg shadow-lg cursor-pointer bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </div>
            </>
          ) : (
            <>
            <div
              className="flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg shadow-lg cursor-pointer p- bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
              onClick={() => {
                axiosInstance.get("/logout").then(response=>{
                  if(response.data.status){
                    navigate('/login')
                  }
                })
              }}
            >
              {"Logout"}
            </div>
            <div className="w-12 h-12 border border-black rounded-full overflow-hidden cursor-pointer" onClick={()=>navigate(`/profile/${userData._id}`)}>
              <img src={userData.profileImage?userData.profileImage:demmyImage} alt="" className="object-cover h-full w-full" />
            </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
export default Navbar;
