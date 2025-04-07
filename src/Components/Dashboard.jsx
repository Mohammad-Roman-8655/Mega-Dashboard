import React from 'react';
import { useNavigate, Route, Routes, NavLink } from "react-router-dom";

import Login from '../Pages/Login';
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
import AdmissionForm from '../Pages/AdmissionForm';
import Appointment from '../Pages/Appointment';
import DownloadForm from '../Pages/DownloadForm';

function Sidebar() {
  return (
    <div className="w-80 bg-gray-800 text-white h-auto p-4">
      <div className="flex items-center gap-3 w-[100%] mb-5">
        <img
          className="h-8 w-8"
          src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726293382/yhpdbi2y3dcplciev0oz.png"
          alt="Logo"
        />
        <h3 className="text-xl sm:text-xl md:text-2xl font-bold">Mega Academy Dashboard</h3>
      </div>
      <ul className='w-[100%]'>
        {[
          
          { to: '/', label: 'Home' },
          { to: '/Manager', label: 'Manager' },
          { to: '/Teacher', label: 'Teacher' },
          { to: '/Student', label: 'Student' },
          { to: '/NoticeBoard', label: 'Notice' },
          { to: '/Pyq', label: 'PYQS' },
          { to: '/MockPaper', label: 'Mock Papers' },
          { to: '/StudyNotes', label: 'Study Notes' },
          { to: '/TextBook', label: 'Text Book' },
          { to: '/Syllabus', label: 'Syllabus' },
          { to: '/Assignment', label: 'Assignments' },
          { to: '/VideoTutorial', label: 'Video Tutorials' },
          { to: '/AcademicCalender', label: 'Academic Calender' },
          { to: '/ImageCarousel', label: 'Image Carousel' },
          { to: '/admission-form', label: 'Online Admission Forms' },
          { to: '/appointment', label: 'Appointments' },
          { to: '/download-form', label: 'Download Forms' },
          { to: '/User', label: 'User' },
          { to: '/login', label: 'Login' },
        ].map(({ to, label }) => (
          <li key={to} className="p-2 text-gray-300 hover:text-white cursor-pointer flex justify-between w-full text-lg hover:bg-gray-700 rounded">
            <NavLink to={to}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Dashboard() {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("userType");
  //   navigate("/login");
  // };

  return (
    <div className="flex">
      <Sidebar />
      {/* <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 absolute top-4 right-4">
        Logout
      </button> */}
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Manager" element={<Manager />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/NoticeBoard" element={<NoticeBoard />} />
          <Route path="/Pyq" element={<Pyq />} />
          <Route path="/MockPaper" element={<MockPaper />} />
          <Route path="/StudyNotes" element={<StudyNotes />} />
          <Route path="/TextBook" element={<TextBook />} />
          <Route path="/Syllabus" element={<Syllabus />} />
          <Route path="/Assignment" element={<Assignment />} />
          <Route path="/VideoTutorial" element={<VideoTutorials />} />
          <Route path="/AcademicCalender" element={<AcademicCalender />} />
          <Route path="/ImageCarousel" element={<ImageCarousel />} />
          <Route path="/admission-form" element={<AdmissionForm/>} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/download-form" element={<DownloadForm />} />
          <Route path="/User" element={<User />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;

