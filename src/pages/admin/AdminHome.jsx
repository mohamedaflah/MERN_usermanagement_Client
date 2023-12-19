import { useEffect, useState } from "react";
import { axiosInstance } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAdmindata } from "../../redux/actions/adminAuth";
import Table from "../../components/admin/Table";
import demoImage from "../../assets/download.png";
import { IoClose } from "react-icons/io5";
function AdminHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [createprofile,setCreateProfile]=useState()
  const [createEmail,setCrateEmail]=useState("")
  const [createUsername,setCrateUsername]=useState("")
  const [createPassword,setCreatePassword]=useState("")

  useEffect(() => {
    axiosInstance.get("/admin/checkadminauth").then((response) => {
      if (!response.data.status) {
        dispatch(setAdmindata(response.data.adminData));
        navigate("/admin/auth");
      }
    });
  }, []);
  return (
    <>
      {modal && (
        <div className="absolute w-[50%] h-[50%]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-sm">
          <form className="max-w-sm mx-auto bg-slate-500 p-4 rounded-lg relative">
            <IoClose className="absolute right-5 text-2xl cursor-pointer" onClick={()=>setModal(false)} />
            <div className="mb-5">
              <h1 className="text-white text-center text-2xl font-semibold">
                Create user
              </h1>
            </div>
            <div className="mb-5">
              <div className="w-full flex justify-center">
                <div className="w-20 h-20 bg-black rounded-full overflow-hidden">
                  <img
                    src={createprofile?URL.createObjectURL(createprofile):demoImage}
                    alt=""
                    className="rounded-full h-full w-full"
                  />
                </div>
              </div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                profile
              </label>
              <input
                type="file"
                id="email"
                onChange={(e)=>setCreateProfile(e.target.files[0])}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                username
              </label>
              <input
                type="text"
                id="username"
                onChange={(e)=>setCrateUsername(e.target.value)}
                value={createUsername}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="aflu.."
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e)=>setCrateEmail(e.target.value)}
                value={createEmail}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                value={createPassword}
                onChange={(e)=>setCreatePassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      <div className="w-[90%] mx-auto mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-1">
          <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
            {/* Dropdown Section */}
            <div>
              <button
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
                onClick={()=>setModal(true)}
              >
                Crate user
              </button>
            </div>

            {/* Search Section */}
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>
          <Table />
        </div>
      </div>
    </>
  );
}
export default AdminHome;
