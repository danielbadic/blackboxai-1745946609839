import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {!userRole ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard role={userRole} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
