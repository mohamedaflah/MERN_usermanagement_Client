import { useEffect, useRef, useState } from "react";
// import { MdDeleteOutline } from "react-icons/md";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ProfileImage from "../assets/download.png";
import { axiosInstance } from "../constants/constants";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignupData } from "../redux/actions/signupActions";
const ProfileEdit = () => {
  const [open, setOpen] = useState(false);
  const navigate=useNavigate()
  const params = useParams();
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const [showprofile, showSetProfile] = useState("");
  const [profile, setProfile] = useState();
  const usernameRef = useRef();
  const dispatch=useDispatch()
  const emailRef = useRef();
  const validateForm = () => {
    let validate = true;
    if (!username) {
      usernameRef.current.textContent = "please enter username";
      usernameRef.current.classList.remove("hidden");
      validate = false;
    }
    if (!email) {
      emailRef.current.textContent = "please fill email";
      emailRef.current.classList.remove("hidden");
      validate = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailRef.current.textContent = "Enter only valid email";
      emailRef.current.classList.remove("hidden");
      validate = false;
    }
    return validate;
  };
  const submitEditForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
        let formData=new FormData()
        formData.append('username',username)
        formData.append('email',email)
        formData.append('profile',profile)
        console.log(JSON.stringify(profile))
      axiosInstance
        .put(`/updateuserprofile/${params.id}`,formData)
        .then((response) => {
            // alert(JSON.stringify(response.data))
            if(response.data.status){
                dispatch(setSignupData(response.data.userData))
                setOpen(false)
                location.reload()
                navigate(`/profile/${params.id}`)
            }else{
                alert(response.data.err)
            }
        });
    }
  };
  useEffect(() => {
    // alert("profile");
    axiosInstance.get(`/getuserprofile/${params.id}`).then((response) => {
      if (response.data.status) {
        setUser({ ...user, ...response.data.userData });
        setUsername(response.data.userData.username);
        setEmail(response.data.userData.email);
        showSetProfile(response.data.userData.profileImage);
      }
      console.log(user, " user");
    });
  }, []);
  return (
    <div>
      <button onClick={onOpenModal} className="w-full">
        Edit address
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2 className="text-grey-500 font-semibold">Edit details</h2>
        <form className="w-96 flex flex-col" onSubmit={submitEditForm}>
          <div className="w-full h-24 ">
            <div className="w-24 h-24 rounded-full bg-white flex flex-col overflow-hidden relative border">
              <input
                type="file"
                name=""
                id="img1"
                className="hidden"
                onChange={(e) => {
                  console.log("changin___________");
                  console.log(profile, " asdfadslkfsfd");
                  showSetProfile(URL.createObjectURL(e.target.files[0]));
                  setProfile(e.target.files[0]);
                }}
              />
              <label
                htmlFor="img1"
                className="w-full h-[70%] bg-transparent cursor-pointer z-30"
              ></label>
              {/* <div className='w-full h-[30%] bg-[#00000058] flex justify-center items-center text-[18px]'>
                    <MdDeleteOutline className='cursor-pointer' />
                    </div> */}
              <img
                src={showprofile ? showprofile : ProfileImage}
                className="absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%]  "
                style={{ width: "90%", height: "90%", objectFit: "cover" }}
                alt=""
              />
            </div>
          </div>
          <div className="w-full   flex flex-col">
            <div className="flex flex-col p-1">
              <label htmlFor="" className="text-sm">
                username
              </label>
              <input
                type="text"
                className="border-none outline-none p-1 text-sm bg-slate-200"
                name=""
                id=""
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <span
                className="text-[13px] text-red-500 hidden"
                ref={usernameRef}
              ></span>
            </div>
            <div className="flex flex-col p-1">
              <label htmlFor="" className="text-sm">
                email
              </label>
              <input
                type="text"
                className="border-none outline-none p-1 text-sm bg-slate-200"
                name=""
                id=""
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <span
                className="text-[13px] text-red-500 hidden"
                ref={emailRef}
              ></span>
            </div>
            <div className="flex flex-col p-1 mt-2">
              <button className="w-full p-1 bg-slate-200 text-sm" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default ProfileEdit;
