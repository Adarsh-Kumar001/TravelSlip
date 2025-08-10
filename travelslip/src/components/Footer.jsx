import React from 'react'
import '../fonts.css'

import GitHubLogo from '../assets/GitHub.png'
import GmailLogo from '../assets/Gmail.png'
import LinkedInLogo from '../assets/LinkedIn.png'

const Footer = () => {
  return (
    <div className='text-white roboto-400 w-full bg-blue-500 flex flex-col'>
        <div className='flex justify-between'>
             <h2 className='nova-cut-regular mt-10 text-2xl ml-5'>TravelSlip</h2>
             <div className='flex mt-10 mr-5 gap-2'>
              <img src={GitHubLogo} alt='github-logo' className='w-[6rem] hover:cursor-pointer' onClick={(e)=>{window.location = 'https://github.com/Adarsh-Kumar001'}}/>
              <img src={LinkedInLogo} alt='linkedin-logo' className='w-[6rem] hover:cursor-pointer' onClick={(e)=>{window.location = 'https://www.linkedin.com/in/adarsh-kumar102004/'}}/>
              <img src={GmailLogo} alt='gmail-logo' className='w-[6rem] hover:cursor-pointer' onClick={(e)=>{window.location = 'mailto:adarshkumar102004@gmail.com'}}/>
             </div>

        </div>
    

      <div className='m-auto mt-6 mb-9 text-gray-200 text-sm'>TravelSlip &copy; 2025</div>
    </div>
  )
}

export default Footer