import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'

export const dataContext = createContext();

function UserContext({children}) {
    const serverUrl = "http://localhost:4000";

    const [userData,setUserData] = useState(null);

    const getUserData = async()=>{
      try {
        const {data} = await axios.get(serverUrl+ "/getuserdata",
          {
            withCredentials:true
          }
        );
        const userInfo = data.user;
        
       setUserData(userInfo);
      } catch (error) {
        console.log(error);
        
      }
       
    }

    useEffect(()=>{
       getUserData();
    })

    const value={
        serverUrl,
        userData,
        setUserData,
        getUserData
    }

    
  return (
    <dataContext.Provider value={value}>
     {children}
    </dataContext.Provider>
  )
}

export default UserContext
