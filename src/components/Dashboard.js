import React from 'react';
import Courses from './Courses';
import Grades from './Grades';

function Dashboard({ role, onLogout }) {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Online Course Platform</h1>
        <button
          onClick={onLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </header>
      <main>
        <h2 className="text-xl font-semibold mb-4">Welcome, {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
        <Courses role={role} />
        <Grades role={role} />
      </main>
    </div>
  );
}

export default Dashboard;
