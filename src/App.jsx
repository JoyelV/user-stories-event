import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/User/landingPage';
import EventsList from './pages/Admin/EventPage';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';
import CreateEvent from './pages/Admin/CreateEvent';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected Admin Routes */}
        <Route path="/event-list" element={<ProtectedRoute><EventsList /></ProtectedRoute>} />
        <Route path="/create-event" element={<ProtectedRoute><CreateEvent /></ProtectedRoute>} />

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;