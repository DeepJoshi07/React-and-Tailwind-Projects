import React, { useContext, useRef, useState } from "react";
import dp from '../assets/dp.webp'
import { dataContext } from "../Context/UserContext";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Signup() {

    const navigate = useNavigate()
    const[firstName,setFirstName] = useState(null);
    const[lastName,setLastName] = useState(null);
    const[userName,setUserName] = useState(null);
    const[email,setEmail] = useState(null);
    const[password,setPassword] = useState(null);

    const file = useRef();
    const [frontendImg,setFrontendImg] = useState(dp);
    const [backendImg,setBackendImg] = useState(null);
    function handleImage(e){
      
      let file = e.target.files[0];
      setBackendImg(file);
      let image = URL.createObjectURL(file);
      setFrontendImg(image);

    }


    const formData = new FormData();
    formData.append("firstName",firstName);
    formData.append("lastName",lastName);
    formData.append("userName",userName);
    formData.append("email",email);
    formData.append("password",password);
    if(backendImg){
      formData.append("profileImage",backendImg);

    }
   

    const {serverUrl,userData,getUserData} = useContext(dataContext)
    async function handleClick(e){
        e.preventDefault()
        try{
            await axios.post(serverUrl+"/signup",
              formData,
              {
                withCredentials:true,
                headers:{"Content-Type":"multipart/form-data"}
              });
            
            getUserData()
            if(userData){
              navigate("/")
            }
        }catch(e){
            console.log(e)
        }
    }
    
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center" >

      <form className="bg-[#071715] w-[90%] max-w-[450px] h-[600px] rounded-lg flex flex-col justify-center items-center">

        <h2 className="py-[20px] text-white text-2xl font-semibold">
            Sign In
        </h2>

        <div className="w-[100px] h-[100px] bg-[white] rounded-full my-[10px] overflow-hidden relative border-2 border-white">

            <img src={frontendImg} alt="" className="w-[100px] h-[100px]" />

            <div onClick={()=>{file.current.click()}} className="absolute w-[100px] h-[100px] bg-black top-0 opacity-0 hover:opacity-50 cursor-pointer flex justify-center items-center text-white text-2xl">
            +
            </div>
            <input type="file" ref={file} hidden onChange={handleImage} />
        </div>
        <div className="w-[80%] h-[50px] gap-[10px] my-[10px] flex justify-center items-center">

          <input type="text" 
          className="w-[50%] outline-none border-none h-[50px] px-[10px] rounded-lg bg-white"
          placeholder="First Name"
          onChange={(e)=>setFirstName(e.target.value)}
          value={firstName} />

          <input type="text" 
          className="w-[50%] outline-none border-none h-[50px] px-[10px] rounded-lg bg-white" 
          placeholder="Last Name"
          onChange={(e)=>setLastName(e.target.value)}
          value={lastName}/>

        </div>

        <input type="text" 
        className="w-[80%] outline-none border-none h-[50px] px-[10px] rounded-lg my-[10px] bg-white" 
        placeholder="Username"
        onChange={(e)=>setUserName(e.target.value)}
        value={userName}/>

        <input type="text" 
        className="w-[80%] outline-none border-none h-[50px] px-[10px] rounded-lg my-[10px] bg-white" 
        placeholder="Email"onChange={(e)=>setEmail(e.target.value)}
        value={email}/>

        <input type="text" 
        className="w-[80%] outline-none border-none h-[50px] px-[10px] rounded-lg my-[10px] bg-white" 
        placeholder="Password"onChange={(e)=>setPassword(e.target.value)}
        value={password}/>

        <button onClick={handleClick} className="bg-[#07f0f4] px-[20px] py-[10px] my-[10px] rounded-lg font-semibold">
          Sign Up
        </button>
        <p className='text-white cursor-pointer' onClick={()=>navigate('/login')}>Already Have an Account ? <span className="text-[#07f0f4] font-semibold">Login</span> </p>
      </form>
    </div>
  );
}

export default Signup;
