import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/User/landingPage';
import EventsList from './pages/Admin/EventPage';
import ProtectedRoute from './components/User/ProtectedRoute';
import NotFound from './pages/NotFound';
import CreateEvent from './pages/Admin/CreateEvent';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<ProtectedRoute><EventsList /></ProtectedRoute>} />
        {/* Protected Admin Routes */}
        <Route path="/:eventId" element={<LandingPage />} />
        <Route path="/create-event" element={<ProtectedRoute><CreateEvent /></ProtectedRoute>} />

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;