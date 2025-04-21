import React,{ useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config/apiConfig';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/dashboard/auth/login`, formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userType', res.data.user.userType);
      alert('Login successful!');
      // Redirect to dashboard
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Dashboard Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input type="password" placeholder="Password" required
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full" type="submit">Login</button>
      </form>
    </div>
  );
}


// import React,{ useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { API_URL } from "../config/apiConfig";

// const Login = () => {
//     const navigate=useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");


//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     console.log("Sending request with:", { email, password });

//     try {
//       const response = await fetch(`${API_URL}/dashboard/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       console.log("Response:", data);

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       localStorage.setItem("token", data.token);
//       localStorage.setItem("userType", data.userType);
//       navigate("/");
//     } catch (err) {
//       console.error("Login error:", err.message);
//       setError(err.message);
//     }
// };


//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-4">Mega Academy Login</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-2 border rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-2 border rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
