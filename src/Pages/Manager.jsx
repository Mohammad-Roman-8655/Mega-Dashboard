import React from 'react'
import { useState,useEffect } from 'react';
 


function Manager() {
   const [isAddManagerModalOpen,setIsAddManagerModalOpen]=useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [currentManager, setCurrentManager] = useState(null);
 
   const openModal = (Manager) => {
    setCurrentManager(Manager);
    setEditingManager(Manager); // This ensures _id is included
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
   const [newManager, setNewManager] = useState({
  name: "",
  experience: "",
  phoneNo: "",
  email: "",
  position: "",
  photo: "",
  message: "",
});

const handleInputChange = (e) => {
  setNewManager({ ...newManager, [e.target.name]: e.target.value });
};

const handleAddManager = async () => {
  try {
    const response = await fetch(`${API_URL}/manager`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newManager),
    });

    if (response.ok) {
      alert("Manager added successfully!");
      closeManagerModal();
      fetchManagers(); // Refresh the list
    } else {
      alert("Failed to add manager.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
const [editingManager, setEditingManager] = useState(null);

const handleEditInputChange = (e) => {
  setEditingManager({ ...editingManager, [e.target.name]: e.target.value });
};


const handleUpdateManager = async () => {
  try {
    const response = await fetch(`${API_URL}/manager/${editingManager._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editingManager),
    });

    if (response.ok) {
      alert("Manager updated successfully!");
      closeModal();
      fetchManagers(); // Refresh the list
    } else {
      alert("Failed to update manager.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const handleDeleteManager = async (id) => {
  if (!window.confirm("Are you sure you want to delete this manager?")) return;

  try {
    const response = await fetch(`${API_URL}/manager/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Manager deleted successfully!");
      fetchManagers(); // Refresh the list
    } else {
      alert("Failed to delete manager.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
const [managers, setManagers] = useState([]);

const fetchManagers = async () => {
  try {
    const response = await fetch(`${API_URL}/manager`);
    const data = await response.json();
    setManagers(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

useEffect(() => {
  fetchManagers();
}, []);

 
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
           {managers.map((Manager, index) => (
             <tr key={index} className="border">
               <td className="p-3 border text-center ">{index+1}</td>
               <td className="p-3 border text-center ">{Manager.name}</td>
               <td className="p-3 border text-center ">{Manager.phoneNo}</td>
               <td className="p-3 border text-center ">{Manager.email}</td>
               <td className="p-3 border text-center ">{Manager.position}</td>
               <td className="p-3 border text-center ">{Manager.experience}</td>
               <td className="p-3 border text-center "><img className='w-45 h-40' src={Manager.photo} alt="img" /></td>
             
               <td className="p-3 mt-10 flex gap-2">
                 
                 <button
                   className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                   onClick={() => openModal(Manager)}
                 >
                   Edit
                 </button>
                <button onClick={() => handleDeleteManager(Manager._id)} className="bg-red-500 text-white px-3 py-1 rounded">
  Delete
</button>

               </td>
             </tr>
           ))}
         </tbody>
       </table>
 
       {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ">
    <div className="bg-white p-6 rounded shadow-lg w-[80%]  m-[10%] ">
      <h2 className="text-xl font-bold mb-4 text-center">Edit Manager</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleUpdateManager(); }}>
        <div className='flex justify-around w-[100%]  items-center'>
             <div className='w-[40%]'> 
                <label className="block mb-2">Name:</label>
                <input  className="border p-2 w-full mb-4" type="text" name="name" onChange={handleEditInputChange} value={editingManager?.name || ''} required />
               </div>

              <div className='w-[40%]'> 
                <label className="block mb-2">Experience:</label>
                <input  className="border p-2 w-full mb-4" type="date" name="experience" onChange={handleEditInputChange} value={editingManager?.experience ? editingManager.experience.split('T')[0] : ''} required /></div>
             </div>
        <div className='flex justify-around w-[100%]  items-center'>
          <div  className='w-[40%]'>
             <label className="block mb-2">Phone No:</label>
             <input  className="border p-2 w-full mb-4" type="text" name="phoneNo" onChange={handleEditInputChange} value={editingManager?.phoneNo || ''} required />
          </div>
          <div  className='w-[40%]'> 
             <label className="block mb-2">Email:</label>
            <input  className="border p-2 w-full mb-4" type="email" name="email" onChange={handleEditInputChange} value={editingManager?.email || ''} required />
         </div>
       </div>
      <div className='flex justify-around w-[100%]  items-center'>
        <div  className='w-[40%]'> 
          <label className="block mb-2">Position:</label>
          <input  className="border p-2 w-full mb-4" type="text" name="position" onChange={handleEditInputChange} value={editingManager?.position || ''} required />
        </div>
         <div  className='w-[40%]'>
           <label className="block mb-2">Photo URL:</label>
           <input  className="border p-2 w-full mb-4" type="text" name="photo" onChange={handleEditInputChange} value={editingManager?.photo || ''} required />
         </div>
     </div>
     <div className='flex justify-around w-[100%]  items-center'>
     <div className='w-[40%]'>
       <label className="block mb-2">Message:</label>
       <textarea  className="border p-2 w-full mb-4" name="message" onChange={handleEditInputChange} value={editingManager?.message || ''} required></textarea>
      </div>
      <div className='w-[40%]'></div>
     </div>
       <div className='flex flex-row gap-10 w-[80%] mx-auto justify-around'>
      
               <button
                     type="button"
                     className="bg-gray-500 text-white px-4 py-2 rounded w-[80%]"
                     onClick={closeModal}
                >
                  Cancel
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-[80%]" type="submit">Save</button>
        
       </div>
      </form>
    </div>
  </div>
)}

 
       {isAddManagerModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-[50%]">
            <h2 className="text-xl font-bold mb-4 text-center">Add Manager</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleAddManager(); }}>
            <div className='flex justify-around w-[100%]  items-center'>
              <div className='w-[40%]'>
                 <label className="block mb-2">Name:</label>
                 <input className="border p-2 w-full mb-4" type="text" name="name" onChange={handleInputChange} value={newManager.name} placeholder="Name" required />
              </div>
              <div className='w-[40%]'>
                <label className="block mb-2">Experience:</label>
                <input className="border p-2 w-full mb-4" type="date" name="experience" onChange={handleInputChange} value={newManager.experience} placeholder="Experience" required />
              </div>
            </div>
            <div className='flex justify-around w-[100%]  items-center'>
              <div className='w-[40%]'>
                <label className="block mb-2">Phone No:</label>
                <input className="border p-2 w-full mb-4" type="text" name="phoneNo" onChange={handleInputChange} value={newManager.phoneNo} placeholder="Phone No" required />
               </div>
             <div className='w-[40%]'>
               <label className="block mb-2">Email:</label>
               <input className="border p-2 w-full mb-4" type="email" name="email" onChange={handleInputChange} value={newManager.email} placeholder="Email" required />
             </div>
            </div>
            <div className='flex justify-around w-[100%]  items-center'>
              <div className='w-[40%]'>
               <label className="block mb-2">Position:</label>
               <input className="border p-2 w-full mb-4" type="text" name="position" onChange={handleInputChange} value={newManager.position} placeholder="Position" required />
              </div>
              <div className='w-[40%]'>
               <label className="block mb-2">Photo URL:</label>
               <input className="border p-2 w-full mb-4" type="text" name="photo" onChange={handleInputChange} value={newManager.photo} placeholder="Photo URL" required />
              </div>
            </div>
             <div className='flex justify-around w-[100%]  items-center'>
               <div className='w-[40%]'>
                 <label className="block mb-2">Message:</label>
                  <textarea className="border p-2 w-full mb-4" name="message" onChange={handleInputChange} value={newManager.message} placeholder="Message" required></textarea>
               </div>
                <div className='w-[40%]'>

                </div>
              </div>
              <div className='flex  justify-around'>
       <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded w-[30%]"
                   onClick={closeManagerModal}
                >
                  Cancel
                </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-[30%]" type="submit">Save</button>
       </div>
</form>
          </div>
        </div>
       )}
     </div>
   );
 }
 


export default Manager