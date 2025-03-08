import React from 'react'
import { useState } from 'react';
const ManagersData = 
[
  {
    name: "Amit Sharma",
    experience: "5",
    phoneNo: "+918765432100",
    email: "amit.sharma@example.com",
    position: "Senior Manager",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    message: "Dedicated to providing quality education and effective management."
  },
  {
    name: "Priya Verma",
    experience: "5",
    phoneNo: "+919876543210",
    email: "priya.verma@example.com",
    position: "Academic Manager",
    photo: "https://randomuser.me/api/portraits/women/32.jpg",
    message: "Passionate about improving learning experiences for students."
  },
  {
    name: "Rahul Mehta",
    experience: "5",
    phoneNo: "+919988776655",
    email: "rahul.mehta@example.com",
    position: "Operations Manager",
    photo: "https://randomuser.me/api/portraits/men/28.jpg",
    message: "Ensuring smooth academic and administrative operations."
  },
  {
    name: "Sonia Kapoor",
    experience: "5",
    phoneNo: "+918866554433",
    email: "sonia.kapoor@example.com",
    position: "HR Manager",
    photo: "https://randomuser.me/api/portraits/women/19.jpg",
    message: "Focusing on talent acquisition and staff development."
  },
  {
    name: "Vikram Singh",
    experience: "5",
    phoneNo: "+917755443322",
    email: "vikram.singh@example.com",
    position: "Finance Manager",
    photo: "https://randomuser.me/api/portraits/men/50.jpg",
    message: "Managing financial planning and resource allocation effectively."
  }
];

function Manager() {
 
 

   const [isAddManagerModalOpen,setIsAddManagerModalOpen]=useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [currentManager, setCurrentManager] = useState(null);
 
   const openModal = (Manager) => {
     setCurrentManager(Manager);
     setIsModalOpen(true);
 
   };
   const openManagerModal = () => {
     
     setIsAddManagerModalOpen(true);
     
   };
   const closeManagerModal = () => {
     
     setIsAddManagerModalOpen(false);
     
   };
 
   const closeModal = () => {
     setIsModalOpen(false);
     setCurrentManager(null);
   };
 
   return (
     <div className="p-6">
       <h1 className="text-2xl font-bold mb-15 text-center ">Managers Management</h1>
      
       <button className="bg-blue-800 text-white px-3 py-1 rounded mt-10 mb-5 font-semibold   " onClick={openManagerModal}>Add Manager</button>
       <table className="min-w-full bg-white border border-gray-300">
         <thead>
           <tr className="bg-gray-200">
            <th className="p-3 border">Serial No.</th>
             <th className="p-3 border">Name</th>
             <th className="p-3 border">Phone</th>
             <th className="p-3 border">Email</th>
             <th className="p-3 border">Position</th>
             <th className="p-3 border">Experience</th>
             <th className="p-3 border">Photo</th>
            
             <th className="p-3 border">Actions</th>
           </tr>
         </thead>
         <tbody>
           {ManagersData.map((Manager, index) => (
             <tr key={index} className="border">
               <td className="p-3 border text-center ">{index+1}</td>
               <td className="p-3 border text-center ">{Manager.name}</td>
               <td className="p-3 border text-center ">{Manager.phoneNo}</td>
               <td className="p-3 border text-center ">{Manager.email}</td>
               <td className="p-3 border text-center ">{Manager.position}</td>
               <td className="p-3 border text-center ">{Manager.experience}</td>
               <td className="p-3 border text-center "><img src={Manager.photo} alt="img" /></td>
             
               <td className="p-3 mt-10 flex gap-2">
                 
                 <button
                   className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                   onClick={() => openModal(Manager)}
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
             <h2 className="text-xl font-bold mb-4">Edit Manager</h2>
             <form>
               <label className="block mb-2">Name <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 defaultValue={currentManager.name}
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Phone No <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 defaultValue={currentManager.phoneNo}
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Email <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 defaultValue={currentManager.email}
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Experience <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 defaultValue={currentManager.experience}
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Position <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 defaultValue={currentManager.position}
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Message <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 defaultValue={currentManager.message}
                 className="border p-2 w-full mb-4"
               />

                <label className="block mb-2">Photo <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 defaultValue={currentManager.photo}
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
 
       {isAddManagerModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-[50%]">
            <h2 className="text-xl font-bold mb-4">Add Manager</h2>
            <form>
            <label className="block mb-2">Name <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
          
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Phone No <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
              
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Email <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Experience <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Position <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Message <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                
                 className="border p-2 w-full mb-4"
               />

                <label className="block mb-2">Photo <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
               
                 className="border p-2 w-full mb-4"
               />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={closeManagerModal}
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
 


export default Manager