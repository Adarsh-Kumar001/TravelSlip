import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import Footer from './components/Footer'
import Login from './pages/Login'
import Profile from './pages/Profile'

function App() {

  const [user, setuser] = useState(null)

  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("user")));
  }, [])
  
  
  return (
    <>
      <Navbar user={user}/>
      <Routes>
      <Route path='/' element={<Home user={user}/>}/>
      <Route path='/create' element={<Create/>}/> 
      <Route path='/login' element={<Login/>}/> 
       <Route path='/profile' element={<Profile user={user}/>}/> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App
