import React from 'react'
import { useState,useEffect } from 'react';
import { API_URL } from '../config/apiConfig';
// const ImageCarouselsData = [
//   {
//     img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388151/dvsomzznh8uvv8xmz6lf.png',
//     title: 'Beautiful Sunset',
//     description: 'A beautiful sunset over the mountains.',
//   },
//   {
//     img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388230/ebooxlfxgmgakwjn6q95.png',
//     title: 'Ocean Breeze',
//     description: 'Relax by the ocean with the sound of waves.',
//   },
//   {
//     img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388277/fj9ndhjnapefznqtbppi.png',
//     title: 'Majestic Forest',
//     description: 'Explore the dense forest and its wonders.',
//   },
//   {
//       img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388479/swzmebyopgzupre9brrj.png',
//       title: 'Majestic Forest',
//       description: 'Explore the dense forest and its wonders.',
//     },
//     {
//       img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388626/j2vhyccan96j92l9dps9.png',
//       title: 'Majestic Forest',
//       description: 'Explore the dense forest and its wonders.',
//     },
// ];
function ImageCarousel() {
  
  
 
 
 const [isAddImageCarouselModalOpen,setIsAddImageCarouselModalOpen]=useState(false);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [currentImageCarousel, setCurrentImageCarousel] = useState(null);
      
        const openModal = (ImageCarousel) => {
         setCurrentImageCarousel(ImageCarousel);
         setEditingImageCarousel(ImageCarousel); // This ensures _id is included
         setIsModalOpen(true);
       };
       
        const openImageCarouselModal = () => {
          
          setIsAddImageCarouselModalOpen(true);
          
        };
        const closeImageCarouselModal = () => {
          
          setIsAddImageCarouselModalOpen(false);
          
        };
      
        const closeModal = () => {
          setIsModalOpen(false);
          setCurrentImageCarousel(null);
        };
        const [newImageCarousel, setNewImageCarousel] = useState({
          img: "",
          title: "",
          description: "",
        
     });
     
     const handleInputChange = (e) => {
       setNewImageCarousel({ ...newImageCarousel, [e.target.name]: e.target.value });
     };
     
     const handleAddImageCarousel = async () => {
       try {
         const response = await fetch(`${API_URL}/image-carousel`, {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(newImageCarousel),
         });
     
         if (response.ok) {
           alert("ImageCarousel added successfully!");
           closeImageCarouselModal();
           fetchImageCarousels(); // Refresh the list
         } else {
           alert("Failed to add ImageCarousel.");
         }
       } catch (error) {
         console.error("Error:", error);
       }
     };
     const [editingImageCarousel, setEditingImageCarousel] = useState(null);
     
     const handleEditInputChange = (e) => {
       setEditingImageCarousel({ ...editingImageCarousel, [e.target.name]: e.target.value });
     };
     
     
     const handleUpdateImageCarousel = async () => {
       try {
         const response = await fetch(`${API_URL}/image-carousel/${editingImageCarousel._id}`, {
           method: "PUT",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(editingImageCarousel),
         });
     
         if (response.ok) {
           alert("ImageCarousel updated successfully!");
           closeModal();
           fetchImageCarousels(); // Refresh the list
         } else {
           alert("Failed to update ImageCarousel.");
         }
       } catch (error) {
         console.error("Error:", error);
       }
     };
     
     const handleDeleteImageCarousel = async (id) => {
       if (!window.confirm("Are you sure you want to delete this ImageCarousel?")) return;
     
       try {
         const response = await fetch(`${API_URL}/image-carousel/${id}`, {
           method: "DELETE",
         });
     
         if (response.ok) {
           alert("ImageCarousel deleted successfully!");
           fetchImageCarousels(); // Refresh the list
         } else {
           alert("Failed to delete ImageCarousel.");
         }
       } catch (error) {
         console.error("Error:", error);
       }
     };
     const [ImageCarousels, setImageCarousels] = useState([]);
     
     const fetchImageCarousels = async () => {
       try {
         const response = await fetch(`${API_URL}/image-carousel`);
         const data = await response.json();
         setImageCarousels(data);
       } catch (error) {
         console.error("Error:", error);
       }
     };
     
     useEffect(() => {
       fetchImageCarousels();
     }, []);
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-15 text-center ">Image Carousel Management</h1>
        
        <button className="bg-blue-800 text-white px-3 py-1 rounded mt-10 mb-5 font-semibold   " onClick={openImageCarouselModal}>Add ImageCarousel</button>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
             <th className="p-3 border">Serial No.</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Image</th>
             
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ImageCarousels.map((ImageCarousel, index) => (
              <tr key={index} className="border">
                <td className="p-3 border text-center ">{index+1}</td>
                <td className="p-3 border text-center ">{ImageCarousel.title}</td>
                <td className="p-3 border text-center ">{ImageCarousel.description}</td>
                <td className="p-3 border text-center  "><img className='w-40 h-20 ml-10 ' src={ImageCarousel.img} alt="img" /></td>
                <td className="p-3 border flex gap-2">
                  
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded w-[50%]"
                    onClick={() => openModal(ImageCarousel)}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteImageCarousel(ImageCarousel._id)} className="bg-red-500 text-white px-3 py-1 rounded w-[50%]">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-[50%]">
              <h2 className="text-xl font-bold mb-4">Edit ImageCarousel</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleUpdateImageCarousel(); }}>
                <label className="block mb-2">Title <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="title" 
                  onChange={handleEditInputChange} 
                  value={editingImageCarousel?.title|| ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                <label className="block mb-2">Description <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="description" 
                  onChange={handleEditInputChange} 
                  value={editingImageCarousel?.description || ''} 
                  required
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Image Url <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  name="img" 
                  onChange={handleEditInputChange} 
                  value={editingImageCarousel?.img || ''} 
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
  
        {isAddImageCarouselModalOpen && (
           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
           <div className="bg-white p-6 rounded shadow-lg w-[50%]">
             <h2 className="text-xl font-bold mb-4">Add ImageCarousel</h2>
             <form onSubmit={(e) => { e.preventDefault(); handleAddImageCarousel(); }}>
               <label className="block mb-2 ">Title <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="title" 
                 onChange={handleInputChange} 
                 value={newImageCarousel.title} 
                 placeholder="Title" 
                 required
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Description <span className='text-red-700 font-semibold'>*</span></label>
               <input
                       name="description" 
                       onChange={handleInputChange} 
                       value={newImageCarousel.description} 
                       placeholder="Description" 
                       required
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Image Url <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 name="img" 
                 onChange={handleInputChange} 
                 value={newImageCarousel.img} 
                 placeholder="Image" 
                 required
                 className="border p-2 w-full mb-4"
               />
               <div className="flex justify-end gap-2">
                 <button
                   type="button"
                   className="bg-gray-500 text-white px-4 py-2 rounded"
                   onClick={closeImageCarouselModal}
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


export default ImageCarousel