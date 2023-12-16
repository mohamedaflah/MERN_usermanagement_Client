import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { MdLockOpen } from "react-icons/md";
import { Link } from "react-router-dom";
function LoginControlls() {
  const [showpass, setShowpass] = useState(false);
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
          >
            submit
          </button>
          <div className="flex justify-end p-1">
            <Link className="underline cursor-pointer" to={'/signup'}>signup</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginControlls;
