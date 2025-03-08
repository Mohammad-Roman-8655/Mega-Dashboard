import React from 'react'
import { useState } from 'react';
const TextBooksData = [
  {
    standard: "10th",
    subjectName: "Mathematics",
    textBookUrl: "https://example.com/textbooks/math-10.pdf"
  },
  {
    standard: "12th",
    subjectName: "Physics",
    textBookUrl: "https://example.com/textbooks/physics-12.pdf"
  },
  {
    standard: "9th",
    subjectName: "English",
    textBookUrl: "https://example.com/textbooks/english-9.pdf"
  },
  {
    standard: "11th",
    subjectName: "Chemistry",
    textBookUrl: "https://example.com/textbooks/chemistry-11.pdf"
  },
  {
    standard: "8th",
    subjectName: "History",
    textBookUrl: "https://example.com/textbooks/history-8.pdf"
  }
];
function TextBook() {



  const [isAddTextBookModalOpen,setIsAddTextBookModalOpen]=useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTextBook, setCurrentTextBook] = useState(null);

  const openModal = (TextBook) => {
    setCurrentTextBook(TextBook);
    setIsModalOpen(true);

  };
  const openTextBookModal = () => {
    
    setIsAddTextBookModalOpen(true);
    
  };
  const closeTextBookModal = () => {
    
    setIsAddTextBookModalOpen(false);
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTextBook(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-15 text-center ">Text Books Management</h1>
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
      <button className="bg-blue-800 text-white px-3 py-1 rounded mt-10 mb-5 font-semibold   " onClick={openTextBookModal}>Add TextBook</button>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
           <th className="p-3 border">Serial No.</th>
            <th className="p-3 border">Standard</th>
            <th className="p-3 border">Subject Name</th>
            <th className="p-3 border">Link</th>
           
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {TextBooksData.map((TextBook, index) => (
            <tr key={index} className="border">
              <td className="p-3 border text-center ">{index+1}</td>
              <td className="p-3 border text-center ">{TextBook.standard}</td>
              <td className="p-3 border text-center ">{TextBook.subjectName}</td>
              <td className="p-3 border text-center"><a  href={TextBook.textBookUrl}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[50%] ">Download</button></a></td>
              <td className="p-3 border flex gap-2">
                
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                  onClick={() => openModal(TextBook)}
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
            <h2 className="text-xl font-bold mb-4">Edit TextBook</h2>
            <form>
              <label className="block mb-2">Standard <span className='text-red-700 font-semibold'>*</span></label>
              <input
                type="text"
                defaultValue={currentTextBook.standard}
                className="border p-2 w-full mb-4"
              />
              <label className="block mb-2">Subject Name <span className='text-red-700 font-semibold'>*</span></label>
              <input
                type="text"
                defaultValue={currentTextBook.subjectName}
                className="border p-2 w-full mb-4"
              />
               <label className="block mb-2">Url <span className='text-red-700 font-semibold'>*</span></label>
              <input
                type="text"
                defaultValue={currentTextBook.textBookUrl}
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

      {isAddTextBookModalOpen && (
         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
         <div className="bg-white p-6 rounded shadow-lg w-[50%]">
           <h2 className="text-xl font-bold mb-4">Add TextBook</h2>
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
              <label className="block mb-2">Url <span className='text-red-700 font-semibold'>*</span></label>
             <input
               type="text"
               
               className="border p-2 w-full mb-4"
             />
             <div className="flex justify-end gap-2">
               <button
                 type="button"
                 className="bg-gray-500 text-white px-4 py-2 rounded"
                 onClick={closeTextBookModal}
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


export default TextBook