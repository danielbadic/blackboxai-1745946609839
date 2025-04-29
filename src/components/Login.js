import React, { useState } from 'react';

const roles = ['student', 'teacher', 'admin'];

function Login({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRole) {
      onLogin(selectedRole);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <label htmlFor="role" className="block mb-2 font-semibold">
          Select Role
        </label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        >
          <option value="" disabled>
            Choose a role
          </option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
