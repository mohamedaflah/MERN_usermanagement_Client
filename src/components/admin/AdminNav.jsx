import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../constants/constants";

function AdminNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuth, setisAuth] = useState(false);
  useEffect(() => {
    if (location.pathname === "/admin/home") {
        setisAuth(true)
    }
    // alert(isAuth)
    
  }, [location.pathname]);
  return (
    <header className="flex items-center justify-center w-full h-16 border-b border-gray-500">
      <div className="lg:w-[75%] md:w-[85%] w-[90%]  flex justify-between">
        <h1
          className="text-1xl text-grey-500  font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Aflu.in
        </h1>

        <div className="flex items-center justify-between gap-2 w-36">
          {isAuth && (
            <div className="flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg shadow-lg cursor-pointer p- bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
            onClick={()=>{
                axiosInstance.get('/admin/logout').then((reseponse)=>{
                    if(reseponse.data.status){
                        navigate('/admin/auth')
                        setisAuth(false)
                    }else{
                        alert(reseponse.data.err)
                    }
                })
            }}
            >
              Logout
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
export default AdminNav;
