import React from "react";
import signupImg from "../assets/signup.png";
import Common from "./Common";

const Signup = ({setIsLoggedIn}) => {

    return(
        <Common 
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your carrer."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Signup;