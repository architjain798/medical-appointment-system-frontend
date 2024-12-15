import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Medical Appointment Booking System
      </Typography>
      <Typography variant="h6" gutterBottom>
        Book appointments with top doctors easily and efficiently.
      </Typography>
      <div style={{ marginTop: '20px' }}>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          style={{ margin: '10px' }}
        >
          Login
        </Button>
        <Button
          component={Link}
          to="/register"
          variant="outlined"
          color="secondary"
          style={{ margin: '10px' }}
        >
          Register
        </Button>
      </div>
    </Container>
  );
};

export default Home;
