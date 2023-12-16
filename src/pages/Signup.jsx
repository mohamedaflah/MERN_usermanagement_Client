
import SignupControlls from "../components/SignupControlls";

function Signup() {
  return (
    <main className="flex items-center justify-center w-full h-screen login_page">
      <div
        className="lg:w-[30%] md:w-[50%]  w-[90%]  h-[500px]  rounded-sm flex flex-col"
        style={{
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          transition: " all 0.3s cubic-bezier(.25,.8,.25,1)",
        }}
      >
        <div className="flex justify-start px-4 mt-2 header">
        </div>
        <SignupControlls/>
      </div>
    </main>
  );
}
export default Signup;
