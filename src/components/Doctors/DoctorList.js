import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Button,
  Pagination,
} from '@mui/material';
import API from '../../utils/api';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [totalPages, setTotalPages] = useState(1); // Total pages state

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await API.get('/doctors', {
          params: { page: currentPage, limit: 10 }, // Send page and limit as query params
        });
        setDoctors(response.data.doctors);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        console.error('Error fetching doctors:', err);
      }
    };

    fetchDoctors();
  }, [currentPage]); // Refetch doctors when the current page changes

  const handlePageChange = (event, value) => {
    setCurrentPage(value); // Update current page
  };

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
                  style={{ marginTop: '10px' }}
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Pagination Controls */}
      <Pagination
        count={totalPages} // Total number of pages
        page={currentPage} // Current active page
        onChange={handlePageChange} // Handle page change
        color="primary"
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </Container>
  );
};

export default DoctorList;
