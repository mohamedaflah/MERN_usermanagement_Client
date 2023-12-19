import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {checkUserAuth} from './redux/actions/authActions'
import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import Signup2 from "./pages/Signup2";
import Profile from "./pages/Profile";
// import { setSignupData } from "./redux/actions/signupActions";
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    console.log('in app.jsx');
    dispatch(checkUserAuth())
  },[dispatch])
  return (
    
    <div className="">
      {/* //bg-gray-900 */}
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/profile/:id" element={<Profile/>}/>
        </Routes>
    </div>
    
  );
}

export default App;
