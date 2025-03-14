import React from 'react'
import { useState,useEffect } from 'react';
// const SyllabussData = [
//   {
//     standard: "10th",
//     subjectName: "Mathematics",
//     syllabusUrl: "https://example.com/syllabus/math-10.pdf"
//   },
//   {
//     standard: "12th",
//     subjectName: "Physics",
//     syllabusUrl: "https://example.com/syllabus/physics-12.pdf"
//   },
//   {
//     standard: "9th",
//     subjectName: "English",
//     syllabusUrl: "https://example.com/syllabus/english-9.pdf"
//   },
//   {
//     standard: "11th",
//     subjectName: "Chemistry",
//     syllabusUrl: "https://example.com/syllabus/chemistry-11.pdf"
//   },
//   {
//     standard: "8th",
//     subjectName: "History",
//     syllabusUrl: "https://example.com/syllabus/history-8.pdf"
//   }
// ];
function Syllabus() {
 const [isAddSyllabusModalOpen,setIsAddSyllabusModalOpen]=useState(false);
       const [isModalOpen, setIsModalOpen] = useState(false);
       const [currentSyllabus, setCurrentSyllabus] = useState(null);
     
       const openModal = (Syllabus) => {
        setCurrentSyllabus(Syllabus);
        setEditingSyllabus(Syllabus); // This ensures _id is included
        setIsModalOpen(true);
      };
      
       const openSyllabusModal = () => {
         
         setIsAddSyllabusModalOpen(true);
         
       };
       const closeSyllabusModal = () => {
         
         setIsAddSyllabusModalOpen(false);
         
       };
     
       const closeModal = () => {
         setIsModalOpen(false);
         setCurrentSyllabus(null);
       };
       const [newSyllabus, setNewSyllabus] = useState({
        standard: "",
        subjectName: "",
        syllabusUrl: ""
       
    });
    
    const handleInputChange = (e) => {
      setNewSyllabus({ ...newSyllabus, [e.target.name]: e.target.value });
    };
    
    const handleAddSyllabus = async () => {
      try {
        const response = await fetch("http://localhost:8080/Syllabus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSyllabus),
        });
    
        if (response.ok) {
          alert("Syllabus added successfully!");
          closeSyllabusModal();
          fetchSyllabuses(); // Refresh the list
        } else {
          alert("Failed to add Syllabus.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    const [editingSyllabus, setEditingSyllabus] = useState(null);
    
    const handleEditInputChange = (e) => {
      setEditingSyllabus({ ...editingSyllabus, [e.target.name]: e.target.value });
    };
    
    
    const handleUpdateSyllabus = async () => {
      try {
        const response = await fetch(`http://localhost:8080/Syllabus/${editingSyllabus._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingSyllabus),
        });
    
        if (response.ok) {
          alert("Syllabus updated successfully!");
          closeModal();
          fetchSyllabuses(); // Refresh the list
        } else {
          alert("Failed to update Syllabus.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    const handleDeleteSyllabus = async (id) => {
      if (!window.confirm("Are you sure you want to delete this Syllabus?")) return;
    
      try {
        const response = await fetch(`http://localhost:8080/Syllabus/${id}`, {
          method: "DELETE",
        });
    
        if (response.ok) {
          alert("Syllabus deleted successfully!");
          fetchSyllabuses(); // Refresh the list
        } else {
          alert("Failed to delete Syllabus.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    const [Syllabuses, setSyllabuses] = useState([]);
      const [selectedStandard, setSelectedStandard] = useState(""); // State to store selected class
   
        // Fetch students with optional filtering by standard
        const fetchSyllabuses = async (standard = "") => {
          try {
            const url = standard
              ? `http://localhost:8080/Syllabus?standard=${standard}`
              : "http://localhost:8080/Syllabus";
            const response = await fetch(url);
            const data = await response.json();
            setSyllabuses(data);
          } catch (error) {
            console.error("Error:", error);
          }
        };
      
        // Fetch all students on component mount
        useEffect(() => {
          fetchSyllabuses();
        }, []);
      
        // Handle class selection change
        const handleStandardChange = (e) => {
          setSelectedStandard(e.target.value);
        };
         
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-15 text-center ">Syllabus Management</h1>
        <div className='flex justify-around items-end mb-5 '>
        <div className="Standards lg:w-[40%] md:w-[90%] sm:w-[90%] w-[90%]  flex flex-col ">
                    <label htmlFor="Standards" className='font-semibold mb-2'  >Select Class<span className='text-red-600 font-bold'>*</span></label>
  
                    <select id="Standards" className='border-2  h-10 rounded-md ' value={selectedStandard} onChange={handleStandardChange}>
                    <option value="Standards" className='p-2'>Select Class </option>
                      <option value="Pre-Nursery">Pre-Nursery</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="1st">1st</option>
                      <option value="2nd">2nd</option>
                      <option value="3rd">3rd</option>
                      <option value="4th">4th</option>
                      <option value="5th">5th</option>
                      <option value="6th">6th</option>
                      <option value="7th">7th</option>
                      <option value="8th">8th</option>
                      <option value="9th">9th</option>
                      <option value="10th">10th</option>
                      <option value="11th">11th</option>
                      <option value="12th">12th</option>
                    </select>
        </div> 
       
        <button  onClick={() => fetchSyllabuses(selectedStandard)} className='w-[20%] h-10 mt  lg:text-xl md:text-xl sm:text-lg text-lg text-white font-bold  border-2 rounded-md bg-blue-500 border-blue-950 hover:border-black '>Search</button>
        <button  onClick={() => fetchSyllabuses('')} className='w-[20%] h-10 mt  lg:text-xl md:text-xl sm:text-lg text-lg text-white font-semibold  border-2 rounded-md bg-blue-500 border-blue-950 hover:border-black '>Remove Filter</button>
        </div>
        <button className="bg-blue-800 text-white px-3 py-1 rounded mt-10 mb-5 font-semibold   " onClick={openSyllabusModal}>Add Syllabus</button>
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
            {Syllabuses.map((Syllabus, index) => (
              <tr key={index} className="border">
                <td className="p-3 border text-center ">{index+1}</td>
                <td className="p-3 border text-center ">{Syllabus.standard}</td>
                <td className="p-3 border text-center ">{Syllabus.subjectName}</td>
                <td className="p-3 border text-center"><a  href={Syllabus.syllabusUrl}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[50%] ">Download</button></a></td>
                <td className="p-3 border flex gap-2">
                  
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                    onClick={() => openModal(Syllabus)}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteSyllabus(Syllabus._id)} className="bg-red-500 text-white px-3 py-1 rounded w-[50%]">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-[50%]">
              <h2 className="text-xl font-bold mb-4">Edit Syllabus</h2>
              <form  onSubmit={(e) => { e.preventDefault(); handleUpdateSyllabus(); }}>
                <label className="block mb-2">Standard <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="standard" 
                  onChange={handleEditInputChange} 
                  value={editingSyllabus?.standard || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                <label className="block mb-2">Subject Name <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="subjectName" 
                  onChange={handleEditInputChange} 
                  value={editingSyllabus?.subjectName || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Url <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="syllabusUrl" 
                  onChange={handleEditInputChange} 
                  value={editingSyllabus?.syllabusUrl || ''} 
                  required
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
                  <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Save</button>
                </div>
              </form>
            </div>
          </div>
        )}
  
        {isAddSyllabusModalOpen && (
           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
           <div className="bg-white p-6 rounded shadow-lg w-[50%]">
             <h2 className="text-xl font-bold mb-4">Add Syllabus</h2>
             <form onSubmit={(e) => { e.preventDefault(); handleAddSyllabus(); }}>
               <label className="block mb-2 ">Standard <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="standard" 
                  onChange={handleInputChange} 
                  value={newSyllabus.standard} 
                  placeholder="Standard" 
                  required
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Subject Name <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="subjectName" 
                  onChange={handleInputChange} 
                  value={newSyllabus.subjectName} 
                  placeholder="Subject Name" 
                  required
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Url <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="syllabusUrl" 
                  onChange={handleInputChange} 
                  value={newSyllabus.syllabusUrl} 
                  placeholder="Syllabus Url" 
                  required
                 className="border p-2 w-full mb-4"
               />
               <div className="flex justify-end gap-2">
                 <button
                   type="button"
                   className="bg-gray-500 text-white px-4 py-2 rounded"
                   onClick={closeSyllabusModal}
                 >
                   Cancel
                 </button>
                 <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Save</button>
               </div>
             </form>
           </div>
         </div>
        )}
      </div>
    );
  }


export default Syllabus