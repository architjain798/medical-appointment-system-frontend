import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';
import API from '../../utils/api';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

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
      <Typography variant="h4" gutterBottom>Doctors</Typography>
      <Grid container spacing={3}>
        {doctors.map((doctor) => (
          <Grid item xs={12} sm={6} md={4} key={doctor._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{doctor.name}</Typography>
                <Typography variant="body2">Specialty: {doctor.specialty}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DoctorList;
