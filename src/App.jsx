import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {checkUserAuth} from './redux/actions/authActions'
import {  Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
// import Signup2 from "./pages/Signup2";
import Profile from "./pages/Profile";
import AdLogin from "./pages/admin/Adlogin";
import AdminHome from "./pages/admin/AdminHome";
import AdminNav from "./components/admin/AdminNav";
// import { setSignupData } from "./redux/actions/signupActions";
function App() {
  const dispatch=useDispatch()
  const location=useLocation()
  const isAdminRoute = location.pathname.startsWith("/admin");
  useEffect(()=>{
    console.log('in app.jsx');
    dispatch(checkUserAuth())
  },[dispatch])
  return (
    
    <div className="">
      {/* //bg-gray-900 */}
      {!isAdminRoute ? <Navbar />:<AdminNav/>}
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/profile/:id" element={<Profile/>}/>
          <Route path="/admin/auth" element={<AdLogin/>} />
          <Route path="/admin/home" element={<AdminHome/>} />
        </Routes>
    </div>
    
  );
}

export default App;
