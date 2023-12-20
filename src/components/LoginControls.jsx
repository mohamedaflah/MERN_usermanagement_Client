import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useRef, useState } from "react";
import { MdLockOpen } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../constants/constants";
import Swal from "sweetalert2";
function LoginControlls() {
  const navigate = useNavigate();
  const [showpass, setShowpass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitRef=useRef()
  const loginValidation = () => {
    let validate = true;
    if (!email) {
      validate = false;
    }
    if (!password) {
      validate = false;
    }
    return validate;
  };
  const handleLoginSubmition = () => {
    console.log("top", loginValidation());
    if (loginValidation()) {
      submitRef.current.disabled=true
      submitRef.current.textContent='Processing...'
      // alert('all is correct')
      axiosInstance
        .post("/login", {
          email,
          password,
        })
        .then((response) => {
          if (response.data.status) {
            navigate("/");
          }
          if (response.data.err) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: response.data.err,
              footer: '<a href="#">Why do I have this issue?</a>'
            });
          }
        });
    } else {
      console.log("asfdasfd");
      // alert('wrong')
    }
    submitRef.current.disabled=false
    submitRef.current.textContent='submit'
  };
  const handleEmailSetting = (e) => {
    // if(e.target.value!==''){
    setEmail(e.target.value);
    // }
  };
  const handlePasswordSetting = (e) => {
    setPassword(e.target.value);
  };
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
          <span className="text-[13px] text-red-500 hidden">
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
          <span className="text-[13px] text-red-500 hidden">
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
            onClick={handleLoginSubmition}
            ref={submitRef}
          >
            submit
          </button>
          <div className="flex justify-end p-1">
            <Link
              className="underline cursor-pointer"
              to={"/signup"}
              replace={true}
            >
              signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginControlls;
