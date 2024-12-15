import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import AppointmentList from './components/Appointments/AppointmentList';
import AppointmentForm from './components/Appointments/AppointmentForm';
import DoctorList from './components/Doctors/DoctorList';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  // Check for token on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
      <Route
        path="/home"
        element={authenticated ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/appointments"
        element={authenticated ? <AppointmentList /> : <Navigate to="/login" />}
      />
      <Route
        path="/book/:doctorId"
        element={authenticated ? <AppointmentForm /> : <Navigate to="/login" />}
      />
      <Route
        path="/doctors"
        element={authenticated ? <DoctorList /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
