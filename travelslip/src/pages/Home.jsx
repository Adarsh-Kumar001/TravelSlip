import React, { useEffect } from 'react'
import LanderImg from '../assets/lander.png'
import '../fonts.css'

const Home = ({user}) => {

  return (
    <div className='flex flex-col roboto-400 min-h-[100vh] bg-gray-100'>

      <div className='flex'>

        {/* Hero Section */}
        <div className='w-[50%] pl-10 flex flex-col gap-2.5 justify-center my-auto'>
          <h2 className='google-sans-code-400 flex gap-5 text-4xl justify-center]'>Welcome to <h2 className='nova-cut-regular text-blue-700'>TravelSlip</h2></h2>
          <p className='text-xl text-justify'>
            TravelSlip is your go-to tool for generating polished travel itineraries and ticket PDFs in just a few clicks. Whether you're a travel agent or a frequent traveler, easily upload trip details or a CSV list, customize your itinerary, and instantly generate shareable PDFs synced to Google Drive. Simple, fast, and cloud-connected.
          </p>


          {/* Call to action section */}
          <div className='w-full flex mt-8'>
            <p onClick={(e)=>window.location.href='/create'} className='bg-white hover:bg-gray-50 w-[8rem] h-[2.5rem] hover:cursor-pointer rounded-lg shadow-lg m-auto flex justify-center items-center'>Create Now</p>
            { user ?
              <p onClick={(e)=>window.location.href='/profile'} className='bg-blue-500 hover:bg-blue-600 w-[8rem] text-white h-[2.5rem] hover:cursor-pointer rounded-lg shadow-lg m-auto flex justify-center items-center'>Profile</p> :
              <p onClick={(e)=>window.location.href='/login'} className='bg-blue-500 hover:bg-blue-600 w-[8rem] text-white h-[2.5rem] hover:cursor-pointer rounded-lg shadow-lg m-auto flex justify-center items-center'>Login</p>
            }
              </div>
        </div>
        <div className='w-[50%] flex justify-center'>
          <img src={LanderImg} alt='lander-icon' className='h-[35rem] w-[30rem]' />
        </div>
      </div>

    </div>
  )
}

export default Home