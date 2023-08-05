import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    //here account type is not passed so we accumulate account type in final data in code writing below
    const[formData, setFormData] = useState({
        firstname:"", lastname:"",email:"",
        password:"",confirmpassword:""
    })
    

    const[showPassword,setShowPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmpassword){
            toast.error("Password not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
// since account type is different from ther data so we have to accumulate all data together so in final data we accumulate all together
        const finalData = {
            ...accountData,
            accountType
        }

        console.log("Printing account data");
        console.log(finalData);

        // uske bad user ko dashboard pr navigate krva do
        navigate("/dashboard");
    }

    return(
        <div>
            {/* Student Instructor tab */}
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button 
                className={`${accountType === "student" 
                ? "bg-richblack-900 text-richblack-5"
                 :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("student")}>Student</button>
                <button
                className={`${accountType === "instructor"
                ? "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("instructor")}>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                {/* firstname and last name */}
                <div className="flex gap-x-4 mt-[20px]">
                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>
                    <input
                    required
                    type="text"
                    name="firstname"
                    onChange={changeHandler}
                    placeholder="Enter first name"
                    value={formData.firstname}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
                </label>

                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup></p>
                    <input
                    required
                    type="text"
                    name="lastname"
                    onChange={changeHandler}
                    placeholder="Enter last name"
                    value={formData.lastname}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
                </label>
                </div>

            {/* Email */}
            <div className="mt-[20px]">
                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                    <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter Email Address"
                    value={formData.email}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                </label>
             </div>

            {/* create password and confirm password */}
            <div className="flex gap-x-4 mt-[20px]">
            <label className="relative w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>
                    <input
                    required
                    type={showPassword ? ("text") : ("password")} 
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter password"
                    value={formData.password}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
                     <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPassword( (prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                </label>

                <label className="relative w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">confirm Password<sup className="text-pink-200">*</sup></p>
                    <input
                    required
                    type={showConfirmPassword ? ("text") : ("password")} 
                    name="confirmpassword"
                    onChange={changeHandler}
                    placeholder="confirm password"
                    value={formData.confirmpassword}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
                     <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowConfirmPassword( (prev) => !prev)}>
                    {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                </label>


            </div>

            {/* create account */}
            <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                Create Account
            </button>
            </form>
        </div>
    )
}

export default SignupForm;