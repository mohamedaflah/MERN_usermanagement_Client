import { useEffect } from "react"
// import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { axiosInstance } from "../constants/constants"

export default function Home() {
  const navigate=useNavigate()
  // const auth=useSelector(state=>state.userAuth)
  useEffect(()=>{
    axiosInstance.get('/checkuserauth').then(res=>{
      if(!res.data.status){
        navigate('/login')
      }
    })
  },[navigate])
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="px-5 py-1">
        <h1 className="text-2xl font-bold text-gray-800">Welcom to Aflu.in</h1>
      </div>
      <div className="px-5 flex flex-wrap gap-2 justify-center">
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- from-green-400 via-green-500 to-green-600 bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800  rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- from-green-400 via-green-500 to-green-600 bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800  rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
        <div className="w-64 h-40 shadow-lg cursor-pointer p- bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-md text-white flex-col p-1">
          <div className="p-1">
            <h1 className="font-semibold">Lorem...</h1>
          </div>
          <div className="p-1 line-clamp-6">
            <p className="text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores porro incidunt minus earum enim delectus deleniti dolorem eaque reprehenderit corporis repellendus tenetur, pariatur accusamus quos consectetur dicta quod. Delectus praesentium possimus modi qui, blanditiis officia iusto nesciunt ex amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
