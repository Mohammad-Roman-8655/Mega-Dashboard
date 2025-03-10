import React from 'react'
import { useState,useEffect } from 'react';
// const TeachersData = [
//   {
//     name: "Rajesh Kumar",
//     subject: "Mathematics",
//     experience: "5",
//     photo: "https://randomuser.me/api/portraits/men/25.jpg",
//     qualification: "M.Sc in Mathematics, B.Ed",
//     email: "rajesh.kumar@example.com",
//     phoneNo: 9876543210
//   },
//   {
//     name: "Anita Sharma",
//     subject: "Physics",
//     experience: "2",
//     photo: "https://randomuser.me/api/portraits/women/30.jpg",
//     qualification: "M.Sc in Physics, Ph.D.",
//     email: "anita.sharma@example.com",
//     phoneNo: 9876543221
//   },
//   {
//     name: "Vikas Mehta",
//     subject: "Chemistry",
//     experience: "2",
//     photo: "https://randomuser.me/api/portraits/men/35.jpg",
//     qualification: "M.Sc in Chemistry, B.Ed",
//     email: "vikas.mehta@example.com",
//     phoneNo: 9876543332
//   },
//   {
//     name: "Neha Verma",
//     subject: "Biology",
//     experience: "6",
//     photo: "https://randomuser.me/api/portraits/women/28.jpg",
//     qualification: "M.Sc in Biology, B.Ed",
//     email: "neha.verma@example.com",
//     phoneNo: 9876543443
//   },
//   {
//     name: "Sandeep Gupta",
//     subject: "English",
//     experience:"5",
//     photo: "https://randomuser.me/api/portraits/men/40.jpg",
//     qualification: "M.A in English, B.Ed",
//     email: "sandeep.gupta@example.com",
//     phoneNo: 9876543554
//   }
// ];



