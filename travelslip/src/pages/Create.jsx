import React, { useState } from 'react'
import Papa from 'papaparse' //for parsing csv file
import '../fonts.css'
import { set } from 'mongoose';

import {MoonLoader} from 'react-spinners'

const Create = () => {

  const [loader, setloader] = useState(0);

  const [travelinfo, settravelinfo] = useState(
    {
      "From": "",
      "To": "",
      "Date": "",
      "Type": "",
    }
  );


  const [csvFile, setcsvFile] = useState(null);

  const [passengers, setPassengers] = useState([]);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setcsvFile(file);


    if (file?.name?.split('.')[1] !== 'csv') {
      alert("Please add a csv file ONLY, no other document types are supported.");
      setcsvFile(null);
    }

    //parsing the csv file uploaded
    Papa.parse(file, {
      header: true, // first row is column name
      skipEmptyLines: true,
      complete: (results) => {
        console.log("Parsed CSV data:", results.data);
        setPassengers(results.data);
      }
    });
  };

  const handleSubmit = async () => {

    setloader(1);

    if (!travelinfo.From || !travelinfo.To || !travelinfo.Date || !travelinfo.Type) {
      alert("Please enter all the travel details!");
      setloader(0);
      return;
    }

    if (passengers.length === 0) {
      alert("Please enter passengers detail to continue!");
      setloader(0);
      return;
    }

    try {

      setloader(1);

      const response = await fetch("http://localhost:5000/api/travel/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          travelinfo,
          passengers
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Travel details saved and emails sent successfully!");
        console.log("Server response:", data);

        setloader(0);

        // Show PDF preview (base64 -> blob -> objectURL)
        if (data.samplePdf) {
          const byteCharacters = atob(data.samplePdf);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: "application/pdf" });
          const pdfUrl = URL.createObjectURL(blob);

          //dispaly the pdf through iframe
          document.getElementById("pdf-preview").innerHTML = `<iframe src="${pdfUrl}" width="100%" height="100%" style="border:none;"></iframe>`;
        }
      } else {
        alert(`Error: ${data.message || "Something went wrong"}`);
        setloader(0);
      }
    } catch (error) {
      console.error("Error submitting travel data:", error);
      alert("Failed to connect to server. Please try again.");
      setloader(0);
    }
  };



  return (
    <div className='roboto-400 flex flex-col bg-gray-100 w-full min-h-[90vh]'>

      <div className='google-sans-code-400 ml-7 mt-10 text-3xl flex gap-2.5'> Create <div className='nova-cut-regular text-blue-600'>Travel</div>Tickets</div>

      <p className='ml-7 mt-3'>Organize your trip details and share them with your passengers in one click.</p>

      <div className='ml-7 mt-10'>

        <div className='google-sans-code-400 mt-2 text-3xl'>Travel Details</div>

        <div className='mt-3 flex justify-between gap-5 mr-5'>

          <div className='flex flex-col gap-2'>
            <div>Travel From</div>
            <input type='text' placeholder='Enter travel start location...' onChange={(e) => { settravelinfo((prev) => ({ ...prev, "From": e.target.value })) }} className='w-[20rem] p-1 border-2 border-black' />
          </div>

          <div className='flex flex-col gap-2'>
            <div>Travel To</div>
            <input type='text' onChange={(e) => { settravelinfo((prev) => ({ ...prev, "To": e.target.value })) }} className='w-[20rem] p-1 border-2 border-black' />
          </div>

          <div className='flex flex-col gap-2'>
            <div>Travel Date</div>
            <input type='date' onChange={(e) => { settravelinfo((prev) => ({ ...prev, "Date": e.target.value })) }} className='w-[10rem] p-1 border-2 border-black' />
          </div>

          <div className='flex flex-col gap-2'>
            <div>Mode of Travel</div>
            <input type='text' placeholder='Enter mode of travel...' onChange={(e) => { settravelinfo((prev) => ({ ...prev, "Type": e.target.value })) }} className='w-[20rem] p-1 border-2 border-black' />
          </div>

        </div>

        <div className='google-sans-code-400 mt-10 text-3xl'>Customer Details</div>

        <div className='mt-3'>Enter CSV file of customer details to continue</div>

        <input type='file' accept='.csv' onChange={(e) => { handleFileChange(e) }} className={`${passengers.length ? 'bg-blue-500' : 'bg-gray-400'} text-white p-2 mt-5 hover:cursor-pointer rounded-md h-[3rem] w-[15rem]`} />

        {/* preview of passengers */}
        {passengers.length > 0 && (
          <div className='mt-5'>
            <h3 className='font-bold'>Passenger List Preview:</h3>
            <ul className='list-disc ml-5'>

              <li>{passengers[0].Name} - {passengers[0].Email}</li>
              <li>{passengers[1].Name} - {passengers[1].Email}</li>
              <li>{passengers[2].Name} - {passengers[2].Email}</li>


            </ul>
          </div>
        )}

        <p onClick={(e) => handleSubmit()} className='bg-blue-500 hover:bg-blue-600 w-[8rem] mt-20 mb-20 text-white h-[2.5rem] hover:cursor-pointer rounded-lg shadow-lg m-auto flex justify-center items-center'>
          
          {loader?<MoonLoader size={20}  color="rgba(255, 255, 255, 1)"/>:"Submit"}
          
          </p>

      </div>


     <div id="pdf-preview" className="mt-8 h-[600px]"></div>

    </div>
  )
}

export default Create