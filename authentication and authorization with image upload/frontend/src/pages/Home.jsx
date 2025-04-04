import React, { useContext } from 'react'
import UserContext, { dataContext } from '../Context/UserContext'

function Home() {
    const {userData} = useContext(dataContext);
  return (
    <div className='bg-[#22685a] h-screen w-full text-white'>
       {
        userData.userName
        
       }
      
    </div>
  )
}

export default Home
