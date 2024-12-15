import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import AppointmentList from './components/Appointments/AppointmentList';
import AppointmentForm from './components/Appointments/AppointmentForm';
import EditAppointment from './components/Appointments/EditAppointment';
import DoctorList from './components/Doctors/DoctorList';
import UserDashboard from './components/Dashboard/UserDashboard';


const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

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
        element={authenticated ? <UserDashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/book"
        element={authenticated ? <AppointmentForm /> : <Navigate to="/login" />}
      />
      <Route
        path="/edit-appointment/:id"
        element={authenticated ? <EditAppointment /> : <Navigate to="/login" />}
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
