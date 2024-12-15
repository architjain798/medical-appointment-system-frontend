import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Container, Grid, Button } from '@mui/material';
import API from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await API.get('/doctors');
        setDoctors(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Available Doctors</Typography>
      <Grid container spacing={3}>
        {doctors.map((doctor) => (
          <Grid item xs={12} sm={6} md={4} key={doctor._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{doctor.name}</Typography>
                <Typography>Specialty: {doctor.specialty}</Typography>
                <Typography>Available Dates:</Typography>
                {doctor.schedule.map((slot) => (
                  <Typography key={slot.date}>
                    {slot.date} ({slot.start} - {slot.end})
                  </Typography>
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(`/book/${doctor._id}`)}
                  style={{ marginTop: '10px' }}
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DoctorList;
