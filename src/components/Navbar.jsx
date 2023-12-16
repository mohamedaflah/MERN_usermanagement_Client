import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-center w-full h-16 border">
      <div className="lg:w-[75%] md:w-[85%] w-[90%]  flex justify-end">
        <div className="flex items-center justify-between gap-2 w-36">
          <div
            className="flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg shadow-lg cursor-pointer p- bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </div>
          <div
            className="flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg shadow-lg cursor-pointer bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
