import { useEffect, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { FaRegCircleUser/*, FaRegEye, FaRegEyeSlash*/ } from "react-icons/fa6";
import { /*MdLockOpen, MdLockOutline,*/ MdOutlineEmail } from "react-icons/md";
import { /*Link*/ useParams } from "react-router-dom";
// import { axiosInstance } from "../constants/constants";
import ProfileImage from "../assets/download.png";
import ProfileEdit from "./ProfileEdit";
import { useSelector } from "react-redux";
function ProfileControls() {
  // const [showpass,setShowpass]=useState(false)
  const [user, setUser] = useState({});
  const [showProfile, setShowProfile] = useState();
  const state=useSelector(state=>state.signupdata)
  const params = useParams();
  console.log(params, " par");
  useEffect(() => {
    setShowProfile(ProfileImage);
    // axiosInstance.get(`/getuserprofile/${params.id}`).then((response) => {
    //   if (response.data.status) {
    //     setUser({ ...user, ...response.data.userData });
    //   }
    //   console.log(user, " user");
    // });
    setUser({...user,...state.signupData})
  }, [state.signupData]);
  return (
    <>
      <div className="flex justify-center ">
        <input
          type="file"
          style={{ display: "none" }}
          id="img"
          readOnly
          disabled={true}
        />
        <label
          className="p-4 border border-dashed cursor-pointer border-gray-400 my-1 rounded-sm"
          htmlFor="img"
        >
          <div className="flex items-center justify-center overflow-hidden rounded-lg  h-28 w-28">
            <img
              src={user.profileImage ? user.profileImage : showProfile}
              alt=""
              className="h-full w-full"
              style={{ objectFit: "cover" }}
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
          <span className="text-sm">Username</span>
          <div className="flex items-center p-1 border">
            <div className="text-[18px] z-10 ">
              <FaRegCircleUser />
            </div>
            <input
              type="text"
              name=""
              id=""
              readOnly
              disabled={true}
              value={user.username}
              className="w-full p-1 text-sm border-none outline-none"
              placeholder="username"
            />
          </div>
          <span className="text-[13px] text-red-500 hidden">
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
              readOnly
              disabled={true}
              value={user.email}
              className="w-full p-1 text-sm border-none outline-none"
              placeholder="Email Address"
            />
          </div>
          <span className="text-[13px] text-red-500 hidden">
            Enter email address
          </span>
        </div>
      </div>
      {/* <div className="px-5 mt-2">
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
            <span className="text-[13px] text-red-500 hidden" >
              Enter password
            </span>
          </div>
        </div> */}
      <div className="px-5 mt-2">
        <div className="flex flex-col">
          <button
            className="p-1 rounded-sm text-sm"
            style={{
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              transition: " all 0.3s cubic-bezier(.25,.8,.25,1)",
            }}
          >
            <ProfileEdit />
          </button>
        </div>
      </div>
    </>
  );
}
export default ProfileControls;
