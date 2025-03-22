import React, { useState } from 'react'
import Input from './components/Input'
import Todos from './components/Todos'

function App() {
  const [task,setTask] = useState("");
  const [list,setList] = useState([]);
  return (
    <div className='text-center'>
      <h1 className='text-3xl py-3 font-bold'>Todo List</h1>
      <Input 
      task={task} 
      setTask={setTask} 
      setList={setList}
      list={list}/>
      <div className="tasks grid grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12 m-5">
        {
          list.map((item,index)=><Todos key={index} setList={setList} item={item}/>)
        }
      </div>
    
      
    </div>
  )
}

export default App
