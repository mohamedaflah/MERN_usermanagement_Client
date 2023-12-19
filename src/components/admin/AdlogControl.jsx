import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useRef, useState } from "react";
import { MdLockOpen } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { setAdmindata } from "../../redux/actions/adminAuth";
function AdLoginControl() {
  const navigate=useNavigate()
  const [showpass, setShowpass] = useState(false);
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const emailRef=useRef()
  const passworeRef=useRef()
  const loginValidation=()=>{
    let validate=true
    if(!email){
        validate=false
        emailRef.current.classList.remove('hidden')
        setTimeout(()=>{
            emailRef.current.classList.add('hidden')
        },3000)
    }
    if(!password){
        validate=false
        passworeRef.current.classList.remove('hidden')
        setTimeout(()=>{
            passworeRef.current.classList.add('hidden')
        },3000)
    }
    return validate
}
  const handleEmailSetting=(e)=>{
    // if(e.target.value!==''){
      setEmail(e.target.value)
    // }
  }
  const dispatch=useDispatch()
  const handlePasswordSetting=(e)=>{
    setPassword(e.target.value)
  }
  const handleFormSubmit=()=>{
    if(loginValidation()){
        const formData=new FormData()
        formData.append("email",email)
        formData.append("password",password)
        axiosInstance.post('/admin/login',{email,password}).then(response=>{
            if(response.data.status){
                dispatch(setAdmindata(response.data.adminData))
                navigate('/admin/home')
            }else{
                alert(response.data.err)
            }
        })
    }
  }
  return (
    <>
      <div className="px-5 mt-2">
        <div className="flex flex-col">
          <span className="text-sm">Email address</span>
          <div className="flex items-center p-1 border">
            <div className="text-[18px]">
              <MdOutlineEmail />
            </div>
            <input
              type="email"
              name=""
              id=""
              value={email}
              onChange={handleEmailSetting}
              className="w-full p-1 text-sm border-none outline-none"
              placeholder="Email Address"
            />
          </div>
          <span className="text-[13px] text-red-500 hidden" ref={emailRef}>
            Enter email address
          </span>
        </div>
      </div>
      <div className="px-5 mt-2">
        <div className="flex flex-col">
          <span className="text-sm">Password</span>
          <div className="flex items-center p-1 border">
            <div className="text-[18px]">
              {showpass ? <MdLockOpen /> : <MdLockOutline />}
            </div>
            <input
              type={showpass ? "text" : "password"}
              name=""
              value={password}
              id=""
              onChange={handlePasswordSetting}
              className="w-full p-1 text-sm border-none outline-none"
              placeholder="password"
            />
            <div
              className="text-[18px] pr-2"
              onClick={() => setShowpass(!showpass)}
            >
              {showpass ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          <span className="text-[13px] text-red-500 hidden" ref={passworeRef}>
            Enter password
          </span>
        </div>
      </div>
      <div className="px-5 mt-2">
        <div className="flex flex-col">
          <button
            className="p-1 rounded-sm"
            style={{
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              transition: " all 0.3s cubic-bezier(.25,.8,.25,1)",
            }}
            onClick={handleFormSubmit}
          >
            submit
          </button>

        </div>
      </div>
    </>
  );
}
export default AdLoginControl;
