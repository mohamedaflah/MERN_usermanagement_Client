import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<h1>HOme</h1>} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login/>} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
