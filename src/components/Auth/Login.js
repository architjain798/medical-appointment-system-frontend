import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import API from '../../utils/api';

const Login = ({ setAuthenticated }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Initialize the hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/auth/login', form);
      localStorage.setItem('token', response.data.token); // Save the JWT token
      setAuthenticated(true); // Update the authenticated state
      alert('Login successful!');
      navigate('/appointments'); // Redirect to the appointment page
    } catch (err) {
      alert(err.response?.data?.message || 'Error occurred.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
