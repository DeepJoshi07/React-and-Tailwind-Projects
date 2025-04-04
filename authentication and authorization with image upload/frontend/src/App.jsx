import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from './pages/Home'
import  { dataContext } from './Context/UserContext'

function App() {
  const {userData} = useContext(dataContext);
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route path='/' element={userData?<Home/>:<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
