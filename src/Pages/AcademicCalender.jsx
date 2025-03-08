import React from 'react'
import { useState } from 'react';
const AcademicCalendersData = [
  {
    eventName: "New Academic Session Begins",
    dayName: "Monday",
    date: "2025-04-01"
  },
  {
    eventName: "Independence Day Celebration",
    dayName: "Friday",
    date: "2025-08-15"
  },
  {
    eventName: "Half-Yearly Exams Start",
    dayName: "Wednesday",
    date: "2025-09-10"
  },
  {
    eventName: "Winter Vacation Starts",
    dayName: "Saturday",
    date: "2025-12-20"
  },
  {
    eventName: "Annual Sports Day",
    dayName: "Thursday",
    date: "2025-02-05"
  }
];

function AcademicCalender() {

  
  
    const [isAddAcademicCalenderModalOpen,setIsAddAcademicCalenderModalOpen]=useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentAcademicCalender, setCurrentAcademicCalender] = useState(null);
  
    const openModal = (AcademicCalender) => {
      setCurrentAcademicCalender(AcademicCalender);
      setIsModalOpen(true);
  
    };
    const openAcademicCalenderModal = () => {
      
      setIsAddAcademicCalenderModalOpen(true);
      
    };
    const closeAcademicCalenderModal = () => {
      
      setIsAddAcademicCalenderModalOpen(false);
      
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setCurrentAcademicCalender(null);
    };
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-15 text-center ">Academic Calender Management</h1>
       
        <button className="bg-blue-800 text-white px-3 py-1 rounded mt-10 mb-5 font-semibold   " onClick={openAcademicCalenderModal}>Add AcademicCalender</button>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
             <th className="p-3 border">Serial No.</th>
              <th className="p-3 border">Event Name</th>
              <th className="p-3 border">Day</th>
              <th className="p-3 border">Date</th>
             
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {AcademicCalendersData.map((AcademicCalender, index) => (
              <tr key={index} className="border">
                <td className="p-3 border text-center ">{index+1}</td>
                <td className="p-3 border text-center ">{AcademicCalender.eventName}</td>
                <td className="p-3 border text-center ">{AcademicCalender.dayName}</td>
                <td className="p-3 border text-center ">{AcademicCalender.date}</td>
                
                <td className="p-3 border flex gap-2">
                  
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                    onClick={() => openModal(AcademicCalender)}
                  >
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded w-[50%]">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-[50%]">
              <h2 className="text-xl font-bold mb-4">Edit AcademicCalender</h2>
              <form>
                <label className="block mb-2">Event Name <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  defaultValue={currentAcademicCalender.eventName}
                  className="border p-2 w-full mb-4"
                />
                <label className="block mb-2">Day <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  defaultValue={currentAcademicCalender.dayName}
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Date <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  defaultValue={currentAcademicCalender.date}
                  className="border p-2 w-full mb-4"
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                </div>
              </form>
            </div>
          </div>
        )}
  
        {isAddAcademicCalenderModalOpen && (
           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
           <div className="bg-white p-6 rounded shadow-lg w-[50%]">
             <h2 className="text-xl font-bold mb-4">Add AcademicCalender</h2>
             <form>
               <label className="block mb-2 ">Event Name <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Day <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Date <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 
                 className="border p-2 w-full mb-4"
               />
               <div className="flex justify-end gap-2">
                 <button
                   type="button"
                   className="bg-gray-500 text-white px-4 py-2 rounded"
                   onClick={closeAcademicCalenderModal}
                 >
                   Cancel
                 </button>
                 <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
               </div>
             </form>
           </div>
         </div>
        )}
      </div>
    );
  }


export default AcademicCalender