function Teacher() {
 const [isAddTeacherModalOpen,setIsAddTeacherModalOpen]=useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [currentTeacher, setCurrentTeacher] = useState(null);
 
   const openModal = (Teacher) => {
    setCurrentTeacher(Teacher);
    setEditingTeacher(Teacher); // This ensures _id is included
    setIsModalOpen(true);
  };
  
   const openTeacherModal = () => {
     
     setIsAddTeacherModalOpen(true);
     
   };
   const closeTeacherModal = () => {
     
     setIsAddTeacherModalOpen(false);
     
   };
 
   const closeModal = () => {
     setIsModalOpen(false);
     setCurrentTeacher(null);
   };
   const [newTeacher, setNewTeacher] = useState({
  name: "",
  subject:"",
  experience: "",
  photo: "",
  qualification:"",
  email: "",
  phoneNo: "",
  
  
 
});

const handleInputChange = (e) => {
  setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
};

const handleAddTeacher = async () => {
  try {
    const response = await fetch("http://localhost:8080/Teacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTeacher),
    });

    if (response.ok) {
      alert("Teacher added successfully!");
      closeTeacherModal();
      fetchTeachers(); // Refresh the list
    } else {
      alert("Failed to add Teacher.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
const [editingTeacher, setEditingTeacher] = useState(null);

const handleEditInputChange = (e) => {
  setEditingTeacher({ ...editingTeacher, [e.target.name]: e.target.value });
};


const handleUpdateTeacher = async () => {
  try {
    const response = await fetch(`http://localhost:8080/Teacher/${editingTeacher._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editingTeacher),
    });

    if (response.ok) {
      alert("Teacher updated successfully!");
      closeModal();
      fetchTeachers(); // Refresh the list
    } else {
      alert("Failed to update Teacher.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const handleDeleteTeacher = async (id) => {
  if (!window.confirm("Are you sure you want to delete this Teacher?")) return;

  try {
    const response = await fetch(`http://localhost:8080/Teacher/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Teacher deleted successfully!");
      fetchTeachers(); // Refresh the list
    } else {
      alert("Failed to delete Teacher.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
const [Teachers, setTeachers] = useState([]);

const fetchTeachers = async () => {
  try {
    const response = await fetch("http://localhost:8080/Teacher");
    const data = await response.json();
    setTeachers(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

useEffect(() => {
  fetchTeachers();
}, []);

 
   return (
     <div className="p-6">
       <h1 className="text-2xl font-bold mb-15 text-center ">Teachers Management</h1>
      
       <button className="bg-blue-800 text-white px-3 py-1 rounded mt-10 mb-5 font-semibold   " onClick={openTeacherModal}>Add Teacher</button>
       <table className="min-w-full bg-white border border-gray-300">
         <thead>
           <tr className="bg-gray-200">
           <th className="p-3 border">Serial No.</th>
             <th className="p-3 border">Name</th>
             <th className="p-3 border">Phone</th>
             <th className="p-3 border">Email</th>
             <th className="p-3 border">Subject</th>
             <th className="p-3 border">Qualification</th>
             <th className="p-3 border">Experience</th>
             <th className="p-3 border">Photo</th>
            
             <th className="p-3 border">Actions</th>
           </tr>
         </thead>
         <tbody>
           {Teachers.map((Teacher, index) => (
             <tr key={index} className="border">
               <td className="p-3 border text-center ">{index+1}</td>
               <td className="p-3 border text-center ">{Teacher.name}</td>
               <td className="p-3 border text-center ">{Teacher.phoneNo}</td>
               <td className="p-3 border text-center ">{Teacher.email}</td>
               <td className="p-3 border text-center ">{Teacher.subject}</td>
               <td className="p-3 border text-center ">{Teacher.qualification}</td>
               <td className="p-3 border text-center ">{Teacher.experience}</td>
               <td className="p-3 border text-center "><img src={Teacher.photo} alt="img" /></td>
               <td className="p-3 mt-10 flex gap-2">
                 
                 <button
                   className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                   onClick={() => openModal(Teacher)}
                 >
                   Edit
                 </button>
                 <button onClick={() => handleDeleteTeacher(Teacher._id)} className="bg-red-500 text-white px-3 py-1 rounded w-[50%]">Delete</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
 
       {isModalOpen && (
         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
           <div className="bg-white p-6 rounded shadow-lg w-[50%]">
             <h2 className="text-xl font-bold mb-4">Edit Teacher</h2>
             <form onSubmit={(e) => { e.preventDefault(); handleUpdateTeacher(); }}>
             <label className="block mb-2">Name <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="name" 
                 onChange={handleEditInputChange} 
                 value={editingTeacher?.name || ''} 
                 required
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Phone No <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="phoneNo" 
                 onChange={handleEditInputChange} 
                 value={editingTeacher?.phoneNo || ''} 
                 required
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Email <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="email" 
                 onChange={handleEditInputChange} 
                 value={editingTeacher?.email || ''} 
                 required
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Qualification <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="qualification" 
                 onChange={handleEditInputChange} 
                 value={editingTeacher?.qualification || ''} 
                 required
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Subject <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="subject" 
                 onChange={handleEditInputChange} 
                 value={editingTeacher?.subject || ''} 
                 required
                 className="border p-2 w-full mb-4"
               />

               <label className="block mb-2">Experience <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="date"
                 name="experience" 
                 onChange={handleEditInputChange} 
                 value={editingTeacher?.experience ? editingTeacher.experience.split('T')[0] : ''}
                 required
                 className="border p-2 w-full mb-4"
               />
               
                <label className="block mb-2">Photo <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="photo" 
                 onChange={handleEditInputChange} 
                 value={editingTeacher?.photo || ''} 
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
 
       {isAddTeacherModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-[50%]">
            <h2 className="text-xl font-bold mb-4">Add Teacher</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddTeacher(); }}>
            <label className="block mb-2">Name <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="name" 
                 onChange={handleInputChange} 
                 value={newTeacher.name} 
                 placeholder="Name" 
                 required
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Phone No <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="phoneNo" 
                 onChange={handleInputChange} 
                 value={newTeacher.phoneNo} 
                 placeholder="Phone no" 
                 required
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Email <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="email"
                 name="email" 
                 onChange={handleInputChange} 
                 value={newTeacher.email} 
                 placeholder="Email" 
                 required
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Qualification <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="qualification" 
                 onChange={handleInputChange} 
                 value={newTeacher.qualification} 
                 placeholder="Qualification" 
                 required
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Subject <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="subject" 
                 onChange={handleInputChange} 
                 value={newTeacher.subject} 
                 placeholder="Subject" 
                 required
                 className="border p-2 w-full mb-4"
               />

               <label className="block mb-2">Experience <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="date"
                 name="experience" 
                 onChange={handleInputChange} 
                 value={newTeacher.experience} 
                 placeholder="Experience" 
                 required
                 className="border p-2 w-full mb-4"
               />
               
                <label className="block mb-2">Photo <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="photo" 
                 onChange={handleInputChange} 
                 value={newTeacher.photo} 
                 placeholder="Photo Url" 
                 required
                 className="border p-2 w-full mb-4"
               />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={closeTeacherModal}
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


export default Teacher


