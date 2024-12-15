import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
  Paper,
  CircularProgress,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import API from '../../utils/api';

const Login = ({ setAuthenticated }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await API.post('/auth/login', form);
      localStorage.setItem('token', response.data.token);
      setAuthenticated(true);
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', // Gradient background
        padding: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            borderRadius: 2,
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.85)', // Semi-transparent white
          }}
        >
          <Avatar
            sx={{
              margin: '0 auto',
              backgroundColor: '#3f51b5',
              marginBottom: 2,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" gutterBottom>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              variant="outlined"
              type="email"
              fullWidth
              margin="normal"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            {error && (
              <Typography
                color="error"
                variant="body2"
                sx={{ marginTop: 1, marginBottom: 2 }}
              >
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{ marginTop: 2, padding: 1 }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
            </Button>
          </form>
          <Typography
            variant="body2"
            sx={{ marginTop: 2, cursor: 'pointer', color: 'text.secondary' }}
            onClick={() => navigate('/register')}
          >
            Don't have an account? Register here
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
