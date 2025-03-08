import React from 'react'
import { useState } from 'react';
const ImageCarouselsData = [
  {
    img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388151/dvsomzznh8uvv8xmz6lf.png',
    title: 'Beautiful Sunset',
    description: 'A beautiful sunset over the mountains.',
  },
  {
    img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388230/ebooxlfxgmgakwjn6q95.png',
    title: 'Ocean Breeze',
    description: 'Relax by the ocean with the sound of waves.',
  },
  {
    img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388277/fj9ndhjnapefznqtbppi.png',
    title: 'Majestic Forest',
    description: 'Explore the dense forest and its wonders.',
  },
  {
      img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388479/swzmebyopgzupre9brrj.png',
      title: 'Majestic Forest',
      description: 'Explore the dense forest and its wonders.',
    },
    {
      img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388626/j2vhyccan96j92l9dps9.png',
      title: 'Majestic Forest',
      description: 'Explore the dense forest and its wonders.',
    },
];
function ImageCarousel() {
  
  
 
    const [isAddImageCarouselModalOpen,setIsAddImageCarouselModalOpen]=useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageCarousel, setCurrentImageCarousel] = useState(null);
  
    const openModal = (ImageCarousel) => {
      setCurrentImageCarousel(ImageCarousel);
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
            {ImageCarouselsData.map((ImageCarousel, index) => (
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
                  <button className="bg-red-500 text-white px-3 py-1 rounded w-[50%]">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-[50%]">
              <h2 className="text-xl font-bold mb-4">Edit ImageCarousel</h2>
              <form>
                <label className="block mb-2">Title <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  defaultValue={currentImageCarousel.title}
                  className="border p-2 w-full mb-4"
                />
                <label className="block mb-2">Description <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  defaultValue={currentImageCarousel.description}
                  className="border p-2 w-full mb-4"
                />
                 <label className="block mb-2">Image Url <span className='text-red-700 font-semibold'>*</span></label>
                <input
                  type="text"
                  defaultValue={currentImageCarousel.img}
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
  
        {isAddImageCarouselModalOpen && (
           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
           <div className="bg-white p-6 rounded shadow-lg w-[50%]">
             <h2 className="text-xl font-bold mb-4">Add ImageCarousel</h2>
             <form>
               <label className="block mb-2 ">Title <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 
                 className="border p-2 w-full mb-4"
               />
               <label className="block mb-2">Description <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 
                 className="border p-2 w-full mb-4"
               />
                <label className="block mb-2">Image Url <span className='text-red-700 font-semibold'>*</span></label>
               <input
                 type="text"
                 
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
                 <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
               </div>
             </form>
           </div>
         </div>
        )}
      </div>
    );
  }


export default ImageCarousel