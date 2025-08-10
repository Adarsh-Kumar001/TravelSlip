import React, { useState, useEffect } from 'react'
import '../fonts.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ user }) => {

  const location = useLocation();

  const [isHomePage, setisHomePage] = useState(0);
  const [isCreatePage, setisCreatePage] = useState(0);
  const [isAboutPage, setisAboutPage] = useState(0);

  const [profilePictureUrl, setprofilePictureUrl] = useState('')

  useEffect(() => {
    setprofilePictureUrl(user?.picture);
  }, [user])
  

  useEffect(() => {

    if (location.pathname == '/') {
      setisHomePage(1);
      setisCreatePage(0);
      setisAboutPage(0);
    }
    if (location.pathname == '/create') {
      setisCreatePage(1);
      setisHomePage(0);
      setisAboutPage(0);
    }
    if (location.pathname == '/about') {
      setisAboutPage(1);
      setisHomePage(0);
      setisCreatePage(0);
    }

  }, [location.pathname])


  return (
    <div className='google-sans-code-400 w-full flex justify-between bg-gray-100 h-[4.5rem]'>
      <Link to='/' className='nova-cut-regular hover:cursor-pointer text-blue-700 text-3xl my-auto ml-5'>
        <h1>TravelSlip</h1>
      </Link>
      <div className='flex gap-5 my-auto mr-5 text-lg'>
        <Link to='/' className={`${isHomePage && 'underline'} hover:underline underline-offset-8`}>
          Home
        </Link>
        <Link to='/create' className={`${isCreatePage && 'underline'} hover:underline underline-offset-8`}>
          Create
        </Link>
        <Link to='/about' className={`${isAboutPage && 'underline'} hover:underline underline-offset-8`}>
          About
        </Link>
      </div>
      <div>

        {user ?
          <div>
           <img src={profilePictureUrl} className='mt-2.5 mr-5 w-[2.5rem] rounded-full border-2 hover:border-blue-600 hover:cursor-pointer' onClick={(e)=>{window.location.href='/profile'}}/>
          </div> :
          <p onClick={(e)=>window.location.href='/login'} className='roboto-400 bg-blue-500 mt-3.5 mr-5 hover:bg-blue-600 w-[6rem] text-white h-[2.5rem] hover:cursor-pointer rounded-lg shadow-lg m-auto flex justify-center items-center'>Login</p>
          }
      </div>

    </div>
  )
}

export default Navbar