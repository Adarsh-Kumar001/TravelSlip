import React from 'react'
import '../fonts.css'

import { googleLogout } from '@react-oauth/google';

const Profile = ({ user }) => {

  function handleLogout() {
    let confirmLogout = confirm("Are you sure?");
    if (confirmLogout) {
      googleLogout();
      localStorage.removeItem("user");
      window.location.href = '/'
    }
  }

  return (
    <div className='roboto-400 w-full min-h-[90vh] bg-gray-100'>
      <h3 className='ml-10 pt-10 text-2xl flex gap-2 font-medium'>Welcome<h3 className='text-blue-600'>{user?.name}</h3></h3>

      <div className='w-full'>
        <p className='ml-10 mt-10 text-lg gap-2 absolute right-0 top-20 mr-10'><img className='rounded-full w-[10rem]' src={user?.picture} /></p>
        <p className='ml-10 mt-10 text-lg flex gap-2'>Name : <p className='google-sans-code-400'>{user?.name}</p></p>
        <p className='ml-10 mt-5 text-lg flex gap-2'>Email ID : <p className='google-sans-code-400'>{user?.email}</p></p>
      </div>

      <p onClick={(e) => handleLogout()} className='bg-red-500 hover:bg-red-600 w-[8rem] mt-20 text-white h-[2.5rem] hover:cursor-pointer rounded-lg shadow-lg m-auto flex justify-center items-center'>Logout</p>

    </div>
  )
}

export default Profile