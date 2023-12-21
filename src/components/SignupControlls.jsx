import { MdOutlineEmail } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useRef, useState } from "react";
import { MdLockOpen } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUpload } from "react-icons/ai";
import ProfileImage from "../assets/download.png";
import { axiosInstance } from "../constants/constants";
import { useDispatch } from "react-redux";
import { setSignupData } from "../redux/actions/signupActions";
import Swal from "sweetalert2";
import ImageCrop from "./ImageCrop";
// import { FaRegTrashCan } from "react-icons/fa6";
function SignupControlls() {
  const navigate = useNavigate();
  const [showpass, setShowpass] = useState(false);
  const [username, setUsername] = useState("");
  const [crop,setCrop]=useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState();
  const dispatch = useDispatch();
  const emailErrRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const submitRef=useRef()
  const handleUsername = (e) => {
    if (username.length <= 10) {
      setUsername(e.target.value);
    }
  };
  const handleKeyDownforUsername = (e) => {
    if (e.key === "Backspace") {
      // Prevent the default behavior to stop the cursor from moving
      e.preventDefault();

      // Remove the last character
      setUsername((prevUsername) => prevUsername.slice(0, -1));
    }
  };
  const handleEmailAddress = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleImage = (e) => {
    setProfile(e.target.files[0]);
    setCrop(true)
  };
  const signupValidation = () => {
    let validation = true;
    if (!username) {
      usernameRef.current.classList.remove("hidden");
      setTimeout(() => {
        usernameRef.current.classList.add("hidden");
      }, 3000);
      validation = false;
    }
    if (!email) {
      emailErrRef.current.classList.remove("hidden");
      setTimeout(() => {
        emailErrRef.current.classList.add("hidden");
      }, 3000);
      validation = false;
    }
    if (!password) {
      passwordRef.current.classList.remove("hidden");
      setTimeout(() => {
        passwordRef.current.classList.add("hidden");
      }, 3000);
      validation = false;
    }
    return validation;
  };
  const handleFormSubmition = () => {
    if (signupValidation()) {
      submitRef.current.disabled=true
      submitRef.current.textContent='Processing..'

      // const formData={
      //   username,email,password,profile:URL.createObjectURL(profile)
      // }
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profile", profile);
      axiosInstance.post("/signup", formData).then((res) => {
        if (res.data.status) {
          console.log(res.data.userDetails);
          dispatch(setSignupData(res.data.userDetails));
          localStorage.setItem(
            "userdata",
            JSON.stringify(res.data.userDetails)
          );

          navigate("/", { replace: true });
        }
        if (res.data.err) {
          alert(res.data.err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: res.data.err,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
        submitRef.current.disabled=false
      submitRef.current.textContent='submit'
      });
    }
  };
  return (
    <>
      <div className="flex justify-center relative">
        {crop&&<div className="absolute w-96 min-h-96 bg-[#cbcbcb] top-9 rounded-md z-20 p-2 border shadow-md">
          <div className="w-full h-full">
            <ImageCrop image={profile} setImage={setProfile} offCrop={setCrop}/>
          </div>
        </div>}
        <input
          type="file"
          style={{ display: "none" }}
          id="img"
          onChange={handleImage}
          accept="image/*"
        />
        <label
          className="p-4 border border-dashed cursor-pointer border-gray-400 my-1 rounded-sm"
          htmlFor="img"
        >
          <div className="flex items-center justify-center overflow-hidden rounded-lg  h-28 w-28">
            <img
              src={!profile ? ProfileImage : URL.createObjectURL(profile)}
              alt=""
              className="h-full w-full object-contain"
              
            />
          </div>
          <div className="flex justify-between mt-1 text-2xl cursor-pointer">
            <div className="text-[20px] z-10 ">{/* <FaRegTrashCan  /> */}</div>
            <AiOutlineUpload />
          </div>
        </label>
      </div>
      <div className="px-5">
        <div className="flex flex-col">
          {/* {JSON.stringify(profile)} */}
          <span className="text-sm">Username</span>
          <div className="flex items-center p-1 border">
            <div className="text-[18px] z-10 ">
              <FaRegCircleUser />
            </div>
            <input
              type="text"
              onKeyDown={handleKeyDownforUsername}
              name=""
              id=""
              className="w-full p-1 text-sm border-none outline-none"
              placeholder="username"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <span className="text-[13px] text-red-500 hidden" ref={usernameRef}>
            Enter username
          </span>
        </div>
      </div>
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
              onChange={handleEmailAddress}
              value={email}
              className="w-full p-1 text-sm border-none outline-none"
              placeholder="Email Address"
            />
          </div>
          <span className="text-[13px] text-red-500 hidden" ref={emailErrRef}>
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
              id=""
              value={password}
              onChange={handlePassword}
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
          <span className="text-[13px] text-red-500 hidden" ref={passwordRef}>
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
            onClick={handleFormSubmition}
            ref={submitRef}
          >
            submit
          </button>
          <div className="flex justify-end p-1">
            <Link
              className="underline cursor-pointer"
              to={"/login"}
              replace={true}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignupControlls;
