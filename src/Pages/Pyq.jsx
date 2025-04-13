import React from 'react'
import { useState,useEffect } from "react";

// const pyqsData = [
//   {
//     standard: "1st",
//     subjectName: "Hindi",
//     url: "https://pyq.com",
    
//   },
//   {
//     standard: "11th",
//     subjectName: "English",
//     url: "https://pyq.com",
    
//   },
//   {
//     standard: "12th",
//     subjectName: "Biology",
//     url: "https://pyq.com",
    
//   },
// ];
// const StudentsData = [
//   {
//     standard: "10th",
//     studentName: "Aarav Sharma",
//     photo: "https://randomuser.me/api/portraits/men/15.jpg",
//     division: "A",
//     address: "123, MG Road, Mumbai, India"
//   },
//   {
//     standard: "9th",
//     studentName: "Pooja Verma",
//     photo: "https://randomuser.me/api/portraits/women/20.jpg",
//     division: "B",
//     address: "56, Park Avenue, Delhi, India"
//   },
//   {
//     standard: "8th",
//     studentName: "Rahul Mehta",
//     photo: "https://randomuser.me/api/portraits/men/30.jpg",
//     division: "C",
//     address: "78, Lake View Road, Bengaluru, India"
//   },
//   {
//     standard: "12th",
//     studentName: "Sneha Kapoor",
//     photo: "https://randomuser.me/api/portraits/women/35.jpg",
//     division: "A",
//     address: "90, Green Valley, Kolkata, India"
//   },
//   {
//     standard: "11th",
//     studentName: "Vikram Singh",
//     photo: "https://randomuser.me/api/portraits/men/45.jpg",
//     division: "B",
//     address: "34, Central Plaza, Pune, India"
//   }
// ];
function Pyq() {
   const [isAddPyqModalOpen,setIsAddPyqModalOpen]=useState(false);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [currentPyq, setCurrentPyq] = useState(null);
      
        const openModal = (Pyq) => {
         setCurrentPyq(Pyq);
         setEditingPyq(Pyq); // This ensures _id is included
         setIsModalOpen(true);
       };
       
        const openPyqModal = () => {
          
          setIsAddPyqModalOpen(true);
          
        };
        const closePyqModal = () => {
          
          setIsAddPyqModalOpen(false);
          
        };
      
        const closeModal = () => {
          setIsModalOpen(false);
          setCurrentPyq(null);
        };
        const [newPyq, setNewPyq] = useState({
           standard: "",
           subjectName: "",
           url: "",
     });
     
     const handleInputChange = (e) => {
       setNewPyq({ ...newPyq, [e.target.name]: e.target.value });
     };
     
     const handleAddPyq = async () => {
       try {
         const response = await fetch(`${API_URL}/pyq`, {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(newPyq),
         });
     
         if (response.ok) {
           alert("Pyq added successfully!");
           closePyqModal();
           fetchPyqs(); // Refresh the list
         } else {
           alert("Failed to add Pyq.");
         }
       } catch (error) {
         console.error("Error:", error);
       }
     };
     const [editingPyq, setEditingPyq] = useState(null);
     
     const handleEditInputChange = (e) => {
       setEditingPyq({ ...editingPyq, [e.target.name]: e.target.value });
     };
     
     
     const handleUpdatePyq = async () => {
       try {
         const response = await fetch(`${API_URL}/pyq/${editingPyq._id}`, {
           method: "PUT",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(editingPyq),
         });
     
         if (response.ok) {
           alert("Pyq updated successfully!");
           closeModal();
           fetchPyqs(); // Refresh the list
         } else {
           alert("Failed to update Pyq.");
         }
       } catch (error) {
         console.error("Error:", error);
       }
     };
     
     const handleDeletePyq = async (id) => {
       if (!window.confirm("Are you sure you want to delete this Pyq?")) return;
     
       try {
         const response = await fetch(`${API_URL}/pyq/${id}`, {
           method: "DELETE",
         });
     
         if (response.ok) {
           alert("Pyq deleted successfully!");
           fetchPyqs(); // Refresh the list
         } else {
           alert("Failed to delete Pyq.");
         }
       } catch (error) {
         console.error("Error:", error);
       }
     };
     const [Pyqs, setPyqs] = useState([]);
     const [selectedStandard, setSelectedStandard] = useState(""); // State to store selected class
  
       // Fetch students with optional filtering by standard
       const fetchPyqs = async (standard = "") => {
         try {
           const url = standard
             ? `${API_URL}/pyq?standard=${standard}`
             : `${API_URL}/pyq`;
           const response = await fetch(url);
           const data = await response.json();
           setPyqs(data);
         } catch (error) {
           console.error("Error:", error);
         }
       };
     
       // Fetch all students on component mount
       useEffect(() => {
        fetchPyqs();
      }, []);
     
       // Handle class selection change
       const handleStandardChange = (e) => {
         setSelectedStandard(e.target.value);
       };
        

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-15 text-center ">Pyqs Management</h1>
      <div className='flex justify-around items-end mb-5 '>
      <div className="Standards lg:w-[40%] md:w-[90%] sm:w-[90%] w-[90%]  flex flex-col ">
                  <label htmlFor="Standards" className='font-semibold mb-2'>Select Class<span className='text-red-600 font-bold'>*</span></label>

                  <select id="Standards" className='border-2  h-10 rounded-md '  value={selectedStandard} onChange={handleStandardChange}>
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
     
      <button onClick={() => fetchPyqs(selectedStandard)} className='w-[20%] h-10 mt  lg:text-xl md:text-xl sm:text-lg text-lg text-white font-bold  border-2 rounded-md bg-blue-500 border-blue-950 hover:border-black '>Search</button>
      <button  onClick={() => fetchPyqs('')} className='w-[20%] h-10 mt  lg:text-xl md:text-xl sm:text-lg text-lg text-white font-semibold  border-2 rounded-md bg-blue-500 border-blue-950 hover:border-black '>Remove Filter</button>
      </div>
      <button className="bg-blue-800 text-white px-3 py-1 rounded mt-10 mb-5 font-semibold   " onClick={openPyqModal}>Add Pyq</button>
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
          {Pyqs.map((pyq, index) => (
            <tr key={index} className="border">
              <td className="p-3 border text-center ">{index+1}</td>
              <td className="p-3 border text-center ">{pyq.standard}</td>
              <td className="p-3 border text-center ">{pyq.subjectName}</td>
              <td className="p-3 border text-center"><a  href={pyq.pyqUrl}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[50%] ">Download</button></a></td>
              <td className="p-3 border flex gap-2">
                
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                  onClick={() => openModal(pyq)}
                >
                  Edit
                </button>
                <button  onClick={() => handleDeletePyq(pyq._id)} className="bg-red-500 text-white px-3 py-1 rounded w-[50%]">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-[50%]">
            <h2 className="text-xl font-bold mb-4">Edit Pyq</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleUpdatePyq(); }}>
              <label className="block mb-2">Standard <span className='text-red-700 font-semibold'>*</span></label>
              <input
                type="text"
                name="standard" 
                  onChange={handleEditInputChange} 
                  value={editingPyq?.standard || ''} 
                  required
                
                className="border p-2 w-full mb-4"
              />
              <label className="block mb-2">Subject Name <span className='text-red-700 font-semibold'>*</span></label>
              <input
                type="text"
                name="subjectName" 
                onChange={handleEditInputChange} 
                value={editingPyq?.subjectName || ''} 
                required
                className="border p-2 w-full mb-4"
              />
               <label className="block mb-2">Url <span className='text-red-700 font-semibold'>*</span></label>
              <input
                type="text"
                name="pyqUrl" 
                onChange={handleEditInputChange} 
                value={editingPyq?.pyqUrl || ''} 
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

      {isAddPyqModalOpen && (
         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
         <div className="bg-white p-6 rounded shadow-lg w-[50%]">
           <h2 className="text-xl font-bold mb-4">Add Pyq</h2>
           <form  onSubmit={(e) => { e.preventDefault(); handleAddPyq(); }}>
             <label className="block mb-2 ">Standard <span className='text-red-700 font-semibold'>*</span></label>
             <input
               type="text"
               name="standard" 
               onChange={handleInputChange} 
               value={newPyq.standard} 
               placeholder="Standard" 
               required
               className="border p-2 w-full mb-4"
             />
             <label className="block mb-2">Subject Name <span className='text-red-700 font-semibold'>*</span></label>
             <input
               type="text"
               name="subjectName" 
               onChange={handleInputChange} 
               value={newPyq.subjectName} 
               placeholder="Subject Name" 
               required
               className="border p-2 w-full mb-4"
             />
              <label className="block mb-2">Url <span className='text-red-700 font-semibold'>*</span></label>
             <input
               type="text"
               name="pyqUrl" 
               onChange={handleInputChange} 
               value={newPyq.pyqUrl} 
               placeholder="Url" 
               required
               className="border p-2 w-full mb-4"
             />
             <div className="flex justify-end gap-2">
               <button
                 type="button"
                 className="bg-gray-500 text-white px-4 py-2 rounded"
                 onClick={closePyqModal}
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



export default Pyq