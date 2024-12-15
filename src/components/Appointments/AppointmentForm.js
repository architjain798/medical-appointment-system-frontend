import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import API from '../../utils/api';
import { useParams, useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const { doctorId } = useParams();
  const [form, setForm] = useState({ date: '', startTime: '', endTime: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/appointments', { ...form, doctor: doctorId });
      alert('Appointment booked successfully!');
      navigate('/appointments');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to book appointment.');
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Book Appointment</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Date"
          type="date"
          fullWidth
          margin="normal"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <TextField
          label="Start Time"
          type="time"
          fullWidth
          margin="normal"
          onChange={(e) => setForm({ ...form, startTime: e.target.value })}
        />
        <TextField
          label="End Time"
          type="time"
          fullWidth
          margin="normal"
          onChange={(e) => setForm({ ...form, endTime: e.target.value })}
        />
        <Button type="submit" variant="contained" color="primary">
          Book
        </Button>
      </form>
    </Container>
  );
};

export default AppointmentForm;
