import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../../utils/api';

const EditAppointment = () => {
  const { id } = useParams(); // Get appointment ID from URL
  const [form, setForm] = useState({ date: '', startTime: '', endTime: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await API.get(`/appointments/${id}`); // Fetch appointment details
        const { date, time } = response.data;
        setForm({ date, startTime: time.start, endTime: time.end });
      } catch (err) {
        console.error('Error fetching appointment:', err);
      }
    };

    fetchAppointment();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/appointments/${id}`, {
        date: form.date,
        startTime: form.startTime,
        endTime: form.endTime,
      }); // Update appointment
      alert('Appointment updated successfully!');
      navigate('/appointments');
    } catch (err) {
      alert('Failed to update appointment.');
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Edit Appointment</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Date"
          type="date"
          fullWidth
          margin="normal"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <TextField
          label="Start Time"
          type="time"
          fullWidth
          margin="normal"
          value={form.startTime}
          onChange={(e) => setForm({ ...form, startTime: e.target.value })}
        />
        <TextField
          label="End Time"
          type="time"
          fullWidth
          margin="normal"
          value={form.endTime}
          onChange={(e) => setForm({ ...form, endTime: e.target.value })}
        />
        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default EditAppointment;
