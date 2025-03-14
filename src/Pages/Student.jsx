import React from 'react'
import { useState,useEffect } from 'react';

function Student() {

  const [isAddStudentModalOpen,setIsAddStudentModalOpen]=useState(false);
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [currentStudent, setCurrentStudent] = useState(null);
   
     const openModal = (Student) => {
      setCurrentStudent(Student);
      setEditingStudent(Student); // This ensures _id is included
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
     const [newStudent, setNewStudent] = useState({
          standard: "",
          studentName: "",
          photo: "",
          division: "",
          address: ""
  });
  
  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };
  
  const handleAddStudent = async () => {
    try {
      const response = await fetch("http://localhost:8080/Student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });
  
      if (response.ok) {
        alert("Student added successfully!");
        closeStudentModal();
        fetchStudents(); // Refresh the list
      } else {
        alert("Failed to add Student.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const [editingStudent, setEditingStudent] = useState(null);
  
  const handleEditInputChange = (e) => {
    setEditingStudent({ ...editingStudent, [e.target.name]: e.target.value });
  };
  
  
  const handleUpdateStudent = async () => {
    try {
      const response = await fetch(`http://localhost:8080/Student/${editingStudent._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingStudent),
      });
  
      if (response.ok) {
        alert("Student updated successfully!");
        closeModal();
        fetchStudents(); // Refresh the list
      } else {
        alert("Failed to update Student.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const handleDeleteStudent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this Student?")) return;
  
    try {
      const response = await fetch(`http://localhost:8080/Student/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        alert("Student deleted successfully!");
        fetchStudents(); // Refresh the list
      } else {
        alert("Failed to delete Student.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const [Students, setStudents] = useState([]);
  const [selectedStandard, setSelectedStandard] = useState(""); // State to store selected class

  // Fetch students with optional filtering by standard
  const fetchStudents = async (standard = "") => {
    try {
      const url = standard
        ? `http://localhost:8080/Student?standard=${standard}`
        : "http://localhost:8080/Student";
      const response = await fetch(url);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Fetch all students on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle class selection change
  const handleStandardChange = (e) => {
    setSelectedStandard(e.target.value);
  };
   
 
   return (
     <div className="p-6">
       <h1 className="text-2xl font-bold mb-15 text-center ">Students Management</h1>
       <div className='flex justify-around items-end mb-5 '>
       <div className="Standards lg:w-[40%] md:w-[90%] sm:w-[90%] w-[90%]  flex flex-col ">
                   <label htmlFor="Standards" className='font-semibold mb-2'>Select Class<span className='text-red-600 font-bold'>*</span></label>
 
                   <select id="Standards" name="standard"  className='border-2  h-10 rounded-md '  value={selectedStandard} onChange={handleStandardChange}>
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
                      <option value="6st">6th</option>
                      <option value="7th">7th</option>
                      <option value="8th">8th</option>
                      <option value="9th">9th</option>
                      <option value="10th">10th</option>
                      <option value="11th">11th</option>
                      <option value="12th">12th</option>
                   </select>
       </div> 
       <button  onClick={() => fetchStudents(selectedStandard)} className='w-[20%] h-10 mt  lg:text-xl md:text-xl sm:text-lg text-lg text-white font-bold  border-2 rounded-md bg-blue-500 border-blue-950 hover:border-black '>Search</button>
       <button  onClick={() => fetchStudents('')} className='w-[20%] h-10 mt  lg:text-xl md:text-xl sm:text-lg text-lg text-white font-semibold  border-2 rounded-md bg-blue-500 border-blue-950 hover:border-black '>Remove Filter</button>
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
           {Students.map((Student, index) => (
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
                 <button onClick={() => handleDeleteStudent(Student._id)} className="bg-red-500 text-white px-3 py-1 rounded w-[50%]">Delete</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
 
       {isModalOpen && (
         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
           <div className="bg-white p-6 rounded shadow-lg w-[50%]">
             <h2 className="text-xl font-bold mb-4">Edit Student</h2>
             <form onSubmit={(e) => { e.preventDefault(); handleUpdateStudent(); }}>
               <label htmlFor="standard" className="block mb-2">Standard <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 id="standard"
                 name="standard" 
                 onChange={handleEditInputChange} 
                 value={editingStudent?.standard || ''} 
                 required
                 className="border p-2 w-full mb-4"
               />
               <label htmlFor="studentName" className="block mb-2">Student Name <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 id="studentName"
                 name="studentName" 
                 onChange={handleEditInputChange} 
                 value={editingStudent?.studentName || ''} 
                 required
                 className="border p-2 w-full mb-4"
               />
                <label htmlFor="division" className="block mb-2">Division <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 id="division"
                 name="division" 
                 onChange={handleEditInputChange} 
                 value={editingStudent?.division || ''} 
                 required
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Photo <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="photo" 
                 onChange={handleEditInputChange} 
                 value={editingStudent?.photo || ''} 
                 required
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Address <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="address" 
                 onChange={handleEditInputChange} 
                 value={editingStudent?.address || ''} 
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
 
       {isAddStudentModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-[50%]">
            <h2 className="text-xl font-bold mb-4">Add Student</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddStudent(); }}>
            <label className="block mb-2">Standard <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="standard" 
                 onChange={handleInputChange} 
                 value={newStudent.standard} 
                 placeholder="Standard" 
                 required
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Student Name <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="studentName" 
                 onChange={handleInputChange} 
                 value={newStudent.studentName} 
                 placeholder="Student Name" 
                 required
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Division <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="division" 
                 onChange={handleInputChange} 
                 value={newStudent.division} 
                 placeholder="Division" 
                 required
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Photo <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="photo" 
                 onChange={handleInputChange} 
                 value={newStudent.photo} 
                 placeholder="Photo" 
                 required
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Address <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="address" 
                 onChange={handleInputChange} 
                 value={newStudent.address} 
                 placeholder="Address" 
                 required
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
                <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
       )}
     </div>
   );
 }


export default Student