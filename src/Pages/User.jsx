import React from 'react'
import { useState } from 'react';
const UsersData = [
 
    {
      username: "admin123",
      email: "admin@example.com",
      password: "Admin@123",  // Ideally, store hashed passwords in a real application
      userType: "Admin"
    },
    {
      username: "john_doe",
      email: "john.doe@example.com",
      password: "John@123",
      userType: "User"
    },
    {
      username: "emma_smith",
      email: "emma.smith@example.com",
      password: "Emma@123",
      userType: "User"
    },
    {
      username: "michael_brown",
      email: "michael.brown@example.com",
      password: "Michael@123",
      userType: "User"
    },
    {
      username: "sarah_jones",
      email: "sarah.jones@example.com",
      password: "Sarah@123",
      userType: "Admin"
    }
];
function User() {

  

    const [isAddUserModalOpen,setIsAddUserModalOpen]=useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
  
    const openModal = (User) => {
      setCurrentUser(User);
      setIsModalOpen(true);
  
    };
    const openUserModal = () => {
      
      setIsAddUserModalOpen(true);
      
    };
    const closeUserModal = () => {
      
      setIsAddUserModalOpen(false);
      
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setCurrentUser(null);
    };
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-15 text-center ">User Management</h1>
       
        <button className="bg-blue-800 text-white px-3 py-1 rounded mt-10 mb-5 font-semibold   " onClick={openUserModal}>Add User</button>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
             <th className="p-3 border">Serial No.</th>
              <th className="p-3 border">Username</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Type</th>
             
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {UsersData.map((User, index) => (
              <tr key={index} className="border">
                <td className="p-3 border text-center ">{index+1}</td>
                <td className="p-3 border text-center ">{User.username}</td>
                <td className="p-3 border text-center ">{User.email}</td>
                <td className="p-3 border text-center ">{User.userType}</td>
                <td className="p-3 border flex gap-2">
                  
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                    onClick={() => openModal(User)}
                  >
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded w-[50%]">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-[50%]">
              <h2 className="text-xl font-bold mb-4">Edit User</h2>
              <form>
                <label className="block mb-2">Username <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  defaultValue={currentUser.username}
                  className="border p-2 w-full mb-4"
                />
                <label className="block mb-2">Email <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  defaultValue={currentUser.email}
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Password <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  defaultValue={currentUser.password}
                  className="border p-2 w-full mb-4"
                />
                <label className="block mb-2">User Type <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  defaultValue={currentUser.userType}
                  placeholder='User or Admin or Manager.'
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
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                </div>
              </form>
            </div>
          </div>
        )}
  
        {isAddUserModalOpen && (
           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
           <div className="bg-white p-6 rounded shadow-lg w-[50%]">
             <h2 className="text-xl font-bold mb-4">Add User</h2>
             <form>
               <label className="block mb-2 ">Username <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Email <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Password <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">User Type <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 placeholder='User or Admin or Manager.'
                 className="border p-2 w-full mb-4"
               />
               <div className="flex justify-end gap-2">
                 <button
                   type="button"
                   className="bg-gray-500 text-white px-4 py-2 rounded"
                   onClick={closeUserModal}
                 >
                   Cancel
                 </button>
                 <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
               </div>
             </form>
           </div>
         </div>
        )}
      </div>
    );
  }


export default User