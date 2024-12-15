import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, Button } from '@mui/material';
import API from '../../utils/api';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await API.get('/appointments');
        setAppointments(response.data.appointments);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAppointments();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/appointments/${id}`);
      setAppointments(appointments.filter((a) => a._id !== id));
      alert('Appointment cancelled successfully.');
    } catch (err) {
      alert('Failed to cancel appointment.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Your Appointments</Typography>
      <List>
        {appointments.map((appointment) => (
          <ListItem key={appointment._id}>
            <Typography>
              Doctor: {appointment.doctor.name} | Date: {appointment.date} | Time: {appointment.time.start} - {appointment.time.end}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(appointment._id)}
              style={{ marginLeft: '10px' }}
            >
              Cancel
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AppointmentList;
