import "./App.css";
import {Route, Routes} from "react-router-dom";
import Navbar  from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
 
  // which button is shown at UI is decided on this condition whether the User is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>}/>
      </Routes>
    </div>
  )
}

export default App;
