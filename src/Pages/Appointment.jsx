import React from 'react'
import { useState,useEffect } from 'react';


//     standard: "10th",
//     subjectName: "Mathematics",
//     AppointmentUrl: "https://example.com/Appointments/math-10.pdf"
//   },
//   {
//     standard: "12th",
//     subjectName: "Physics",
//     AppointmentUrl: "https://example.com/Appointments/physics-12.pdf"
//   },
//   {
//     standard: "9th",
//     subjectName: "English",
//     AppointmentUrl: "https://example.com/Appointments/english-9.pdf"
//   },
//   {
//     standard: "11th",
//     subjectName: "Chemistry",
//     AppointmentUrl: "https://example.com/Appointments/chemistry-11.pdf"
//   },
//   {
//     standard: "8th",
//     subjectName: "History",
//     AppointmentUrl: "https://example.com/Appointments/history-8.pdf"
//   }
// ];
function Appointment() {
  const [isAddAppointmentModalOpen,setIsAddTextBookModalOpen]=useState(false);
       const [isModalOpen, setIsModalOpen] = useState(false);
       const [currentAppointment, setCurrentAppointment] = useState(null);
     
       const openModal = (Appointment) => {
        setCurrentAppointment(Appointment);
        setEditingAppointment(Appointment); // This ensures _id is included
        setIsModalOpen(true);
      };
      
       const openAppointmentModal = () => {
         
         setIsAddAppointmentModalOpen(true);
         
       };
       const closeAppointmentModal = () => {
         
         setIsAddAppointmentModalOpen(false);
         
       };
     
       const closeModal = () => {
         setIsModalOpen(false);
         setCurrentAppointment(null);
       };


    const handleDeleteAppointment = async (id) => {
      if (!window.confirm("Are you sure you want to delete this Appointment?")) return;
    
      try {
        const response = await fetch(`${API_URL}/appointment/${id}`, {
          method: "DELETE",
        });
    
        if (response.ok) {
          alert("Appointment deleted successfully!");
          fetchAppointments(); // Refresh the list
        } else {
          alert("Failed to delete Appointment.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    const [Appointments, setAppointments] = useState([]);

         
       
            // Fetch students with optional filtering by standard
            const fetchAppointments = async () => {
              try {
                const response = await fetch(`${API_URL}/appointment`);
                const data = await response.json();
                setAppointments(data);
              } catch (error) {
                console.error("Error:", error);
              }
            };
          
            // Fetch all students on component mount
            useEffect(() => {
              fetchAppointments();
            }, []);
          
           
        
             
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-15 text-center ">Text Books Management</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
           <th className="p-3 border">Serial No.</th>
            <th className="p-3 border">Guardian Name</th>
            <th className="p-3 border">Guardian Phone Number</th>
            <th className="p-3 border">Child Name</th>
            <th className="p-3 border">Child Age</th>
            <th className="p-3 border">Message</th>
           
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Appointments.map((Appointment, index) => (
            <tr key={index} className="border">
              <td className="p-3 border text-center ">{index+1}</td>
              <td className="p-3 border text-center ">{Appointment.guardianName}</td>
              <td className="p-3 border text-center ">{Appointment.phoneNum}</td>
              <td className="p-3 border text-center ">{Appointment.childName}</td>
              <td className="p-3 border text-center ">{Appointment.childAge}</td>
              <td className="p-3 border text-center ">{Appointment.message}</td>
              <td className="p-3  flex gap-2">
                <button onClick={() => handleDeleteAppointment(Appointment._id)} className="bg-red-500 text-white px-3 py-1 rounded w-[100%]">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}


export default Appointment
