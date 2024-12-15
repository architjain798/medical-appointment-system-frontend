import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import DoctorList from './components/Doctors/DoctorList';
import AppointmentForm from './components/Appointments/AppointmentForm';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/book/:doctorId" element={authenticated ? <AppointmentForm /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
