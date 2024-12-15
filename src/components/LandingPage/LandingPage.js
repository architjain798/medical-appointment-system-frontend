import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGhlYWx0aHxlbnwwfHx8fDE2ODcwNjAxMjA&ixlib=rb-4.0.3&q=80&w=1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '10px',
          padding: '30px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to HealthConnect
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Your one-stop solution to book and manage medical appointments with the best doctors.
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '20px' }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => navigate('/register')}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
