import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { setAllUsers } from "../../redux/actions/getUser";
import demoImage from "../../assets/download.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function Table() {
  const users = useSelector((state) => state.usersList.users);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(users, "in table");
    console.log("table");
    dispatch(setAllUsers());
  }, [dispatch, users]);
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        {/* Table headers */}
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
          {/* Add more table headers as needed */}
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
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
                  className=" object-cover rounded-full"
                  alt=""
                />
              </div>
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="h-10 w-28  flex items-center justify-start text-[20px] gap-3">
                <FaEdit />
                <AiOutlineDelete />
              </div>
            </th>
            {/* Add more table data cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
