import React, { useState } from 'react'
import '../fonts.css'

const Create = () => {

  const [travelName, settravelName] = useState('');
  const [travelDesignnation, settravelDesignnation] = useState('');
  const [travelstartDate, settravelstartDate] = useState('');
  const [travelendDate, settravelendDate] = useState('');


  return (
    <div className='roboto-400 flex flex-col bg-gray-100 w-full min-h-[90vh]'>

      <div className='google-sans-code-400 ml-7 mt-10 text-3xl flex gap-2.5'> Create <div className='nova-cut-regular text-blue-600'>Travel</div>Tickets</div>

      <p className='ml-7 mt-3'>Organize your trip details and share them with your passengers in one click.</p>

      <div className='ml-7 mt-10'>

        <div className='google-sans-code-400 mt-2 text-3xl'>Travel Details</div>

        <div className='mt-3 flex justify-between gap-5 mr-5'>

          <div className='flex flex-col gap-2'>
            <div>Travel Name</div>
            <input type='text' placeholder='Enter travel name...' onChange={(e) => { settravelName(e.target.value) }} className='w-[20rem] p-1 border-2 border-black active:border-blue-700 {}:' />
          </div>

          <div className='flex flex-col gap-2'>
            <div>Travel Start Date</div>
            <input type='date' onChange={(e) => { settravelstartDate(e.target.value) }} className='w-[10rem] p-1 border-2 border-black' />
          </div>

          <div className='flex flex-col gap-2'>
            <div>Travel End Date</div>
            <input type='date' onChange={(e) => { settravelendDate(e.target.value) }} className='w-[10rem] p-1 border-2 border-black' />
          </div>

          <div className='flex flex-col gap-2'>
            <div>Travel Designation</div>
            <input type='text' placeholder='Enter travel designation...' onChange={(e) => { settravelDesignnation(e.target.value) }} className='w-[20rem] p-1 border-2 border-black' />
          </div>

        </div>

         <div className='google-sans-code-400 mt-10 text-3xl'>Customer Details</div>

         <div>Enter CSV file of customer details to continue</div>

         <input type='file'/>

      </div>

    </div>
  )
}

export default Create