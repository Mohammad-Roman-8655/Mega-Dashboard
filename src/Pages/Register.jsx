import React,{ useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config/apiConfig';

export default function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', userType: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/dashboard/auth/signup`, formData);
      alert("Signup successful!");
      console.log(res.data);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Dashboard Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input type="email" placeholder="Email" required
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input type="password" placeholder="Password" required
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <select
  className="w-full mb-4 p-2 border rounded"
  value={formData.userType} // 👈 make it controlled
  onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
>
  <option value="" disabled>Select User Type</option>
  <option value="Manager">Manager</option>
  <option value="Teacher">Teacher</option>
  <option value="Monitor">Monitor</option>
</select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full" type="submit">Signup</button>
      </form>
    </div>
  );
}
