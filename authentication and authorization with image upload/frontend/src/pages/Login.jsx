import React, { useContext, useState } from 'react'
import { dataContext } from '../Context/UserContext';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate()
  const[email,setEmail] = useState(null);
  const[password,setPassword] = useState(null);


  const {serverUrl,getUserData,userData} = useContext(dataContext);
  async function handleClick(e){
      e.preventDefault()
      try{
          await axios.post(serverUrl+"/login",
            {email,password},
            {withCredentials:true});
          
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

    <form className="bg-[#071715] w-[90%] max-w-[450px] h-[600px]  flex flex-col justify-center items-center">

      <h2 className="py-[20px] text-white text-2xl font-semibold">
          Log In
      </h2>

      <input type="text" 
      className="w-[80%] outline-none border-none h-[50px] px-[10px] rounded-lg my-[10px] bg-white" 
      placeholder="Email"onChange={(e)=>setEmail(e.target.value)}
      value={email}/>

      <input type="text" 
      className="w-[80%] outline-none border-none h-[50px] px-[10px] rounded-lg my-[10px] bg-white" 
      placeholder="Password"onChange={(e)=>setPassword(e.target.value)}
      value={password}/>

      <button onClick={handleClick} className="bg-[#07f0f4] px-[20px] py-[10px] my-[10px] rounded-lg font-semibold">
        Log In
      </button>
      <p className='text-white cursor-pointer' onClick={()=>navigate('/signup')}>New Here? Create Account. <span className="text-[#07f0f4] font-semibold">Sign Up</span> </p>
    </form>
  </div>
);
}

export default Login
