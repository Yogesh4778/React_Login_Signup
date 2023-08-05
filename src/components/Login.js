import React from "react";
import Common from "./Common";
import loginImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
    return(
        <Common 
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your carrer."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Login;