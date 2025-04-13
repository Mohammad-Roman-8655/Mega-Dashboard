import React from 'react'
import { useState,useEffect } from 'react';
import { API_URL } from '../config/apiConfig';
 
function AdmissionForm() {
   const [isAddAdmissionFormModalOpen,setIsAddAdmissionFormModalOpen]=useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [currentAdmissionForm, setCurrentAdmissionForm] = useState(null);
   const [viewAdmissionFormModal,setViewAdmissionFormModal] =useState(false);
   const [currentForm,setCurrentForm] =useState(null);
 
   const openModal = (AdmissionForm) => {
    setCurrentAdmissionForm(AdmissionForm);
    setEditingAdmissionForm(AdmissionForm); // This ensures _id is included
    setIsModalOpen(true);
  };

  const viewOpenModal = (AdmissionForm) => {
    setCurrentForm(AdmissionForm);
    setViewAdmissionFormModal(true);
  }

  const closeViewOpenModal = () => {
    setCurrentForm(null);
    setViewAdmissionFormModal(false);


  }
  
   const openAdmissionFormModal = () => {
     
     setIsAddAdmissionFormModalOpen(true);
     
   };
   const closeAdmissionFormModal = () => {
     
     setIsAddAdmissionFormModalOpen(false);
     
   };
 
   const closeModal = () => {
     setIsModalOpen(false);
     setCurrentAdmissionForm(null);
   };
   
     
   const [newAdmissionForm,setNewAdmissionForm] =useState(
    {

      studentName : '',
      DOB : '',
      gender : '',
      phoneNum : '',
      email :'',
      aadharNum : '',
      nationality : '',
      religion : '',
      bloodGroup : '',                    
      permanentAddress :'',
      currentAddress : '',
      fatherName : '',
      motherName : '',
      guardianName : '',
      guardianNum : '',
      guardianEmail : '',
      guardianOccupation : '',
      annualIncome : '',
      guardianPermanentAddress : '',
      guardianCurrentAddress : '',
      previousSchoolName  :'',
      lastClassAttended : '',
      mediumOfInstruction : '',
      previousClassDivision : '',
      totalMarks : '',
      obtainedMarks  : '',
      transferCertificateRegistrationNumber : '',
      lastSchoolAddress : '',
      academicYear : '',
      classGroup : '',
      standardForAdmission :'',
      stream : '',
      siblingInSameSchool : '',
      siblingNumInSameSchool : '',
      siblingName : '',
      siblingStandard : '',
      siblingAdmissionNumber :'',
      transportNeed : '',
      pickUpPoint : '',
      dropOffPoint : ''
  
  }


  );
   
   // Store districts based on selected state
  
//    const token = localStorage.getItem("token");
  
    // Fetch Labour Types

  
    // const navigate = useNavigate();
    const handleInputChange = (e) => {
      setNewAdmissionForm({
        ...newAdmissionForm,
        [e.target.name]: e.target.value
      });
    }; 
    
    const handleAdmissionForm = async () => {
      try {
        const response = await fetch(`${API_URL}/admission-form`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
        //    Authorization: `Bearer ${token}` 
          },
          body: JSON.stringify(newAdmissionForm),
        });
  
        if (response.ok) {
          alert("Admission form submitted successfully!. Our team will contact with you soon.");
          closeAdmissionFormModal();
           setNewAdmissionForm(   {

            studentName : '',
            DOB : '',
            gender : '',
            phoneNum : '',
            email :'',
            aadharNum : '',
            nationality : '',
            religion : '',
            bloodGroup : '',                    
            permanentAddress :'',
            currentAddress : '',
            fatherName : '',
            motherName : '',
            guardianName : '',
            guardianNum : '',
            guardianEmail : '',
            guardianOccupation : '',
            annualIncome : '',
            guardianPermanentAddress : '',
            guardianCurrentAddress : '',
            previousSchoolName  :'',
            lastClassAttended : '',
            mediumOfInstruction : '',
            previousClassDivision : '',
            totalMarks : '',
            obtainedMarks  : '',
            transferCertificateRegistrationNumber : '',
            lastSchoolAddress : '',
            academicYear : '',
            classGroup : '',
            standardForAdmission :'',
            stream : '',
            siblingInSameSchool : '',
            siblingNumInSameSchool : '',
            siblingName : '',
            siblingStandard : '',
            siblingAdmissionNumber :'',
            transportNeed : '',
            pickUpPoint : '',
            dropOffPoint : ''
        
        });
        //   navigate("/");
        } else {
          alert("Failed to submit admission form.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(newAdmissionForm);
      handleAdmissionForm();
      
    }; //onSubmit={handleSubmit}  value={newAppointment.guardianName} onChange={handleInputChange}
const [editingAdmissionForm, setEditingAdmissionForm] = useState(null);

const handleEditInputChange = (e) => {
  setEditingAdmissionForm({ ...editingAdmissionForm, [e.target.name]: e.target.value });
};


const handleUpdateAdmissionForm = async () => {
  try {
    const response = await fetch(`${API_URL}/admission-form/${editingAdmissionForm._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editingAdmissionForm),
    });

    if (response.ok) {
      alert("AdmissionForm updated successfully!");
      closeModal();
      fetchAdmissionForms(); // Refresh the list
    } else {
      alert("Failed to update AdmissionForm.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const handleDeleteAdmissionForm = async (id) => {
  if (!window.confirm("Are you sure you want to delete this AdmissionForm?")) return;

  try {
    const response = await fetch(`${API_URL}/admission-form/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("AdmissionForm deleted successfully!");
      fetchAdmissionForms(); // Refresh the list
    } else {
      alert("Failed to delete AdmissionForm.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
const [AdmissionForms, setAdmissionForms] = useState([]);

const fetchAdmissionForms = async () => {
  try {
    const response = await fetch(`${API_URL}/admission-form`);
    const data = await response.json();
    setAdmissionForms(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

useEffect(() => {
  fetchAdmissionForms();
}, []);
  
const Field = ({ label, value }) => (
    <div className="mb-4 border p-2 rounded">
      <span className="font-semibold text-black">{label}:</span>
      <span className="ml-2 text-gray-900">{value || '—'}</span>
    </div>
  );
 
   return (
     <div className="p-6">
       <h1 className="text-2xl font-bold mb-15 text-center ">Admission Forms Management</h1>
      
       <button className="bg-blue-800 text-white px-3 py-1 rounded mt-10 mb-5 font-semibold" onClick={openAdmissionFormModal}>Add AdmissionForm</button>
       <table className="min-w-full bg-white border border-gray-300">
         <thead>
           <tr className="bg-gray-200">
            <th className="p-3 border">Serial No.</th>
             <th className="p-3 border">Student Name</th>
             <th className="p-3 border">Father Name</th>
             <th className="p-3 border">phone</th>
            
             <th className="p-3 border">Actions</th>
           </tr>
         </thead>
         <tbody>
           {AdmissionForms.map((AdmissionForm, index) => (
             <tr key={index} className="border">
               <td className="p-3 border text-center ">{index+1}</td>
               <td className="p-3 border text-center ">{AdmissionForm.studentName}</td>
               <td className="p-3 border text-center ">{AdmissionForm.fatherName}</td>
               <td className="p-3 border text-center ">{AdmissionForm.phoneNum}</td>
               
               <td className="p-3  flex gap-2">
                 <button
                   className="bg-green-500 text-white px-3 py-1 rounded w-[50%]"
                   onClick={() => viewOpenModal(AdmissionForm)}
                 >
                   View
                 </button>
                 <button
                   className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                   onClick={() => openModal(AdmissionForm)}
                 >
                   Update
                 </button>
                <button onClick={() => handleDeleteAdmissionForm(AdmissionForm._id)} className="bg-red-500 text-white px-3 py-1 rounded">
  Delete
</button>

               </td>
             </tr>
           ))}
         </tbody>
       </table>
        
        
 
       {viewAdmissionFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
         <div className="bg-white max-h-[90vh] overflow-y-auto rounded-xl shadow-xl w-full max-w-4xl p-8 relative">
          
           <h2 className="text-2xl font-bold mb-6 text-center">Student Admission Details</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
             <Field label="Student Name" value={currentForm.studentName} />
             <Field label="Date of Birth" value={new Date(currentForm.DOB).toLocaleDateString()} />
             <Field label="Gender" value={currentForm.gender} />
             <Field label="Phone Number" value={currentForm.phoneNum} />
             <Field label="Email" value={currentForm.email} />
             <Field label="Aadhar Number" value={currentForm.aadharNum} />
             <Field label="Nationality" value={currentForm.nationality} />
             <Field label="Religion" value={currentForm.religion} />
             <Field label="Blood Group" value={currentForm.bloodGroup} />
             <Field label="Permanent Address" value={currentForm.permanentAddress} />
             <Field label="Current Address" value={currentForm.currentAddress} />
             <Field label="Father's Name" value={currentForm.fatherName} />
             <Field label="Mother's Name" value={currentForm.motherName} />
             <Field label="Guardian's Name" value={currentForm.guardianName} />
             <Field label="Guardian's Phone" value={currentForm.guardianNum} />
             <Field label="Guardian's Email" value={currentForm.guardianEmail} />
             <Field label="Guardian's Occupation" value={currentForm.guardianOccupation} />
             <Field label="Annual Income" value={currentForm.annualIncome} />
             <Field label="Guardian Permanent Address" value={currentForm.guardianPermanentAddress} />
             <Field label="Guardian Current Address" value={currentForm.guardianCurrentAddress} />
             <Field label="Previous School Name" value={currentForm.previousSchoolName} />
             <Field label="Last Class Attended" value={currentForm.lastClassAttended} />
             <Field label="Medium of Instruction" value={currentForm.mediumOfInstruction} />
             <Field label="Previous Class Division" value={currentForm.previousClassDivision} />
             <Field label="Total Marks" value={currentForm.totalMarks} />
             <Field label="Obtained Marks" value={currentForm.obtainedMarks} />
             <Field label="Transfer Certificate Reg. No." value={currentForm.transferCertificateRegistrationNumber} />
             <Field label="Last School Address" value={currentForm.lastSchoolAddress} />
             <Field label="Academic Year" value={currentForm.academicYear} />
             <Field label="Class Group" value={currentForm.classGroup} />
             <Field label="Standard for Admission" value={currentForm.standardForAdmission} />
             <Field label="Stream" value={currentForm.stream} />
             <Field label="Sibling in Same School" value={currentForm.siblingInSameSchool} />
             <Field label="Sibling Count in School" value={currentForm.siblingNumInSameSchool} />
             <Field label="Sibling Name" value={currentForm.siblingName} />
             <Field label="Sibling Standard" value={currentForm.siblingStandard} />
             <Field label="Sibling Admission No." value={currentForm.siblingAdmissionNumber} />
             <Field label="Transport Need" value={currentForm.transportNeed} />
             <Field label="Pickup Point" value={currentForm.pickUpPoint} />
             <Field label="Drop Off Point" value={currentForm.dropOffPoint} />
           </div>
           <button className='lg:w-[40%] md:w-[40%] sm:w-[40%] w-[40%] lg:mx-60 md:mx-5 sm:mx-5 mx-5 my-5 hover:underline hover:border-black border-2 p-2 bg-blue-700 text-lg font-bold text-white rounded-lg' onClick={closeViewOpenModal}>Close</button>
         </div>
       </div>
     )}
     {isModalOpen && (
          <div className='w-full mb-20 fixed inset-0 flex items-center justify-center bg-white p-6 rounded shadow-lg h-full bg-opacity-50 overflow-scroll'>

          <div className='lg:w-[80%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto mt-20 h-[100%]    rounded-xl  '>
             <div className='mx-auto text-center mb-10 w-full bg-blue-700 rounded-tl-xl rounded-tr-xl'>
                 <h1 className='text-3xl font-bold w-full p-3 text-white'>ONLINE SCHOOL ADMISSION FORM</h1>
             </div>
           <form onSubmit={(e) => { e.preventDefault(); handleUpdateAdmissionForm(); }}>
           <div className="form-info w-full ">
             <div className="student-info w-full p-5">
             <h1 className='text-blue-700 text-xl font-bold mb-5 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Student Information</h1>
               <div className="row-1 flex justify-between  lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5 ">
                 <div className="student-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto  lg:mb-0 md:mb-5 sm:mb-5  mb-5 ">
                 <label for="Student-Name" className='font-semibold mb-2'>Student Name <span className='text-red-600 font-bold'>*</span></label>
                 <input id="Student-Name"type="text" name='studentName' onChange={handleEditInputChange} value={editingAdmissionForm?.studentName || ''} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Student Name ' />
                 </div>
                 <div className="student-dob lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5 mb-5">
                    <label htmlFor="DOB" className='font-semibold mb-2'>Date Of Birth (DOB)<span className='text-red-600 font-bold'>*</span></label>
                    <input type="date" id="DOB" name="DOB" onChange={handleEditInputChange} value={editingAdmissionForm?.DOB ? editingAdmissionForm.DOB.slice(0, 10) : ''} className="border-2 p-5 h-10 rounded-md w-full" />
                </div>
                 <div className="father-gender lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                 <label className='font-semibold mb-3'>Gender <span className='text-red-600 font-bold'>*</span></label>
                 <select name='gender' onChange={handleEditInputChange} value={editingAdmissionForm?.gender || ''} id=""  className='border-2  h-10 rounded-md '>
                   <option value="">Select Gender :</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                   <option value="Other">Other</option>
                 </select>
                 </div>
               </div>
               <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                   <div className="mobile-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                       <label for="Contact-Number" className='font-semibold mb-2'>Contact Number (Mobile/Phone)<span className='text-red-600 font-bold'>*</span></label>
                       <input type="number" id="Contact-Number" name='phoneNum' onChange={handleEditInputChange} value={editingAdmissionForm?.phoneNum || ''} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Contact Number ' />
                  </div>
                   <div className="email-id lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                       <label className='font-semibold mb-2' for="email">Email ID<span className='text-red-600 font-bold'>*</span></label>
                       <input type="email" id='email' name='email' onChange={handleEditInputChange} value={editingAdmissionForm?.email || ''} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Email ID ' />
                  </div>
                  <div className="aadhar-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                       <label className='font-semibold mb-2' for="Aadhar-Number">Aadhar Number<span className='text-red-600 font-bold'>*</span> </label>
                       <input type="number" id="Aadhar-Number" name='aadharNum' onChange={handleEditInputChange} value={editingAdmissionForm?.aadharNum || ''} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Aadhar Number ' />
                  </div>
               </div>
               <div className="row-3 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
               <div className="Nationality lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="Nationality" className='font-semibold mb-2'>Nationality<span className='text-red-600 font-bold'>*</span></label>
     
                             <select id="Nationality" name='nationality' onChange={handleEditInputChange} value={editingAdmissionForm?.nationality || ''} className='border-2  h-10 rounded-md '>
                                <option value="" className='p-2'>Select Nationality</option>
                                <option value="Indian">Indian</option>
                                <option value="Indian">Other</option>
                                
                             </select>
                 </div>
                      <div className=" lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="religion" className='font-semibold mb-2'>Religion</label>
     
                             <select id="religion"  name='religion' onChange={handleEditInputChange} value={editingAdmissionForm?.religion || ''}  className='border-2  h-10 rounded-md '>
                                <option value="" className='p-2'>Select Religion</option>
                                <option value="Islam">Islam</option>
                                <option value="Hinduism">Hinduism</option>
                                <option value="Christianity">Christianity</option>
                                <option value="Sikhism">Sikhism</option>
                                <option value="Jainism">Jainism</option>
                                <option value="other">Other</option>
                             </select>
                 </div>
                 <div className="blood-group lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                 <label for="blood-group" className='font-semibold mb-2'>Blood Group</label>
     
                <select id="blood-group" name='bloodGroup' onChange={handleEditInputChange} value={editingAdmissionForm?.bloodGroup || ''} className='border-2 h-10 rounded-md'>
                   <option value="" className='p-2'>Select Blood Group</option>
                   <option value="A+">A+</option>
                   <option value="A-">A-</option>
                   <option value="B+">B+</option>
                   <option value="B-">B-</option>
                   <option value="O+">O+</option>
                   <option value="O-">O-</option>
                   <option value="AB+">AB+</option>
                   <option value="AB-">AB-</option>
               </select>
                 </div>
               </div>
               <div className="row-4 flex gap-12 w-full mb-5 lg:flex-row md:flex-col sm:flex-col flex-col">
               <div className="parents-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                 <label for="permanentAddress" className='font-semibold mb-2'>Permanent Address<span className='text-red-600 font-bold'>*</span></label>
                 <textarea id="permanentAddress" name='permanentAddress' onChange={handleEditInputChange} value={editingAdmissionForm?.permanentAddress || ''} placeholder="Enter Permanent Address" className='border-2 p-5  rounded-md w-[100%] ' row={12} cols={20}></textarea>
                 </div>
                 <div className="current-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
               
                    <label for="currentAddress" className='font-semibold mb-2'>Current Address:</label>
                    <textarea id="currentAddress" name='currentAddress' onChange={handleEditInputChange} value={editingAdmissionForm?.currentAddress || ''} placeholder="Enter Current Address" className='border-2 p-5  rounded-md w-[100%] '  row={12} cols={20}></textarea>
     
                 </div>
               </div>
             </div>
             <div className="Parent/Guardian Information w-full p-5">
             <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[28%] sm:mx-[15%] mx-[18%]'>Parent/Guardian Information</h1>
               <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                 <div className="Father-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                 <label className='font-semibold mb-2' for="Father-Name">Father’s Name <span className='text-red-600 font-bold'>*</span></label>
                 <input type="text" name='fatherName' onChange={handleEditInputChange} value={editingAdmissionForm?.fatherName || ''} className='border-2 p-5 h-10 rounded-md w-[100%]' id='Father-Name' placeholder='Enter Father’s Name ' />
                 </div>
                 <div className="Mother-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                 <label className='font-semibold mb-2' for="Mother-Name">Mother’s Name <span className='text-red-600 font-bold'>*</span></label>
                 <input type="text" id="Mother-Name" name='motherName' onChange={handleEditInputChange} value={editingAdmissionForm?.motherName || ''} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Mother’s Name ' />
                 </div>
                 <div className="Guardian-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                 <label className='font-semibold mb-2' for="Guardian-Name">Guardian’s Name (if applicable) </label>
                 <input type="text" id="Guardian-Name" name='guardianName' onChange={handleEditInputChange} value={editingAdmissionForm?.guardianName || ''} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Guardian’s Name ' />
                 </div>
                 
               
               </div>
               <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
               <div className="contact-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                       <label className='font-semibold mb-2' for='Contact-Number'>Parent/Guardian's Contact Number<span className='text-red-600 font-bold'>*</span> </label>
                       <input type="number" id='Contact-Number' name='guardianNum' onChange={handleEditInputChange} value={editingAdmissionForm?.guardianNum || ''} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Contact Number ' />
                  </div>
                   <div className="email-id lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                       <label className='font-semibold mb-2' for="Email-ID">Parent/Guardian's Email ID<span className='text-red-600 font-bold'>*</span></label>
                       <input type="email" id="Email-ID" name='guardianEmail' onChange={handleEditInputChange} value={editingAdmissionForm?.guardianEmail || ''}  className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Email ID ' />
                  </div>
                 <div className="Guardian-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                    <label className='font-semibold mb-2' for="Occupation">Parent/Guardian's Occupation</label>
                    <input type="text" id="Occupation" name='guardianOccupation'  onChange={handleEditInputChange} value={editingAdmissionForm?.guardianOccupation || ''}  className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Occupation ' />
                 </div>
               
              
               </div>
               <div className="row-3 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                       <div className="aadhar-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                       <label className='font-semibold mb-2' for="Income">Parent's Annual Income<span className='text-red-600 font-bold'>*</span> </label>
                       <input type="number" id="Income" name='annualIncome' onChange={handleEditInputChange} value={editingAdmissionForm?.annualIncome || ''} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Annual Income ' />
                     </div>
                 
                     <div className="parents-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                            <label for="permanentAddress" className='font-semibold mb-2'>Permanent Address<span className='text-red-600 font-bold'>*</span></label>
                           <textarea id="permanentAddress" name='guardianPermanentAddress' onChange={handleEditInputChange} value={editingAdmissionForm?.guardianPermanentAddress || ''} placeholder="Enter Guardian Permanent Address" className='border-2 p-5  rounded-md w-[100%] ' row={12} cols={20}></textarea>
                     </div>
                     <div className="current-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
               
                            <label for="currentAddress" className='font-semibold mb-2'>Current Address:</label>
                            <textarea id="currentAddress"  name='guardianCurrentAddress' onChange={handleEditInputChange} value={editingAdmissionForm?.guardianCurrentAddress || ''} placeholder="Enter Current Address" className='border-2 p-5  rounded-md w-[100%] '  row={12} cols={20}></textarea>
                         
                 </div>
               </div>
              
             </div>
             <div className="Academic-Information w-full p-5">
             <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Academic Information</h1>
               <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                 <div className="Previous-School-Name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                 <label className='font-semibold mb-2' for="School-Name">Previous School Name <span className='text-red-600 font-bold'>*</span></label>
                 <input type="text"  name='previousSchoolName' onChange={handleEditInputChange} value={editingAdmissionForm?.previousSchoolName || ''} className='border-2 p-5 h-10 rounded-md w-[100%]' id="School-Name" placeholder='Enter Previous School Name ' />
                 </div>
                 <div className="Last-Class-Attended lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                 <label className='font-semibold mb-2' for="Class-Attended">Last Class Attended <span className='text-red-600 font-bold'>*</span></label>
                 <select  name='lastClassAttended'  onChange={handleEditInputChange} value={editingAdmissionForm?.lastClassAttended || ''} id="Class-Attended" className='border-2 h-10 rounded-md'>
                    <option value="">Select Last Class Attended</option>
                    <option value="Fresh">Fresh</option>
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
                   <div className="Medium-of-Instruction lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="Medium" className='font-semibold mb-2'>Medium of Instruction<span className='text-red-600 font-bold'>*</span></label>
     
                             <select id="Medium"  name='mediumOfInstruction' onChange={handleEditInputChange} value={editingAdmissionForm?.mediumOfInstruction || ''} className='border-2  h-10 rounded-md '>
                                <option value="" className='p-2'>Select Medium of Instruction</option>
                                <option value="Hindi">Hindi</option>
                                <option value="English">English</option>
                             </select>
                 </div>
                 
               
               </div>
               <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
               <div className="Previous-Class-Division lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="Previous-Class-Division" className='font-semibold mb-2'>Previous Class Division<span className='text-red-600 font-bold'>*</span></label>
     
                             <select id="Previous-Class-Division" name='previousClassDivision' onChange={handleEditInputChange} value={editingAdmissionForm?.previousClassDivision || ''}  className='border-2  h-10 rounded-md '>
                                <option value="" className='p-2'>Select Previous Class Division</option>
                                <option value="First Division">First Division</option>
                                <option value="Second Division">Second Division</option>
                                <option value="Third Division">Third Division</option>
                                <option value="Promoted">Promoted</option>
                             </select>
                 </div>
                   <div className="total-marks lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                       <label className='font-semibold mb-2' for="Total-Marks">Total Marks<span className='text-red-600 font-bold'>*</span></label>
                       <input type="number" id="Total-Marks" name='totalMarks' onChange={handleEditInputChange} value={editingAdmissionForm?.totalMarks || ''}  className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Total Marks ' />
                  </div>
                 <div className="Obtained-Marks lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                    <label className='font-semibold mb-2' for="Obtained-Marks">Obtained Marks <span className='text-red-600 font-bold'>*</span></label>
                    <input type="number" id="Obtained-Marks"  name='obtainedMarks' onChange={handleEditInputChange} value={editingAdmissionForm?.obtainedMarks || ''}  className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Obtained Marks ' />
                 </div>
               
              
               </div>
               <div className="row-3 flex gap-12 ml-2 w-full mb-5 lg:flex-row md:flex-col sm:flex-col flex-col">
                       <div className="TC-No lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                       <label className='font-semibold mb-2' for="TC">Transfer Certificate Registration Number<span className='text-red-600 font-bold'>*</span> </label>
                       <input type="number" id="TC"  name='transferCertificateRegistrationNumber' onChange={handleEditInputChange} value={editingAdmissionForm?.transferCertificateRegistrationNumber || ''} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Registration Number' />
                     </div>
                 
                     <div className="Last-School-Address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                            <label for="Last-School-Address" className='font-semibold mb-2'>Last School Address<span className='text-red-600 font-bold'>*</span></label>
                           <textarea id="Last-School-Address"  name='lastSchoolAddress' onChange={handleEditInputChange} value={editingAdmissionForm?.lastSchoolAddress || ''} placeholder="Enter Last School Address" className='border-2 p-5  rounded-md w-[100%] ' row={12} cols={20}></textarea>
                     </div>
                     
               </div>
              
             </div>
             <div className="Course-Information w-full p-5">
             <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[28%] sm:mx-[20%] mx-[18%]'>Class and Course Information</h1>
               <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
               <div className="Academic-year lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="academic-year" className='font-semibold mb-2'>Academic Year<span className='text-red-600 font-bold'>*</span></label>
     
                             <select id="academic-year"  name='academicYear'  onChange={handleEditInputChange} value={editingAdmissionForm?.academicYear || ''} className='border-2  h-10 rounded-md '>
                                <option value="" className='p-2'>Select Academic Year</option>
                                <option value="2024-25">2024-25</option>
                                <option value="2025-26">2025-26</option>
                             </select>
                   </div>
               <div className="Class-Group lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="Class-Group" className='font-semibold mb-2'>Class Group<span className='text-red-600 font-bold'>*</span></label>
     
                             <select id="Class-Group"  name='classGroup'  onChange={handleEditInputChange} value={editingAdmissionForm?.classGroup || ''} className='border-2  h-10 rounded-md '>
                                <option value="" className='p-2'>Select Class Group</option>
                                <option value="Pre-primary">Pre-primary</option>
                                <option value="Primary">Primary</option>
                                <option value="Middle">Middle</option>
                                <option value="Secondary">Secondary</option>
                                <option value="Senior Secondary">Senior Secondary</option>
                             </select>
                 </div>
                 <div className="Standards lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="Standards" className='font-semibold mb-2'>Standards for Admission<span className='text-red-600 font-bold'>*</span></label>
     
                             <select id="Standards"  name='standardForAdmission' onChange={handleEditInputChange} value={editingAdmissionForm?.standardForAdmission || ''}  className='border-2  h-10 rounded-md '>
                                <option value="" className='p-2'>Select Standard for Admission</option>
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
               </div>
               <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
               <div className="Stream lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="Stream" className='font-semibold mb-2'>Stream (if applicable for higher classes)<span className='text-red-600 font-bold'>*</span></label>
     
                             <select id="Stream"  name='stream'  onChange={handleEditInputChange} value={editingAdmissionForm?.stream || ''} className='border-2  h-10 rounded-md '>
                                <option value="" className='p-2'>Select Stream</option>
                                <option value="Art">Art</option>
                                <option value="Science">Science</option>
                                <option value="Commerce">Commerce</option>
                                <option value="PCM">PCM</option>
                                <option value="PCB">PCB</option>
                                <option value="Not-Eligible">Not Eligible</option>    
                             </select>
                   </div>  
               </div>   
             </div>
             <div className="Sibling-Information w-full p-5">
             <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Sibling Information</h1>
               <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
               <div className="Sibling-info lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="Sibling-info" className='font-semibold mb-2'>Sibling's currently studying in the same school (Yes/No) : </label>
     
                             <select id="Sibling-info"  name='siblingInSameSchool' onChange={handleEditInputChange} value={editingAdmissionForm?.siblingInSameSchool || ''}  className='border-2  h-10 rounded-md '>
                                <option value="" className='p-2'>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                             </select>
                   </div>
                   <div className="Sibling-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="Sibling-number" className='font-semibold mb-2'>Select number of Sibling's in the school : </label>
     
                             <select id="Sibling-number"  name='siblingNumInSameSchool' onChange={handleEditInputChange} value={editingAdmissionForm?.siblingNumInSameSchool || ''} className='border-2  h-10 rounded-md '>
                                <option value="" className='p-2'>Select Number Of Sibling </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                             </select>
                   </div>
                    
               </div>
               <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
               <div className="Sibling-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                 <label className='font-semibold mb-2' for="Sibling-Name">Sibling Name <span className='text-red-600 font-bold'>*</span></label>
                 <input type="text" id="Sibling-Name"  name='siblingName'  onChange={handleEditInputChange} value={editingAdmissionForm?.siblingName || ''} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Sibling Name ' />
                 </div>
                 <div className="Sibling-Standards lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="Sibling-Standards" className='font-semibold mb-2'>Sibling's Standard<span className='text-red-600 font-bold'>*</span></label>
     
                             <select id="Sibling-Standards"  name='siblingStandard' onChange={handleEditInputChange} value={editingAdmissionForm?.siblingStandard || ''} className='border-2  h-10 rounded-md '>
                                <option value="" className='p-2'>Select Sibling's Standard </option>
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
                 <div className="Sibling-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                 <label className='font-semibold mb-2' for="Admission-Number">Sibling's Admission Number <span className='text-red-600 font-bold'>*</span></label>
                 <input type="number" id="Admission Number"  name='siblingAdmissionNumber' onChange={handleEditInputChange} value={editingAdmissionForm?.siblingAdmissionNumber || ''} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Sibling Admission Number' />
                 </div>
               
               </div>   
             </div>
             <div className="Transportation-Details w-full p-5">
             <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Transportation Details</h1>
               <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
               <div className="Transportation-Details lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="Transportation-Details" className='font-semibold mb-2'>Need for School Transport (Yes/No) : </label>
     
                             <select id="Transportation-Details"  name='transportNeed' onChange={handleEditInputChange} value={editingAdmissionForm?.transportNeed || ''} className='border-2  h-10 rounded-md '>
                                <option value="" className='p-2'>Select Transport Need</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                             </select>
                   </div>
                   <div className="Pick-Up lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                 <label className='font-semibold mb-2' for="Pick-Up">Pick-Up Point <span className='text-red-600 font-bold'>*</span></label>
                 <input type="text" id="Pick-Up"  name='pickUpPoint' onChange={handleEditInputChange} value={editingAdmissionForm?.pickUpPoint || ''}  className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Pick-Up Point ' />
                 </div>
                 <div className="Drop-off lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                 <label className='font-semibold mb-2' for="Drop-off">Drop-off Point <span className='text-red-600 font-bold'>*</span></label>
                 <input type="text" id="Drop-off"  name='dropOffPoint' onChange={handleEditInputChange} value={editingAdmissionForm?.dropOffPoint || ''}  className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Drop-off Point ' />
                 </div>
                  
                    
               </div>
             
             </div>
             <div className="Documents-Required w-full p-5">
             <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[15%] sm:mx-[10%] mx-[8%]'>Documents Required</h1> 
             <p className='text-green-700 ml-5  mb-5'>Submit these documents at the college visit time.</p> 
               <ul className='list-disc ml-10 mb-5'>
                 
                 <li>Birth Certificate</li>
                 <li>Previous School's Transfer Certificate (TC)</li>
                 <li>Previous School's Report Card</li>
                 <li>Aadhar Card (or other ID proof)</li>
                 <li>Passport-sized Photograph</li>
                 <li>Parent/Guardian’s ID Proof (Aadhar, Passport, etc.)</li>
                 </ul>   
               
             </div>
             <div className='flex gap-10 w-full '>
             <button className='lg:w-[40%] md:w-[40%] sm:w-[40%] w-[40%] lg:mx-60 md:mx-5 sm:mx-5 mx-5 mb-5 hover:underline hover:border-black border-2 p-2 bg-blue-700 text-lg font-semibold text-white rounded-lg'>Update</button>
             <button
                 type="button"
                 className='lg:w-[40%] md:w-[40%] sm:w-[40%] w-[40%] lg:mx-60 md:mx-5 sm:mx-5 mx-5 mb-5 hover:underline hover:border-black border-2 p-2 bg-blue-700 text-lg font-semibold text-white rounded-lg'
                  onClick={closeModal}
               >
                 Cancel
               </button>
             </div>
            </div>
           </form>
             </div>
     
       </div>
)}

 
       {isAddAdmissionFormModalOpen && (
           <div className='w-full mb-20 fixed inset-0 flex items-center justify-center bg-white p-6 rounded shadow-lg h-full bg-opacity-50 overflow-scroll'>

           <div className='lg:w-[80%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto mt-20 h-[100%]    rounded-xl  '>
              <div className='mx-auto text-center mb-10 w-full bg-blue-700 rounded-tl-xl rounded-tr-xl'>
                  <h1 className='text-3xl font-bold w-full p-3 text-white'>ONLINE SCHOOL ADMISSION FORM</h1>
              </div>
            <form onSubmit={handleSubmit}>
            <div className="form-info w-full ">
              <div className="student-info w-full p-5">
              <h1 className='text-blue-700 text-xl font-bold mb-5 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Student Information</h1>
                <div className="row-1 flex justify-between  lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5 ">
                  <div className="student-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto  lg:mb-0 md:mb-5 sm:mb-5  mb-5 ">
                  <label for="Student-Name" className='font-semibold mb-2'>Student Name <span className='text-red-600 font-bold'>*</span></label>
                  <input id="Student-Name"type="text" name='studentName' value={newAdmissionForm.studentName} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Student Name ' />
                  </div>
                  <div className="student-dob lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                    <label for="DOB" className='font-semibold mb-2'>Date Of Birth(DOB)<span className='text-red-600 font-bold'>*</span></label>
                    <input type="date" id="DOB" name='DOB' value={newAdmissionForm.DOB} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] '  />
                  </div>
                  <div className="father-gender lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-3'>Gender <span className='text-red-600 font-bold'>*</span></label>
                  <select name='gender' value={newAdmissionForm.gender} onChange={handleInputChange} id=""  className='border-2  h-10 rounded-md '>
                    <option value="">Select Gender :</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  </div>
                </div>
                <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                    <div className="mobile-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label for="Contact-Number" className='font-semibold mb-2'>Contact Number (Mobile/Phone)<span className='text-red-600 font-bold'>*</span></label>
                        <input type="number" id="Contact-Number" name='phoneNum' value={newAdmissionForm.phoneNum} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Contact Number ' />
                   </div>
                    <div className="email-id lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label className='font-semibold mb-2' for="email">Email ID<span className='text-red-600 font-bold'>*</span></label>
                        <input type="email" id='email' name='email' value={newAdmissionForm.email} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Email ID ' />
                   </div>
                   <div className="aadhar-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label className='font-semibold mb-2' for="Aadhar-Number">Aadhar Number<span className='text-red-600 font-bold'>*</span> </label>
                        <input type="number" id="Aadhar-Number" name='aadharNum' value={newAdmissionForm.aadharNum} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Aadhar Number ' />
                   </div>
                </div>
                <div className="row-3 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                <div className="Nationality lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                              <label for="Nationality" className='font-semibold mb-2'>Nationality<span className='text-red-600 font-bold'>*</span></label>
      
                              <select id="Nationality" name='nationality' value={newAdmissionForm.nationality} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                                 <option value="" className='p-2'>Select Nationality</option>
                                 <option value="Indian">Indian</option>
                                 <option value="Indian">Other</option>
                                 
                              </select>
                  </div>
                       <div className="religion lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                              <label for="religion" className='font-semibold mb-2'>Religion</label>
      
                              <select id="religion"  name='religion' value={newAdmissionForm.religion} onChange={handleInputChange}  className='border-2  h-10 rounded-md '>
                                 <option value="" className='p-2'>Select Religion</option>
                                 <option value="Islam">Islam</option>
                                 <option value="Hinduism">Hinduism</option>
                                 <option value="Christianity">Christianity</option>
                                 <option value="Sikhism">Sikhism</option>
                                 <option value="Jainism">Jainism</option>
                                 <option value="other">Other</option>
                              </select>
                  </div>
                  <div className="blood-group lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label for="blood-group" className='font-semibold mb-2'>Blood Group</label>
      
                 <select id="blood-group" name='bloodGroup' value={newAdmissionForm.bloodGroup} onChange={handleInputChange} className='border-2 h-10 rounded-md'>
                    <option value="" className='p-2'>Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
                  </div>
                </div>
                <div className="row-4 flex gap-12 w-full mb-5 lg:flex-row md:flex-col sm:flex-col flex-col">
                <div className="parents-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label for="permanentAddress" className='font-semibold mb-2'>Permanent Address<span className='text-red-600 font-bold'>*</span></label>
                  <textarea id="permanentAddress" name='permanentAddress' value={newAdmissionForm.permanentAddress} onChange={handleInputChange} placeholder="Enter Permanent Address" className='border-2 p-5  rounded-md w-[100%] ' row={12} cols={20}></textarea>
                  </div>
                  <div className="current-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                
                     <label for="currentAddress" className='font-semibold mb-2'>Current Address:</label>
                     <textarea id="currentAddress" name='currentAddress' value={newAdmissionForm.currentAddress} onChange={handleInputChange} placeholder="Enter Current Address" className='border-2 p-5  rounded-md w-[100%] '  row={12} cols={20}></textarea>
      
                  </div>
                </div>
              </div>
              <div className="Parent/Guardian Information w-full p-5">
              <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[28%] sm:mx-[15%] mx-[18%]'>Parent/Guardian Information</h1>
                <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                  <div className="Father-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Father-Name">Father’s Name <span className='text-red-600 font-bold'>*</span></label>
                  <input type="text" name='fatherName' value={newAdmissionForm.fatherName} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' id='Father-Name' placeholder='Enter Father’s Name ' />
                  </div>
                  <div className="Mother-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Mother-Name">Mother’s Name <span className='text-red-600 font-bold'>*</span></label>
                  <input type="text" id="Mother-Name" name='motherName' value={newAdmissionForm.motherName} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Mother’s Name ' />
                  </div>
                  <div className="Guardian-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Guardian-Name">Guardian’s Name (if applicable) </label>
                  <input type="text" id="Guardian-Name" name='guardianName' value={newAdmissionForm.guardianName} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Guardian’s Name ' />
                  </div>
                  
                
                </div>
                <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                <div className="contact-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label className='font-semibold mb-2' for='Contact-Number'>Parent/Guardian's Contact Number<span className='text-red-600 font-bold'>*</span> </label>
                        <input type="number" id='Contact-Number' name='guardianNum' value={newAdmissionForm.guardianNum} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Contact Number ' />
                   </div>
                    <div className="email-id lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label className='font-semibold mb-2' for="Email-ID">Parent/Guardian's Email ID<span className='text-red-600 font-bold'>*</span></label>
                        <input type="email" id="Email-ID" name='guardianEmail' value={newAdmissionForm.guardianEmail} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Email ID ' />
                   </div>
                  <div className="Guardian-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                     <label className='font-semibold mb-2' for="Occupation">Parent/Guardian's Occupation</label>
                     <input type="text" id="Occupation" name='guardianOccupation' value={newAdmissionForm.guardianOccupation} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Occupation ' />
                  </div>
                
               
                </div>
                <div className="row-3 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                        <div className="aadhar-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label className='font-semibold mb-2' for="Income">Parent's Annual Income<span className='text-red-600 font-bold'>*</span> </label>
                        <input type="number" id="Income" name='annualIncome' value={newAdmissionForm.annualIncome} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Annual Income ' />
                      </div>
                  
                      <div className="parents-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="permanentAddress" className='font-semibold mb-2'>Permanent Address<span className='text-red-600 font-bold'>*</span></label>
                            <textarea id="permanentAddress" name='guardianPermanentAddress' value={newAdmissionForm.guardianPermanentAddress} onChange={handleInputChange} placeholder="Enter Guardian Permanent Address" className='border-2 p-5  rounded-md w-[100%] ' row={12} cols={20}></textarea>
                      </div>
                      <div className="current-address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                
                             <label for="currentAddress" className='font-semibold mb-2'>Current Address:</label>
                             <textarea id="currentAddress"  name='guardianCurrentAddress' value={newAdmissionForm.guardianCurrentAddress} onChange={handleInputChange} placeholder="Enter Current Address" className='border-2 p-5  rounded-md w-[100%] '  row={12} cols={20}></textarea>
                          
                  </div>
                </div>
               
              </div>
              <div className="Academic-Information w-full p-5">
              <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Academic Information</h1>
                <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                  <div className="Previous-School-Name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="School-Name">Previous School Name <span className='text-red-600 font-bold'>*</span></label>
                  <input type="text"  name='previousSchoolName' value={newAdmissionForm.previousSchoolName} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' id="School-Name" placeholder='Enter Previous School Name ' />
                  </div>
                  <div className="Last-Class-Attended lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Class-Attended">Last Class Attended <span className='text-red-600 font-bold'>*</span></label>
                  <select  name='lastClassAttended' value={newAdmissionForm.lastClassAttended} onChange={handleInputChange} id="Class-Attended" className='border-2 h-10 rounded-md'>
                     <option value="">Select Last Class Attended</option>
                     <option value="Fresh">Fresh</option>
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
                    <div className="Medium-of-Instruction lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                              <label for="Medium" className='font-semibold mb-2'>Medium of Instruction<span className='text-red-600 font-bold'>*</span></label>
      
                              <select id="Medium"  name='mediumOfInstruction' value={newAdmissionForm.mediumOfInstruction} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                                 <option value="" className='p-2'>Select Medium of Instruction</option>
                                 <option value="Hindi">Hindi</option>
                                 <option value="English">English</option>
                              </select>
                  </div>
                  
                
                </div>
                <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                <div className="Previous-Class-Division lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                              <label for="Previous-Class-Division" className='font-semibold mb-2'>Previous Class Division<span className='text-red-600 font-bold'>*</span></label>
      
                              <select id="Previous-Class-Division" name='previousClassDivision' value={newAdmissionForm.previousClassDivision} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                                 <option value="" className='p-2'>Select Previous Class Division</option>
                                 <option value="First Division">First Division</option>
                                 <option value="Second Division">Second Division</option>
                                 <option value="Third Division">Third Division</option>
                                 <option value="Promoted">Promoted</option>
                              </select>
                  </div>
                    <div className="total-marks lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label className='font-semibold mb-2' for="Total-Marks">Total Marks<span className='text-red-600 font-bold'>*</span></label>
                        <input type="number" id="Total-Marks" name='totalMarks' value={newAdmissionForm.totalMarks} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Total Marks ' />
                   </div>
                  <div className="Obtained-Marks lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                     <label className='font-semibold mb-2' for="Obtained-Marks">Obtained Marks <span className='text-red-600 font-bold'>*</span></label>
                     <input type="number" id="Obtained-Marks"  name='obtainedMarks' value={newAdmissionForm.obtainedMarks} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Obtained Marks ' />
                  </div>
                
               
                </div>
                <div className="row-3 flex gap-12 ml-2 w-full mb-5 lg:flex-row md:flex-col sm:flex-col flex-col">
                        <div className="TC-No lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                        <label className='font-semibold mb-2' for="TC">Transfer Certificate Registration Number<span className='text-red-600 font-bold'>*</span> </label>
                        <input type="number" id="TC"  name='transferCertificateRegistrationNumber' value={newAdmissionForm.transferCertificateRegistrationNumber} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%]' placeholder='Enter Registration Number' />
                      </div>
                  
                      <div className="Last-School-Address lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                             <label for="Last-School-Address" className='font-semibold mb-2'>Last School Address<span className='text-red-600 font-bold'>*</span></label>
                            <textarea id="Last-School-Address"  name='lastSchoolAddress' value={newAdmissionForm.lastSchoolAddress} onChange={handleInputChange} placeholder="Enter Last School Address" className='border-2 p-5  rounded-md w-[100%] ' row={12} cols={20}></textarea>
                      </div>
                      
                </div>
               
              </div>
              <div className="Course-Information w-full p-5">
              <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[28%] sm:mx-[20%] mx-[18%]'>Class and Course Information</h1>
                <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                <div className="Academic-year lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                              <label for="academic-year" className='font-semibold mb-2'>Academic Year<span className='text-red-600 font-bold'>*</span></label>
      
                              <select id="academic-year"  name='academicYear' value={newAdmissionForm.academicYear} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                                 <option value="" className='p-2'>Select Academic Year</option>
                                 <option value="2024-25">2024-25</option>
                                 <option value="2025-26">2025-26</option>
                              </select>
                    </div>
                <div className="Class-Group lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                              <label for="Class-Group" className='font-semibold mb-2'>Class Group<span className='text-red-600 font-bold'>*</span></label>
      
                              <select id="Class-Group"  name='classGroup' value={newAdmissionForm.classGroup} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                                 <option value="" className='p-2'>Select Class Group</option>
                                 <option value="Pre-primary">Pre-primary</option>
                                 <option value="Primary">Primary</option>
                                 <option value="Middle">Middle</option>
                                 <option value="Secondary">Secondary</option>
                                 <option value="Senior Secondary">Senior Secondary</option>
                              </select>
                  </div>
                  <div className="Standards lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                              <label for="Standards" className='font-semibold mb-2'>Standards for Admission<span className='text-red-600 font-bold'>*</span></label>
      
                              <select id="Standards"  name='standardForAdmission' value={newAdmissionForm.standardForAdmission} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                                 <option value="" className='p-2'>Select Standard for Admission</option>
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
                </div>
                <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                <div className="Stream lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                              <label for="Stream" className='font-semibold mb-2'>Stream (if applicable for higher classes)<span className='text-red-600 font-bold'>*</span></label>
      
                              <select id="Stream"  name='stream' value={newAdmissionForm.stream} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                                 <option value="" className='p-2'>Select Stream</option>
                                 <option value="Art">Art</option>
                                 <option value="Science">Science</option>
                                 <option value="Commerce">Commerce</option>
                                 <option value="PCM">PCM</option>
                                 <option value="PCB">PCB</option>
                                 <option value="Not-Eligible">Not Eligible</option>    
                              </select>
                    </div>  
                </div>   
              </div>
              <div className="Sibling-Information w-full p-5">
              <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Sibling Information</h1>
                <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                <div className="Sibling-info lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                              <label for="Sibling-info" className='font-semibold mb-2'>Sibling's currently studying in the same school (Yes/No) : </label>
      
                              <select id="Sibling-info"  name='siblingInSameSchool' value={newAdmissionForm.siblingInSameSchool} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                                 <option value="" className='p-2'>Select</option>
                                 <option value="Yes">Yes</option>
                                 <option value="No">No</option>
                              </select>
                    </div>
                    <div className="Sibling-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                              <label for="Sibling-number" className='font-semibold mb-2'>Select number of Sibling's in the school : </label>
      
                              <select id="Sibling-number"  name='siblingNumInSameSchool' value={newAdmissionForm.siblingNumInSameSchool} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                                 <option value="" className='p-2'>Select Number Of Sibling </option>
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="3">3</option>
                                 <option value="4">4</option>
                                 <option value="5">5</option>
                                 <option value="6">6</option>
                              </select>
                    </div>
                     
                </div>
                <div className="row-2 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                <div className="Sibling-name lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Sibling-Name">Sibling Name <span className='text-red-600 font-bold'>*</span></label>
                  <input type="text" id="Sibling-Name"  name='siblingName' value={newAdmissionForm.siblingName} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Sibling Name ' />
                  </div>
                  <div className="Sibling-Standards lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                              <label for="Sibling-Standards" className='font-semibold mb-2'>Sibling's Standard<span className='text-red-600 font-bold'>*</span></label>
      
                              <select id="Sibling-Standards"  name='siblingStandard' value={newAdmissionForm.siblingStandard} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                                 <option value="" className='p-2'>Select Sibling's Standard </option>
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
                  <div className="Sibling-number lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Admission-Number">Sibling's Admission Number <span className='text-red-600 font-bold'>*</span></label>
                  <input type="number" id="Admission Number"  name='siblingAdmissionNumber' value={newAdmissionForm.siblingAdmissionNumber} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Sibling Admission Number' />
                  </div>
                
                </div>   
              </div>
              <div className="Transportation-Details w-full p-5">
              <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[33%] sm:mx-[25%] mx-[18%]'>Transportation Details</h1>
                <div className="row-1 flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
                <div className="Transportation-Details lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                              <label for="Transportation-Details" className='font-semibold mb-2'>Need for School Transport (Yes/No) : </label>
      
                              <select id="Transportation-Details"  name='transportNeed' value={newAdmissionForm.transportNeed} onChange={handleInputChange} className='border-2  h-10 rounded-md '>
                                 <option value="" className='p-2'>Select Transport Need</option>
                                 <option value="Yes">Yes</option>
                                 <option value="No">No</option>
                              </select>
                    </div>
                    <div className="Pick-Up lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Pick-Up">Pick-Up Point <span className='text-red-600 font-bold'>*</span></label>
                  <input type="text" id="Pick-Up"  name='pickUpPoint' value={newAdmissionForm.pickUpPoint} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Pick-Up Point ' />
                  </div>
                  <div className="Drop-off lg:w-[30%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto lg:mb-0 md:mb-5 sm:mb-5  mb-5">
                  <label className='font-semibold mb-2' for="Drop-off">Drop-off Point <span className='text-red-600 font-bold'>*</span></label>
                  <input type="text" id="Drop-off"  name='dropOffPoint' value={newAdmissionForm.dropOffPoint} onChange={handleInputChange} className='border-2 p-5 h-10 rounded-md w-[100%] ' placeholder='Enter Drop-off Point ' />
                  </div>
                   
                     
                </div>
              
              </div>
              <div className="Documents-Required w-full p-5">
              <h1 className='text-blue-700 text-xl font-bold mb-10 lg:mx-0 md:mx-[15%] sm:mx-[10%] mx-[8%]'>Documents Required</h1> 
              <p className='text-green-700 ml-5  mb-5'>Submit these documents at the college visit time.</p> 
                <ul className='list-disc ml-10 mb-5'>
                  
                  <li>Birth Certificate</li>
                  <li>Previous School's Transfer Certificate (TC)</li>
                  <li>Previous School's Report Card</li>
                  <li>Aadhar Card (or other ID proof)</li>
                  <li>Passport-sized Photograph</li>
                  <li>Parent/Guardian’s ID Proof (Aadhar, Passport, etc.)</li>
                  </ul>   
                
              </div>
              <div className='flex gap-20 w-full '>
              <button className='lg:w-[40%] md:w-[40%] sm:w-[40%] w-[40%] lg:mx-60 md:mx-5 sm:mx-5 mx-5 mb-10 hover:underline hover:border-black border-2 p-3 bg-blue-700 text-xl font-bold text-white rounded-lg'>Submit</button>
              <button
                  type="button"
                  className='lg:w-[40%] md:w-[40%] sm:w-[40%] w-[40%] lg:mx-60 md:mx-5 sm:mx-5 mx-5 mb-10 hover:underline hover:border-black border-2 p-3 bg-blue-700 text-xl font-bold text-white rounded-lg'
                   onClick={closeAdmissionFormModal}
                >
                  Cancel
                </button>
              </div>
             </div>
            </form>
              </div>
      
        </div>
       )}
     </div>
   );
 }
 


export default AdmissionForm