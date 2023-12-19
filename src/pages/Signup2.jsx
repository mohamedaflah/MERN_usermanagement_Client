import demmyImage from '../assets/download.png'
function Signup2(){
    return(
        <main className="h-screen flex flex-col items-center">
            <div className="head w-[90%] bg-green-400 mt-2">
                <h1 className="text-3xl font-bold">Create new Account</h1>
            </div>
            <div className="form_section flex items-center bg-cyan-100 w-[90%] flex-col md:flex-row h-[600px] ">
                <div className="img hidden md:flex bg-slate-50 w-[50%]">d
                </div>
                <div className="w-full md:w-[50%] bg-slate-600 flex flex-col mt-2 ">
                    <div className="w-full flex justify-between">
                        <input type="file" name="" id="profileimage" className="hidden" />
                        <div className="w-28 h-28 bg-gray-400 rounded-lg overflow-hidden">
                            <img src={demmyImage} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className='bg-red-500 w-64 flex flex-col justify-between'>
                            <div className='flex flex-col bg-black px-1 text-sm rounded-lg'>
                                <label htmlFor="">firstname</label>
                                <input type="text" className='w-full p-1 bg-transparent' />
                            </div>
                            <div className='flex flex-col bg-violet-400 p-1 text-sm rounded-lg'>
                                <label htmlFor="">lastname</label>
                                <input type="text" className='w-full p-1' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Signup2