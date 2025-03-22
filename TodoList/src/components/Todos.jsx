import React from 'react'

function Todos({item,setList}) {
    function handleDelete(){
        setList((list)=>list = list.filter((li)=> li !== item ))
       
       
    }

  return (
    <div className='border border-[#d3d3d3] rounded-lg p-4 m-2 flex flex-col items-center text-center justify-start'>
      <p>{item}</p>
      <button className='px-5 py-2 m-2 bg-[#b71c1c] rounded-lg text-white' onClick={handleDelete}>delete</button>
    </div>
  )
}

export default Todos
