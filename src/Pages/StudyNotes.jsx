import React from 'react'
import { useState,useEffect } from 'react';
// const StudyNotesData = [

//     {
//       standard: "10th",
//       subjectName: "Mathematics",
//       chapter: "Algebra",
//       notesUrl: "https://example.com/study-notes/math-algebra.pdf"
//     },
//     {
//       standard: "12th",
//       subjectName: "Physics",
//       chapter: "Electromagnetism",
//       notesUrl: "https://example.com/study-notes/physics-electromagnetism.pdf"
//     },
//     {
//       standard: "9th",
//       subjectName: "Biology",
//       chapter: "Cell Structure",
//       notesUrl: "https://example.com/study-notes/biology-cell-structure.pdf"
//     },
//     {
//       standard: "11th",
//       subjectName: "Chemistry",
//       chapter: "Organic Chemistry",
//       notesUrl: "https://example.com/study-notes/chemistry-organic.pdf"
//     },
//     {
//       standard: "8th",
//       subjectName: "History",
//       chapter: "French Revolution",
//       notesUrl: "https://example.com/study-notes/history-french-revolution.pdf"
//     }
// ];
function StudyNotes() {
  
  

   const [isAddStudyNoteModalOpen,setIsAddStudyNoteModalOpen]=useState(false);
       const [isModalOpen, setIsModalOpen] = useState(false);
       const [currentStudyNote, setCurrentStudyNote] = useState(null);
     
       const openModal = (StudyNote) => {
        setCurrentStudyNote(StudyNote);
        setEditingStudyNote(StudyNote); // This ensures _id is included
        setIsModalOpen(true);
      };
      
       const openStudyNoteModal = () => {
         
         setIsAddStudyNoteModalOpen(true);
         
       };
       const closeStudyNoteModal = () => {
         
         setIsAddStudyNoteModalOpen(false);
         
       };
     
       const closeModal = () => {
         setIsModalOpen(false);
         setCurrentStudyNote(null);
       };
       const [newStudyNote, setNewStudyNote] = useState({
         standard: "",
         subjectName: "",
         chapter: "",
         notesUrl: ""
       
    });
    
    const handleInputChange = (e) => {
      setNewStudyNote({ ...newStudyNote, [e.target.name]: e.target.value });
    };
    
    const handleAddStudyNote = async () => {
      try {
        const response = await fetch(`${API_URL}/study-notes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudyNote),
        });
    
        if (response.ok) {
          alert("StudyNote added successfully!");
          closeStudyNoteModal();
          fetchStudyNotes(); // Refresh the list
        } else {
          alert("Failed to add StudyNote.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    const [editingStudyNote, setEditingStudyNote] = useState(null);
    
    const handleEditInputChange = (e) => {
      setEditingStudyNote({ ...editingStudyNote, [e.target.name]: e.target.value });
    };
    
    
    const handleUpdateStudyNote = async () => {
      try {
        const response = await fetch(`${API_URL}/study-notes/${editingStudyNote._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingStudyNote),
        });
    
        if (response.ok) {
          alert("StudyNote updated successfully!");
          closeModal();
          fetchStudyNotes(); // Refresh the list
        } else {
          alert("Failed to update StudyNote.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    const handleDeleteStudyNote = async (id) => {
      if (!window.confirm("Are you sure you want to delete this StudyNote?")) return;
    
      try {
        const response = await fetch(`${API_URL}/study-notes/${id}`, {
          method: "DELETE",
        });
    
        if (response.ok) {
          alert("StudyNote deleted successfully!");
          fetchStudyNotes(); // Refresh the list
        } else {
          alert("Failed to delete StudyNote.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    const [StudyNotes, setStudyNotes] = useState([]);
   
          const [selectedStandard, setSelectedStandard] = useState(""); // State to store selected class
          const [selectedSubject, setSelectedSubject] = useState(""); // State to store selected class
       
            // Fetch students with optional filtering by standard
            const fetchStudyNotes = async (standard = "", subjectName = "") => {
              try {
                const url = (standard && subjectName)
                  ? `${API_URL}/study-notes?standard=${standard}&subjectName=${subjectName}`
                  : `${API_URL}/study-notes`;
                const response = await fetch(url);
                const data = await response.json();
                setStudyNotes(data);
              } catch (error) {
                console.error("Error:", error);
              }
            };
          
            // Fetch all students on component mount
            useEffect(() => {
              fetchStudyNotes();
            }, []);
          
            // Handle class selection change
            const handleStandardChange = (e) => {
              setSelectedStandard(e.target.value);
            };
            const handleSubjectChange = (e) => {
              setSelectedSubject(e.target.value);
            };

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-15 text-center ">Study Notes Management</h1>
        <div className='flex  items-end mb-5 gap-5 '>
        <div className="Standards lg:w-[30%] md:w-[30%] sm:w-[30%] w-[30%]  flex flex-col ">
                    <label htmlFor="Standards" className='font-semibold mb-2'>Select Class<span className='text-red-600 font-bold'>*</span></label>
  
                    <select id="Standards" className='border-2  h-10 rounded-md ' value={selectedStandard} onChange={handleStandardChange}>
                    <option value="" className='p-2'>Select Class </option>
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
        <div className="Subject lg:w-[30%] md:w-[30%] sm:w-[30%] w-[30%]  flex flex-col">
                        <label htmlFor="subjectName" className='font-semibold mb-2'>Select Subject<span className='text-red-600 font-bold'>*</span></label>

                        <select id="subjectName" className='border-2  h-10 rounded-md ' value={selectedSubject} onChange={handleSubjectChange}>
                           <option value="" className='p-2'>Select Subject</option>
                           <option value="Hindi">Hindi</option>
                           <option value="English">English</option>
                           <option value="Mathematics">Mathematics</option>
                           <option value="Science">Science</option>
                           <option value="Social Science">Social Science</option>
                           <option value="Environment Studies/Science(EVS)">Environment Studies/Science(EVS)</option>
                           <option value="General Knowledge(G.K)">General Knowledge(G.K)</option>
                        </select>
              </div>
       
        <button  onClick={() => {fetchStudyNotes(selectedStandard,selectedSubject)}} className='w-[20%] h-10 mt  lg:text-xl md:text-xl sm:text-lg text-lg text-white font-bold  border-2 rounded-md bg-blue-500 border-blue-950 hover:border-black '>Search</button>
        <button  onClick={() => {fetchStudyNotes('','')}} className='w-[20%] h-10 mt  lg:text-xl md:text-xl sm:text-lg text-lg text-white font-bold  border-2 rounded-md bg-blue-500 border-blue-950 hover:border-black '>Remove Filter</button>
        </div>
        <button className="bg-blue-800 text-white px-3 py-1 rounded mt-10 mb-5 font-semibold   " onClick={openStudyNoteModal}>Add Study Note</button>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
             <th className="p-3 border">Serial No.</th>
              <th className="p-3 border">Subject Name</th>
              <th className="p-3 border">Chapter Name</th>
              <th className="p-3 border">Standard</th>
              <th className="p-3 border">Link</th>
             
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {StudyNotes.map((StudyNote, index) => (
              <tr key={index} className="border">
                <td className="p-3 border text-center ">{index+1}</td>
                <td className="p-3 border text-center ">{StudyNote.subjectName}</td>
                <td className="p-3 border text-center ">{StudyNote.chapter}</td>
                <td className="p-3 border text-center ">{StudyNote.standard}</td>
                <td className="p-3 border text-center"><a  href={StudyNote.notesUrl}><button className="bg-blue-600 text-white px-3 py-1 rounded w-[80%] ">Download</button></a></td>
                <td className="p-3 border flex gap-2">
                  
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                    onClick={() => openModal(StudyNote)}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteStudyNote(StudyNote._id)} className="bg-red-500 text-white px-3 py-1 rounded w-[50%]">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-[50%]">
              <h2 className="text-xl font-bold mb-4">Edit StudyNote</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleUpdateStudyNote(); }}>
                <label className="block mb-2">Standard <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="standard" 
                  onChange={handleEditInputChange} 
                  value={editingStudyNote?.standard || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                <label className="block mb-2">Subject Name <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="subjectName" 
                  onChange={handleEditInputChange} 
                  value={editingStudyNote?.subjectName || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                  <label className="block mb-2">Chapter Name <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="chapter" 
                  onChange={handleEditInputChange} 
                  value={editingStudyNote?.chapter || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Url <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="notesUrl" 
                  onChange={handleEditInputChange} 
                  value={editingStudyNote?.notesUrl || ''} 
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
  
        {isAddStudyNoteModalOpen && (
           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
           <div className="bg-white p-6 rounded shadow-lg w-[50%]">
             <h2 className="text-xl font-bold mb-4">Add StudyNote</h2>
             <form onSubmit={(e) => { e.preventDefault(); handleAddStudyNote(); }}>
             <label className="block mb-2">Standard <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="standard" 
                  onChange={handleInputChange} 
                  value={newStudyNote.standard} 
                  placeholder="Standard" 
                  required
                  className="border p-2 w-full mb-4"
                />
                <label className="block mb-2">Subject Name <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="subjectName" 
                  onChange={handleInputChange} 
                  value={newStudyNote.subjectName} 
                  placeholder="Subject Name" 
                  required
                  className="border p-2 w-full mb-4"
                />
                  <label className="block mb-2">Chapter Name <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="chapter" 
                  onChange={handleInputChange} 
                  value={newStudyNote.chapter} 
                  placeholder="Chapter Name" 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Url <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="notesUrl" 
                  onChange={handleInputChange} 
                  value={newStudyNote.notesUrl} 
                  placeholder="Notes Url" 
                  required
                  className="border p-2 w-full mb-4"
                />
               <div className="flex justify-end gap-2">
                 <button
                   type="button"
                   className="bg-gray-500 text-white px-4 py-2 rounded"
                   onClick={closeStudyNoteModal}
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


export default StudyNotes