import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import API from '../../utils/api';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      alert('Registration successful!');
    } catch (err) {
      alert(err.response?.data?.message || 'Error occurred.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" fullWidth margin="normal" onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <TextField label="Email" fullWidth margin="normal" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
      </form>
    </Container>
  );
};

export default Register;
