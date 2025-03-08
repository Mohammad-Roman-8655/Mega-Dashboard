import React from 'react'
import { useState } from 'react';

const AssignmentsData = [
  
    {
      standard: "10th",
      subjectName: "Mathematics",
      subjectAssignmentSummerUrl: "https://example.com/assignments/math-summer-10.pdf",
      subjectAssignmentWinterUrl: "https://example.com/assignments/math-winter-10.pdf"
    },
    {
      standard: "12th",
      subjectName: "Physics",
      subjectAssignmentSummerUrl: "https://example.com/assignments/physics-summer-12.pdf",
      subjectAssignmentWinterUrl: "https://example.com/assignments/physics-winter-12.pdf"
    },
    {
      standard: "9th",
      subjectName: "English",
      subjectAssignmentSummerUrl: "https://example.com/assignments/english-summer-9.pdf",
      subjectAssignmentWinterUrl: "https://example.com/assignments/english-winter-9.pdf"
    },
    {
      standard: "11th",
      subjectName: "Chemistry",
      subjectAssignmentSummerUrl: "https://example.com/assignments/chemistry-summer-11.pdf",
      subjectAssignmentWinterUrl: "https://example.com/assignments/chemistry-winter-11.pdf"
    },
    {
      standard: "8th",
      subjectName: "History",
      subjectAssignmentSummerUrl: "https://example.com/assignments/history-summer-8.pdf",
      subjectAssignmentWinterUrl: "https://example.com/assignments/history-winter-8.pdf"
    }
];
function Assignment() {



  const [isAddAssignmentModalOpen,setIsAddAssignmentModalOpen]=useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAssignment, setCurrentAssignment] = useState(null);

  const openModal = (Assignment) => {
    setCurrentAssignment(Assignment);
    setIsModalOpen(true);

  };
  const openAssignmentModal = () => {
    
    setIsAddAssignmentModalOpen(true);
    
  };
  const closeAssignmentModal = () => {
    
    setIsAddAssignmentModalOpen(false);
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentAssignment(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-15 text-center ">Assignment Management</h1>
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
      <button className="bg-blue-800 text-white px-3 py-1 rounded mt-10 mb-5 font-semibold   " onClick={openAssignmentModal}>Add Assignment</button>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
           <th className="p-3 border">Serial No.</th>
            <th className="p-3 border">Standard</th>
            <th className="p-3 border">Subject Name</th>
            <th className="p-3 border">Summer Assignment Link</th>
            <th className="p-3 border">Winter Assignment Link</th>
           
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {AssignmentsData.map((Assignment, index) => (
            <tr key={index} className="border">
              <td className="p-3 border text-center ">{index+1}</td>
              <td className="p-3 border text-center ">{Assignment.standard}</td>
              <td className="p-3 border text-center ">{Assignment.subjectName}</td>
              <td className="p-3 border text-center"><a  href={Assignment.subjectAssignmentSummerUrl}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[50%] ">Download</button></a></td>
              <td className="p-3 border text-center"><a  href={Assignment.subjectAssignmentWinterUrl}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[50%] ">Download</button></a></td>
              <td className="p-3 border flex gap-2">
                
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                  onClick={() => openModal(Assignment)}
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
            <h2 className="text-xl font-bold mb-4">Edit Assignment</h2>
            <form>
              <label className="block mb-2">Standard <span className='text-red-700 font-semibold'>*</span></label>
              <input
                type="text"
                defaultValue={currentAssignment.standard}
                className="border p-2 w-full mb-4"
              />
              <label className="block mb-2">Subject Name <span className='text-red-700 font-semibold'>*</span></label>
              <input
                type="text"
                defaultValue={currentAssignment.subjectName}
                className="border p-2 w-full mb-4"
              />
               <label className="block mb-2">Summer Assignment Url <span className='text-red-700 font-semibold'>*</span></label>
              <input
                type="text"
                defaultValue={currentAssignment.subjectAssignmentSummerUrl}
                className="border p-2 w-full mb-4"
              />
              <label className="block mb-2">Winter Assignment Url <span className='text-red-700 font-semibold'>*</span></label>
              <input
                type="text"
                defaultValue={currentAssignment.subjectAssignmentWinterUrl}
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

      {isAddAssignmentModalOpen && (
         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
         <div className="bg-white p-6 rounded shadow-lg w-[50%]">
           <h2 className="text-xl font-bold mb-4">Add Assignment</h2>
           <form>
             <label className="block mb-2 ">Standard <span className='text-red-700 font-semibold'>*</span></label>
             <input
               type="text"
               
               className="border p-2 w-full mb-4"
             />
             <label className="block mb-2">Subject Name <span className='text-red-700 font-semibold'>*</span></label>
             <input
               type="text"
               
               className="border p-2 w-full mb-4"
             />
              <label className="block mb-2">Summer Assignment Url <span className='text-red-700 font-semibold'>*</span></label>
             <input
               type="text"
               
               className="border p-2 w-full mb-4"
             />
              <label className="block mb-2">Winter Assignment Url <span className='text-red-700 font-semibold'>*</span></label>
              <input
                type="text"
               
                className="border p-2 w-full mb-4"
              />
             <div className="flex justify-end gap-2">
               <button
                 type="button"
                 className="bg-gray-500 text-white px-4 py-2 rounded"
                 onClick={closeAssignmentModal}
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


export default Assignment