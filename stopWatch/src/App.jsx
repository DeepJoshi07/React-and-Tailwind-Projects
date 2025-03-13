import React, { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [time,setTime] = useState(0);
  const [running,setRunning] = useState(false);
  useEffect(()=>{
      let interval;
      if(running){
        interval = setInterval(()=>{
          setTime((prevtime)=>(
            prevtime +10
          ))
        },10)
      }else if(!running){
        clearInterval(interval)
      }
      return ()=> clearInterval(interval);
  },[running])
  return (
    <>
      <div className='text-center'>
        <h1 className='font-bold text-2xl py-5'>01-StopWatch</h1>
        <span className='font-bold  py-5'>{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
        <span className='font-bold  py-5'>{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span>
        <span className='font-bold  py-5'>{("0" +(time/10)%100).slice(-2)}</span>
      </div>
      <div className='text-center'>
        {running ?(
          <button className='border-xl rounded-xl m-3 bg-black text-white py-2 px-5' onClick={()=>{setRunning(false)}}>Stop</button>
        ):(
          <button className='border-xl m-3 rounded-xl bg-black text-white py-2 px-5' onClick={()=>{setRunning(true)}}>Start</button>
        ) }
        <button className='border-xl m-3 rounded-xl bg-[#ff0000] text-white py-2 px-5' onClick={()=>{setTime(0)}}>Reset</button>
      </div>
    </>
  )
}

export default App
