import React from 'react'
import { Users, BookOpenCheck, ClipboardList, CalendarCheck2, PlaySquare, FileText, FileDown, MailCheck } from "lucide-react";

function Home() {
  const accessData = [
    {
      role: "Manager",
      access: [
        "User Management",
        "Academic Calendar",
        "Image Carousel",
        "Notice",
        "Syllabus",
        "Assignments",
        "Text Books",
        "PYQs",
        "Study Notes",
        "Video Tutorials",
        "Mock Papers",
        "Online Admission Forms",
        "Appointments",
        "Download Forms",
      ],
    },
    {
      role: "Teacher",
      access: [
        "Notice",
        "Syllabus",
        "Assignments",
        "Text Books",
        "Study Notes",
        "Video Tutorials",
        "Mock Papers",
        "PYQs",
        "Academic Calendar",
      ],
    },
    {
      role: "Student",
      access: [
        "Notice",
        "Syllabus",
        "Text Books",
        "Assignments",
        "Study Notes",
        "Mock Papers",
        "Video Tutorials",
        "PYQs",
        "Academic Calendar",
      ],
    },
    {
      role: "Parent",
      access: [
        "Notice",
        "Online Admission Forms",
        "Appointments",
        "Download Forms",
        "Academic Calendar",
      ],
    },
  ];
  return (
    
        <div className="w-full h-full px-6 py-8 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">Welcome to Mega Academy Dashboard</h1>
    
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Mega Academy Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition ">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">About Mega Academy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Mega Academy is an innovative educational institution dedicated to nurturing academic excellence and holistic development. 
                  We offer a wide range of study resources, well-structured syllabi, interactive learning tools, and comprehensive assessments 
                  to empower students at every stage of their academic journey.
                </p>
              </div>
    
              {/* Dashboard Info Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">About Mega Academy Dashboard</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Mega Academy Dashboard is a centralized management system tailored for administrators, teachers, and monitors. 
                  It streamlines academic operations such as managing users, study materials, video tutorials, assignments, and notices—making 
                  education management efficient, intuitive, and organized.
                </p>
              </div>
            </div>
             {/* Access Overview Section */}
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">User Access Overview</h2>

<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
  {accessData.map(({ role, access }) => (
    <div key={role} className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
      <div className="flex items-center mb-4 text-indigo-600">
        <Users className="w-6 h-6 mr-2" />
        <h3 className="text-xl font-semibold">{role}</h3>
      </div>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {access.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  ))}
</div>
    
            {/* Footer Line */}
            <div className="mt-10 text-center text-sm text-gray-500">
              Powered by <span className="font-semibold text-indigo-600">Mega Academy</span>
            </div>
          </div>
        </div>
    
  )
}

export default Home