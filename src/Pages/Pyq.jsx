import React from 'react'
import { useState } from "react";

const pyqsData = [
  {
    subject: "Data Structure using C",
    college: "Integral University",
    addedBy: "realstar",
    status: "Approved",
  },
  {
    subject: "Numerical and Statistical Methods",
    college: "Integral University",
    addedBy: "Student Senior",
    status: "Approved",
  },
  {
    subject: "Effective Communication and Media Studies in English",
    college: "Integral University",
    addedBy: "Student Senior",
    status: "Approved",
  },
];

function Pyq() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPyq, setCurrentPyq] = useState(null);

  const openModal = (pyq) => {
    setCurrentPyq(pyq);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPyq(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pyqs Management</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 border">Subject Name</th>
            <th className="p-3 border">College Name</th>
            <th className="p-3 border">Added by</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pyqsData.map((pyq, index) => (
            <tr key={index} className="border">
              <td className="p-3 border">{pyq.subject}</td>
              <td className="p-3 border">{pyq.college}</td>
              <td className="p-3 border">{pyq.addedBy}</td>
              <td className="p-3 border">{pyq.status}</td>
              <td className="p-3 border flex gap-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded">View</button>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => openModal(pyq)}
                >
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Pyq</h2>
            <form>
              <label className="block mb-2">Subject Name</label>
              <input
                type="text"
                defaultValue={currentPyq.subject}
                className="border p-2 w-full mb-4"
              />
              <label className="block mb-2">College Name</label>
              <input
                type="text"
                defaultValue={currentPyq.college}
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
    </div>
  );
}



export default Pyq