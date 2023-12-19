import ProfileControls from "../components/ProfileControls"

function Profile(){
    return(
        <main className="flex items-center justify-center gap-4 w-full h-[92vh] login_page backdrop-filter ">

        <div
          className="lg:w-[30%] md:w-[50%]  w-[90%]  h-[500px]  rounded-sm flex flex-col"
          style={{
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            transition: " all 0.3s cubic-bezier(.25,.8,.25,1)",
          }}
        >
            <div className="p-2">
                Edit Profile
            </div>
          
          <ProfileControls/>
        </div>
      </main>
    )
}
export default Profile