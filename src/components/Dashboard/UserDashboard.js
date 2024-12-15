import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import API from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await API.get('/appointments'); // Fetch appointments
        setAppointments(response.data.appointments);
      } catch (err) {
        console.error('Error fetching appointments:', err);
      }
    };

    fetchAppointments();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/appointments/${id}`); // Delete appointment
      setAppointments(appointments.filter((a) => a._id !== id));
      alert('Appointment deleted successfully.');
    } catch (err) {
      alert('Failed to delete appointment.');
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-appointment/${id}`); // Redirect to edit appointment page
  };

  // Separate upcoming and past appointments
  const today = new Date();
  const upcomingAppointments = appointments.filter(
    (appointment) => new Date(appointment.date) >= today
  );
  const pastAppointments = appointments.filter(
    (appointment) => new Date(appointment.date) < today
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>User Dashboard</Typography>

      <Typography variant="h6" gutterBottom>Upcoming Appointments</Typography>
      {upcomingAppointments.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {upcomingAppointments.map((appointment) => (
              <TableRow key={appointment._id}>
                <TableCell>{appointment.doctor.name}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>
                  {appointment.time.start} - {appointment.time.end}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEdit(appointment._id)}
                    style={{ marginRight: '10px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(appointment._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography>No upcoming appointments.</Typography>
      )}

      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
        Past Appointments
      </Typography>
      {pastAppointments.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pastAppointments.map((appointment) => (
              <TableRow key={appointment._id}>
                <TableCell>{appointment.doctor.name}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>
                  {appointment.time.start} - {appointment.time.end}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography>No past appointments.</Typography>
      )}
    </Container>
  );
};

export default UserDashboard;
