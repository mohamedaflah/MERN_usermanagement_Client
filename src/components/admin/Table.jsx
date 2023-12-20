/* eslint-disable react/prop-types */

import { AiOutlineDelete } from "react-icons/ai";
import { setAllUsers } from "../../redux/actions/getUser";
import demoImage from "../../assets/download.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../constants/constants";
import Swal from "sweetalert2";
import EditModal from "./EditModal";
// eslint-disable-next-line no-unused-vars
function Table({ search,searchOption }) {
  const users = useSelector((state) => state.usersList.users);
  const dispatch = useDispatch();
  const [filteredUsers, setFilteredUsers] = useState(users);
  useEffect(() => {
    console.log(users, "in table");
    console.log("table");
    dispatch(setAllUsers());
  }, [dispatch]);
  useEffect(() => {
    let filtered;
    if(search.length>=1){
      filtered = users.filter((user) =>
        user[searchOption].toLowerCase().includes(search.toLowerCase())
      ).reverse()
    }else{
      filtered = users.filter((user) =>
        user[searchOption].toLowerCase().includes(search.toLowerCase())
      )
    }
    setFilteredUsers(filtered)
  }, [search, users,searchOption]);
  const delteUser = (userId,name) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert ${name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/admin/deleteuser/${userId}`).then((response) => {
          if (response.data.status) {
            dispatch(setAllUsers());
          }
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

        <tr>
          <th scope="col" className="px-6 py-3">
            username
          </th>
          <th scope="col" className="px-6 py-3">
            email
          </th>
          <th scope="col" className="px-6 py-3">
            Profile
          </th>
          <th scope="col" className="px-6 py-3">
            Actions
          </th>
 
        </tr>
      </thead>

      <tbody>
        {filteredUsers.map((user) => (
          <tr
            key={user._id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {user.username}
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {user.email}
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="h-11 w-11 bg-black rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={user.profileImage ? user.profileImage : demoImage}
                  className=" object-cover rounded-full "
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  alt=""
                />
              </div>
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="h-10 w-28  flex items-center justify-start text-[20px] gap-3">
                <EditModal userData={user} />
                <AiOutlineDelete
                  className="cursor-pointer"
                  onClick={() => delteUser(user._id,user.username)}
                />
              </div>
            </th>
           
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
