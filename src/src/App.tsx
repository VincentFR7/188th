import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForumLayout from './components/layout/ForumLayout';
import HomePage from './components/pages/HomePage';
import ForumPage from './components/pages/ForumPage';
import AdminPanel from './components/admin/AdminPanel';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ForumLayout />}>
          <Route index element={<HomePage />} />
          <Route path="forum/:id" element={<ForumPage />} />
          <Route 
            path="admin/*" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminPanel />
              </ProtectedRoute>
            } 
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
