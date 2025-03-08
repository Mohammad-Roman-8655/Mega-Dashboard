import React from 'react'
import { useState } from 'react';
const StudentsData = [
  {
    standard: "10th",
    studentName: "Aarav Sharma",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    division: "A",
    address: "123, MG Road, Mumbai, India"
  },
  {
    standard: "9th",
    studentName: "Pooja Verma",
    photo: "https://randomuser.me/api/portraits/women/20.jpg",
    division: "B",
    address: "56, Park Avenue, Delhi, India"
  },
  {
    standard: "8th",
    studentName: "Rahul Mehta",
    photo: "https://randomuser.me/api/portraits/men/30.jpg",
    division: "C",
    address: "78, Lake View Road, Bengaluru, India"
  },
  {
    standard: "12th",
    studentName: "Sneha Kapoor",
    photo: "https://randomuser.me/api/portraits/women/35.jpg",
    division: "A",
    address: "90, Green Valley, Kolkata, India"
  },
  {
    standard: "11th",
    studentName: "Vikram Singh",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    division: "B",
    address: "34, Central Plaza, Pune, India"
  }
];
function Student() {

 
 
   const [isAddStudentModalOpen,setIsAddStudentModalOpen]=useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [currentStudent, setCurrentStudent] = useState(null);
 
   const openModal = (Student) => {
     setCurrentStudent(Student);
     setIsModalOpen(true);
 
   };
   const openStudentModal = () => {
     
     setIsAddStudentModalOpen(true);
     
   };
   const closeStudentModal = () => {
     
     setIsAddStudentModalOpen(false);
     
   };
 
   const closeModal = () => {
     setIsModalOpen(false);
     setCurrentStudent(null);
   };
 
   return (
     <div className="p-6">
       <h1 className="text-2xl font-bold mb-15 text-center ">Students Management</h1>
       <div className='flex justify-around items-end mb-5 '>
       <div className="Standards lg:w-[40%] md:w-[90%] sm:w-[90%] w-[90%]  flex flex-col ">
                   <label for="Standards" className='font-semibold mb-2'>Select Class<span className='text-red-600 font-bold'>*</span></label>
 
                   <select id="Standards" className='border-2  h-10 rounded-md '>
                      <option value="Standards" className='p-2'>Select Class </option>
                      <option value="Pre-Nursery">Pre-Nursery</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="1">1st</option>
                      <option value="2">2nd</option>
                      <option value="3">3rd</option>
                      <option value="4">4th</option>
                      <option value="5">5th</option>
                      <option value="6">6th</option>
                      <option value="7">7th</option>
                      <option value="8">8th</option>
                      <option value="9">9th</option>
                      <option value="10">10th</option>
                      <option value="11">11th</option>
                      <option value="12">12th</option>
                   </select>
       </div> 
      
       <button className='w-[20%] h-10 mt  lg:text-xl md:text-xl sm:text-lg text-lg text-white font-bold  border-2 rounded-md bg-blue-500 border-blue-950 hover:border-black '>Search</button>
    
       </div>
       <button className="bg-blue-800 text-white px-3 py-1 rounded mt-10 mb-5 font-semibold   " onClick={openStudentModal}>Add Student</button>
       <table className="min-w-full bg-white border border-gray-300">
         <thead>
           <tr className="bg-gray-200">
            <th className="p-3 border">Serial No.</th>
             <th className="p-3 border">Student Name</th>
             <th className="p-3 border">Standard</th>
             <th className="p-3 border">Division</th>
             <th className="p-3 border">Address</th>
             <th className="p-3 border">Photo</th>
            
             <th className="p-3 border">Actions</th>
           </tr>
         </thead>
         <tbody>
           {StudentsData.map((Student, index) => (
             <tr key={index} className="border">
               <td className="p-3 border text-center ">{index+1}</td>
               <td className="p-3 border text-center ">{Student.studentName}</td>
               <td className="p-3 border text-center ">{Student.standard}</td>
               <td className="p-3 border text-center ">{Student.division}</td>
               <td className="p-3 border text-center ">{Student.address}</td>
               <td className="p-3 border text-center "><img src={Student.photo} alt="img" /></td>
               <td className="p-3 mt-10 flex gap-2">
                 
                 <button
                   className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                   onClick={() => openModal(Student)}
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
             <h2 className="text-xl font-bold mb-4">Edit Student</h2>
             <form>
               <label className="block mb-2">Standard <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 defaultValue={currentStudent.standard}
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Student Name <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 defaultValue={currentStudent.studentName}
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Division <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 defaultValue={currentStudent.division}
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Photo <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 defaultValue={currentStudent.photo}
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Address <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 defaultValue={currentStudent.address}
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
 
       {isAddStudentModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-[50%]">
            <h2 className="text-xl font-bold mb-4">Add Student</h2>
            <form>
            <label className="block mb-2">Standard <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
              
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Subject Name <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Division <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Photo <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Address <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 className="border p-2 w-full mb-4"
               />
                
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={closeStudentModal}
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


export default Student