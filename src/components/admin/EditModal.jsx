/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import demmyImage from '../../assets/download.png'
import { axiosInstance } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { setAllUsers } from "../../redux/actions/getUser";
// eslint-disable-next-line react/prop-types
function EditModal({userData}){
    const [email, setEmail] = useState('');
    const [username,setUsername]=useState('')
    const [showmodal,setShowModal]=useState(false)
    const [showprofile,setShowprofile]=useState("")
    const [profile,setProfile]=useState()
    const editButtonRef=useRef()
    const dispatch=useDispatch()
    useEffect(()=>{
      // eslint-disable-next-line react/prop-types
      setEmail(userData.email)
      setUsername(userData.username)
      setShowprofile(userData.profileImage)
    },[])
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handleUsernameChange=(e)=>{
      setUsername(e.target.value)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      editButtonRef.current.disabled=true
      editButtonRef.current.textContent='Processing...'
      let formData=new FormData()
      formData.append('email',email)
      formData.append('username',username)
      formData.append('profile',profile)
      axiosInstance.put(`/admin/updateuser/${userData._id}`,formData).then((result)=>{
        if(result.data.status){
          dispatch(setAllUsers())
          setShowModal(false)
        }else{
          alert(result.data.err)
        }
      })
      editButtonRef.current.disabled=false
      editButtonRef.current.textContent='Edit user'
    };
  
    const closeModal = () => {
      // Implement modal close logic here
      setShowModal(false)
    };
    return(
        <>
          {/* Modal toggle */}
          <button
            onClick={() => {
              // Implement modal toggle logic here
              setShowModal(true)
            }}
            className="block text-white"
            type="button"
          >
            <FaEdit/>
          </button>
    
          {/* Main modal */}
          {showmodal&&
          <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex "
        >
          <div className="relative p-4 w-full max-w-md max-h-full flex items-center justify-center">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-96">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit user
                </h3>
                <button
                  onClick={closeModal}
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5">
                <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex justify-center ">
                    <div className="w-24 h-24 rounded-full bg-black overflow-hidden">
                      <img src={showprofile?showprofile:demmyImage} className="w-full h-full" alt="" />
                    </div>
                  </div>
                <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                       profile
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e)=>{
                        setProfile(e.target.files[0])
                        setShowprofile(URL.createObjectURL(e.target.files[0]))
                      }}
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                       email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                       username
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={username}
                      onChange={handleUsernameChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    ref={editButtonRef}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Edit user
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
          }
          
        </>
      )
}
export default EditModal