import React from 'react'
import { useState,useEffect } from 'react';


//   {
//     title: "Annual Sports Meet Announcement",
//     link: "https://www.schoolwebsite.com/DownloadForms/sports-meet-2025",
//     status: "Active",
//     publishDate: "2025-03-01"
//   },
//   {
//     title: "Board Exam Timetable Released",
//     link: "https://www.schoolwebsite.com/DownloadForms/exam-timetable",
//     status: "Active",
//     publishDate: "2025-02-28"
//   },
//   {
//     title: "Holiday DownloadForm for Holi Festival",
//     link: "https://www.schoolwebsite.com/DownloadForms/holi-holiday",
//     status: "Upcoming",
//     publishDate: "2025-03-15"
//   },
//   {
//     title: "New Admission Guidelines 2025",
//     link: "https://www.schoolwebsite.com/DownloadForms/admission-guidelines",
//     status: "Active",
//     publishDate: "2025-02-20"
//   },
//   {
//     title: "Parent-Teacher Meeting Schedule",
//     link: "https://www.schoolwebsite.com/DownloadForms/ptm-schedule",
//     status: "Completed",
//     publishDate: "2025-02-10"
//   }
// ];
function DownloadForm() {
  
  
  const [isAddDownloadFormModalOpen,setIsAddDownloadFormModalOpen]=useState(false);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [currentDownloadForm, setCurrentDownloadForm] = useState(null);
    
      const openModal = (DownloadForm) => {
       setCurrentDownloadForm(DownloadForm);
       setEditingDownloadForm(DownloadForm); // This ensures _id is included
       setIsModalOpen(true);
     };
     
      const openDownloadFormModal = () => {
        
        setIsAddDownloadFormModalOpen(true);
        
      };
      const closeDownloadFormModal = () => {
        
        setIsAddDownloadFormModalOpen(false);
        
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        setCurrentDownloadForm(null);
      };
   
   

   const [editingDownloadForm, setEditingDownloadForm] = useState(null);
   
   const handleEditInputChange = (e) => {
     setEditingDownloadForm({ ...editingDownloadForm, [e.target.name]: e.target.value });
   };
   
   
   const handleUpdateDownloadForm = async () => {
     try {
       const response = await fetch(`${API_URL}/download-form/${editingDownloadForm._id}`, {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(editingDownloadForm),
       });
   
       if (response.ok) {
         alert("DownloadForm updated successfully!");
         closeModal();
         fetchDownloadForms(); // Refresh the list
       } else {
         alert("Failed to update DownloadForm.");
       }
     } catch (error) {
       console.error("Error:", error);
     }
   };
   
   const [DownloadForms, setDownloadForms] = useState([]);
   
   const fetchDownloadForms = async () => {
     try {
       const response = await fetch(`${API_URL}/download-form`);
       const data = await response.json();
       setDownloadForms(data);
     } catch (error) {
       console.error("Error:", error);
     }
   };
   
   useEffect(() => {
     fetchDownloadForms();
   }, []);
   
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-15 text-center ">DownloadForms Management</h1>
       
        
        <table className="min-w-full bg-white border border-gray-300 mb-10">
          <thead>
            <tr className="bg-gray-200">
             <th className="p-3 border">Admission Form</th>
              <th className="p-3 border">Fee Structure</th>
              <th className="p-3 border">Book List</th>
              <th className="p-3 border">Exam Schedule</th>
              <th className="p-3 border">Exam Timetable</th>
              <th className="p-3 border">Project Guide</th>
              <th className="p-3 border">School Policy</th>
              <th className="p-3 border">Actions</th>

             
            </tr>
          </thead>
          <tbody>
            {DownloadForms.map((DownloadForm, index) => (
              <tr key={index} className="border">
                <td className="p-3 border text-center "><a  href={DownloadForm.admissionForm}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>
                <td className="p-3 border text-center "><a  href={DownloadForm.feeStructure}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>
                <td className="p-3 border text-center "><a  href={DownloadForm.bookList}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>
                <td className="p-3 border text-center "><a  href={DownloadForm.examSchedule}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>
                <td className="p-3 border text-center "><a  href={DownloadForm.examTimetable}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>
                <td className="p-3 border text-center "><a  href={DownloadForm.projectGuide}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>
                <td className="p-3 border text-center "><a  href={DownloadForm.schoolPolicy}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>
                <td className="p-3 border flex gap-2">
                  
                  <button
                    className="bg-green-500 text-white px-3 w-[100%] py-1 rounded "
                    onClick={() => openModal(DownloadForm)}
                  >
                    Update
                  </button>
                 
                </td>

              
               
               
              </tr>
            ))}
          </tbody>
        </table>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
            

              <th className="p-3 border">Parent Guide</th>
              <th className="p-3 border">Career Guide</th>
              <th className="p-3 border">Health Guide</th>
              <th className="p-3 border">Attendance Certificate</th>
              <th className="p-3 border">Medical Certificate</th>
              <th className="p-3 border">Fee Submission Form</th>
              <th className="p-3 border">Leave Form</th>
            </tr>
          </thead>
          <tbody>
            {DownloadForms.map((DownloadForm, index) => (
              <tr key={index} className="border">
              

                <td className="p-3 border text-center "><a  href={DownloadForm.parentGuide}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>
                <td className="p-3 border text-center"><a  href={DownloadForm.careerGuide}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>
                <td className="p-3 border text-center "><a  href={DownloadForm.healthGuide}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>               
                <td className="p-3 border text-center"><a  href={DownloadForm.attendanceCertificate}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>
                <td className="p-3 border text-center "><a  href={DownloadForm.medicalCertificate}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>
                <td className="p-3 border text-center"><a  href={DownloadForm.feeSubmissionForm}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>
                <td className="p-3 border text-center"><a  href={DownloadForm.leaveApplicationForm}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[90%] ">Download</button></a></td>
               
               
              </tr>
            ))}
          </tbody>
        </table>
  
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-[90%]">
              <h2 className="text-xl font-bold mb-4 text-center">Update Download Form</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleUpdateDownloadForm(); }}>
                <div className='flex gap-2'>
                    <div className='w-[50%]'>
                    <label className="block mb-2">Admission Form Link<span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="admissionForm" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.admissionForm || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Fee Structure Link<span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="feeStructure" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.feeStructure || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Book List Link <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="bookList" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.bookList || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Exam Schedule Link <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="examSchedule" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.examSchedule || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Exam Timetable Link <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="examTimetable" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.examTimetable || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Project Guide Link <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="projectGuide" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.projectGuide || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">School Policy Link<span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="schoolPolicy" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.schoolPolicy || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                    </div>
                    <div  className='w-[50%]'>
                    <label className="block mb-2">Parent Guide Link<span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="parentGuide" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.parentGuide || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Career Guide Link<span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="careerGuide" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.careerGuide || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Health Guide Link<span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="healthGuide" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.healthGuide || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Attendance Certificate Link<span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="attendanceCertificate" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.attendanceCertificate || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Medical Certificate Link<span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="medicalCertificate" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.medicalCertificate || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Fee Submission Form Link<span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="feeSubmissionForm" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.feeSubmissionForm || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Leave Application Form<span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="leaveApplicationForm" 
                  onChange={handleEditInputChange} 
                  value={editingDownloadForm?.leaveApplicationForm || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                    </div>
                </div>
                
               
                
                
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
      </div>
    );
  }


export default DownloadForm