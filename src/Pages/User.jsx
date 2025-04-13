import React from 'react'
import { useState,useEffect } from 'react';
import { API_URL } from '../config/apiConfig';
// const UsersData = [
 
//     {
//       username: "admin123",
//       email: "admin@example.com",
//       password: "Admin@123", 
//       userType: "Admin"
//     },
//     {
//       username: "john_doe",
//       email: "john.doe@example.com",
//       password: "John@123",
//       userType: "User"
//     },
//     {
//       username: "emma_smith",
//       email: "emma.smith@example.com",
//       password: "Emma@123",
//       userType: "User"
//     },
//     {
//       username: "michael_brown",
//       email: "michael.brown@example.com",
//       password: "Michael@123",
//       userType: "User"
//     },
//     {
//       username: "sarah_jones",
//       email: "sarah.jones@example.com",
//       password: "Sarah@123",
//       userType: "Admin"
//     }
// ];
function User() {
 const [isAddUserModalOpen,setIsAddUserModalOpen]=useState(false);
       const [isModalOpen, setIsModalOpen] = useState(false);
       const [currentUser, setCurrentUser] = useState(null);
     
       const openModal = (User) => {
        setCurrentUser(User);
        setEditingUser(User); // This ensures _id is included
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
       const [newUser, setNewUser] = useState({
        username: "",
         email: "",
         password: "",
         userType: ""
       
    });
    
    const handleInputChange = (e) => {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };
    
    const handleAddUser = async () => {
      try {
        const response = await fetch(`${API_URL}/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
    
        if (response.ok) {
          alert("User added successfully!");
          closeUserModal();
          fetchUsers(); // Refresh the list
        } else {
          alert("Failed to add User.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    const [editingUser, setEditingUser] = useState(null);
    
    const handleEditInputChange = (e) => {
      setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
    };
    
    
    const handleUpdateUser = async () => {
      try {
        const response = await fetch(`${API_URL}/user/${editingUser._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingUser),
        });
    
        if (response.ok) {
          alert("User updated successfully!");
          closeModal();
          fetchUsers(); // Refresh the list
        } else {
          alert("Failed to update User.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    const handleDeleteUser = async (id) => {
      if (!window.confirm("Are you sure you want to delete this User?")) return;
    
      try {
        const response = await fetch(`${API_URL}/user/${id}`, {
          method: "DELETE",
        });
    
        if (response.ok) {
          alert("User deleted successfully!");
          fetchUsers(); // Refresh the list
        } else {
          alert("Failed to delete User.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    const [Users, setUsers] = useState([]);
    
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_URL}/user`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    useEffect(() => {
      fetchUsers();
    }, []);

  
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
            {Users.map((User, index) => (
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
                  <button onClick={() => handleDeleteUser(User._id)} className="bg-red-500 text-white px-3 py-1 rounded w-[50%]">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-[50%]">
              <h2 className="text-xl font-bold mb-4">Edit User</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleUpdateUser(); }}>
                <label className="block mb-2">Username <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="username" 
                onChange={handleEditInputChange} 
                value={editingUser?.username || ''} 
                required
                  className="border p-2 w-full mb-4"
                />
                <label className="block mb-2">Email <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="email" 
                  onChange={handleEditInputChange} 
                  value={editingUser?.email || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Password <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="password" 
                  onChange={handleEditInputChange} 
                  value={editingUser?.password || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                <label className="block mb-2">User Type <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="userType" 
                  onChange={handleEditInputChange} 
                  value={editingUser?.userType || ''} 
                  required
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
                  <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Save</button>
                </div>
              </form>
            </div>
          </div>
        )}
  
        {isAddUserModalOpen && (
           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
           <div className="bg-white p-6 rounded shadow-lg w-[50%]">
             <h2 className="text-xl font-bold mb-4">Add User</h2>
             <form  onSubmit={(e) => { e.preventDefault(); handleAddUser(); }}>
               <label className="block mb-2 ">Username <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="username" 
                 onChange={handleInputChange} 
                 value={newUser.username} 
                 placeholder="Username" 
                 required
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Email <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="email" 
                 onChange={handleInputChange} 
                 value={newUser.email} 
                 placeholder="Email" 
                 required
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Password <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="password" 
                 onChange={handleInputChange} 
                 value={newUser.password} 
                 placeholder="Password" 
                 required
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">User Type <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="userType" 
                 onChange={handleInputChange} 
                 value={newUser.userType} 
                 required
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
                 <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Save</button>
               </div>
             </form>
           </div>
         </div>
        )}
      </div>
    );
  }


export default User