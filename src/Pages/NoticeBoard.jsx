import React from 'react'
import { useState,useEffect } from 'react';

// const NoticesData = [
//   {
//     title: "Annual Sports Meet Announcement",
//     link: "https://www.schoolwebsite.com/notices/sports-meet-2025",
//     status: "Active",
//     publishDate: "2025-03-01"
//   },
//   {
//     title: "Board Exam Timetable Released",
//     link: "https://www.schoolwebsite.com/notices/exam-timetable",
//     status: "Active",
//     publishDate: "2025-02-28"
//   },
//   {
//     title: "Holiday Notice for Holi Festival",
//     link: "https://www.schoolwebsite.com/notices/holi-holiday",
//     status: "Upcoming",
//     publishDate: "2025-03-15"
//   },
//   {
//     title: "New Admission Guidelines 2025",
//     link: "https://www.schoolwebsite.com/notices/admission-guidelines",
//     status: "Active",
//     publishDate: "2025-02-20"
//   },
//   {
//     title: "Parent-Teacher Meeting Schedule",
//     link: "https://www.schoolwebsite.com/notices/ptm-schedule",
//     status: "Completed",
//     publishDate: "2025-02-10"
//   }
// ];
function NoticeBoard() {
  
  
  const [isAddNoticeModalOpen,setIsAddNoticeModalOpen]=useState(false);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [currentNotice, setCurrentNotice] = useState(null);
    
      const openModal = (Notice) => {
       setCurrentNotice(Notice);
       setEditingNotice(Notice); // This ensures _id is included
       setIsModalOpen(true);
     };
     
      const openNoticeModal = () => {
        
        setIsAddNoticeModalOpen(true);
        
      };
      const closeNoticeModal = () => {
        
        setIsAddNoticeModalOpen(false);
        
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        setCurrentNotice(null);
      };
      const [newNotice, setNewNotice] = useState({
        title: "",
        link: "",
        status: "",
        publishDate: ""
   });
   
   const handleInputChange = (e) => {
     setNewNotice({ ...newNotice, [e.target.name]: e.target.value });
   };
   
   const handleAddNotice = async () => {
     try {
       const response = await fetch("http://localhost:8080/Notice", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(newNotice),
       });
   
       if (response.ok) {
         alert("Notice added successfully!");
         closeNoticeModal();
         fetchNotices(); // Refresh the list
       } else {
         alert("Failed to add Notice.");
       }
     } catch (error) {
       console.error("Error:", error);
     }
   };
   const [editingNotice, setEditingNotice] = useState(null);
   
   const handleEditInputChange = (e) => {
     setEditingNotice({ ...editingNotice, [e.target.name]: e.target.value });
   };
   
   
   const handleUpdateNotice = async () => {
     try {
       const response = await fetch(`http://localhost:8080/Notice/${editingNotice._id}`, {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(editingNotice),
       });
   
       if (response.ok) {
         alert("Notice updated successfully!");
         closeModal();
         fetchNotices(); // Refresh the list
       } else {
         alert("Failed to update Notice.");
       }
     } catch (error) {
       console.error("Error:", error);
     }
   };
   
   const handleDeleteNotice = async (id) => {
     if (!window.confirm("Are you sure you want to delete this Notice?")) return;
   
     try {
       const response = await fetch(`http://localhost:8080/Notice/${id}`, {
         method: "DELETE",
       });
   
       if (response.ok) {
         alert("Notice deleted successfully!");
         fetchNotices(); // Refresh the list
       } else {
         alert("Failed to delete Notice.");
       }
     } catch (error) {
       console.error("Error:", error);
     }
   };
   const [Notices, setNotices] = useState([]);
   
   const fetchNotices = async () => {
     try {
       const response = await fetch("http://localhost:8080/Notice");
       const data = await response.json();
       setNotices(data);
     } catch (error) {
       console.error("Error:", error);
     }
   };
   
   useEffect(() => {
     fetchNotices();
   }, []);
   
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-15 text-center ">Notices Management</h1>
       
        <button className="bg-blue-800 text-white px-3 py-1 rounded mt-10 mb-5 font-semibold   " onClick={openNoticeModal}>Add Notice</button>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
             <th className="p-3 border">Serial No.</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Publish Date</th>
              <th className="p-3 border">Link</th>
             
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Notices.map((Notice, index) => (
              <tr key={index} className="border">
                <td className="p-3 border text-center ">{index+1}</td>
                <td className="p-3 border text-center ">{Notice.title}</td>
                <td className="p-3 border text-center ">{Notice.status}</td>
                <td className="p-3 border text-center ">{Notice.publishDate}</td>
                
                <td className="p-3 border text-center"><a  href={Notice.url}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[70%] ">Download</button></a></td>
                <td className="p-3 border flex gap-2">
                  
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                    onClick={() => openModal(Notice)}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteNotice(Notice._id)} className="bg-red-500 text-white px-3 py-1 rounded w-[50%]">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-[50%]">
              <h2 className="text-xl font-bold mb-4">Edit Notice</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleUpdateNotice(); }}>
                <label className="block mb-2">Title <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="title" 
                  onChange={handleEditInputChange} 
                  value={editingNotice?.title || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                <label className="block mb-2">Status <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="status" 
                  onChange={handleEditInputChange} 
                  value={editingNotice?.status || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Publish Date <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="publishDate" 
                  onChange={handleEditInputChange} 
                  value={editingNotice?.publishDate || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Link <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="link" 
                  onChange={handleEditInputChange} 
                  value={editingNotice?.link || ''} 
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
  
        {isAddNoticeModalOpen && (
           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
           <div className="bg-white p-6 rounded shadow-lg w-[50%]">
             <h2 className="text-xl font-bold mb-4">Add Notice</h2>
             <form onSubmit={(e) => { e.preventDefault(); handleAddNotice(); }}>
             <label className="block mb-2">Title <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="title" 
                 onChange={handleInputChange} 
                 value={newNotice.title} 
                 placeholder="Title" 
                 required
                  className="border p-2 w-full mb-4"
                />
                <label className="block mb-2">Status <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="status" 
                  onChange={handleInputChange} 
                  value={newNotice.status} 
                  placeholder="Status" 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Publish Date <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="publishDate" 
                  onChange={handleInputChange} 
                  value={newNotice.publishDate} 
                  placeholder="Publish Date" 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Link <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="link" 
                  onChange={handleInputChange} 
                  value={newNotice.link} 
                  placeholder="Link" 
                  required
                  className="border p-2 w-full mb-4"
                />
               <div className="flex justify-end gap-2">
                 <button
                   type="button"
                   className="bg-gray-500 text-white px-4 py-2 rounded"
                   onClick={closeNoticeModal}
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


export default NoticeBoard