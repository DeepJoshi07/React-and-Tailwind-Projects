import React from 'react'

function Input({task,setTask,setList,list}) {

  return (
    <div>
      <input className="bg-[#f5f5f5] h-11 w-100 px-3 rounded-lg" 
      type="text" 
      placeholder='Add tasks to do' 
      value={task} 
      onChange={(e)=>setTask(e.target.value)}/>
      <button className='bg-black text-white py-2 px-4 ml-2 rounded-lg' onClick={()=>{setList([...list, task] ); setTask("");}}>Add</button>
    </div>
  )
}

export default Input
