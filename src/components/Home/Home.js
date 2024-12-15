import React from 'react';
import { Container, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = ({ setAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    setAuthenticated(false); // Update authenticated state
    navigate('/login'); // Redirect to login page
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>Welcome to the Dashboard</Typography>
      <Typography variant="h6" gutterBottom>
        Manage your appointments and browse available doctors.
      </Typography>
      <Stack spacing={2} style={{ marginTop: '20px' }} direction="column">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/appointments')}
        >
          View Appointments
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/book')}
        >
          Book an Appointment
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate('/doctors')}
        >
          View Doctors
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Stack>
    </Container>
  );
};

export default Home;
