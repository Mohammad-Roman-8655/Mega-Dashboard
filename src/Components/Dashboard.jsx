import React from 'react'
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

import Home from './Home';
import Manager from '../Pages/Manager';
import Teacher from '../Pages/Teacher';
import Student from '../Pages/Student';
import NoticeBoard from '../Pages/NoticeBoard';
import Pyq from '../Pages/Pyq';
import MockPaper from '../Pages/MockPaper';
import StudyNotes from '../Pages/StudyNotes';
import TextBook from '../Pages/TextBook';
import Syllabus from '../Pages/Syllabus';
import Assignment from '../Pages/Assignment';
import VideoTutorials from '../Pages/VideoTutorials';
import ImageCarousel from '../Pages/ImageCarousel';
import User from '../Pages/User';
import AcademicCalender from '../Pages/AcademicCalender';

const menuItems = [
    "Manager",
    "Teacher",
    "Student",
    "Notice Board",
    "PYQS",
    "Mock Paper",
    "Study Notes",
    "Text Book",
    "Syllabus",
    "Assignment",
    "Video Tutorials",
    "Academic Calendar",
    "Image Carousel",
    "User",
  
];

function Sidebar() {


  return (
    <div className="w-64 bg-gray-800 text-white h-auto p-4">
     <div className="flex items-center gap-3 w-[100%] mb-5 ">
        <img
          className="h-8 w-8"
          src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726293382/yhpdbi2y3dcplciev0oz.png"
          alt="Logo"
        />
        <h3 className="text-xl sm:text-xl md:text-2xl font-bold">Mega Academy Dashboard</h3>
      </div>
      <ul className='w-[100%]'>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/'>Home</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/Manager'>Manager</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/Teacher'>Teacher</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/Student'>Student</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/NoticeBoard'>Notice</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/Pyq'>PYQS</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/MockPaper'>Mock Papers</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/StudyNotes'>Study Notes</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/TextBook'>Text Book</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/Syllabus'>Syllabus</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/Assignment'>Assignments</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/VideoTutorial'>Video Tutorials</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/AcademicCalender'>Academic Calender</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/ImageCarousel'>Image Carousel</NavLink></li>
        <li className="p-2  text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded"><NavLink to='/User'>User</NavLink></li>
      </ul>
    </div>
  );
}





function Dashboard() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Manager" element={<Manager/>}/>
            <Route path="/Teacher" element={<Teacher/>}/>
            <Route path="/Student" element={<Student/>}/>
            <Route path="/NoticeBoard" element={<NoticeBoard/>}/>
            <Route path="/Pyq" element={<Pyq/>}/>
            <Route path="/MockPaper" element={<MockPaper/>}/>
            <Route path="/StudyNotes" element={<StudyNotes/>}/>
            <Route path="/TextBook" element={<TextBook/>}/>
            <Route path="/Syllabus" element={<Syllabus/>}/>
            <Route path="/Assignment" element={<Assignment/>}/>
            <Route path="/ImageCarousel" element={<ImageCarousel/>}/>
            <Route path="/AcademicCalender" element={<AcademicCalender/>}/>
            <Route path="/VideoTutorial" element={<VideoTutorials/>}/>
            <Route path="/User" element={<User/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function CRUDForm({ title }) {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <form>
        <input
          type="text"
          placeholder="Enter details"
          className="border p-2 w-full mb-4"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default Dashboard;
