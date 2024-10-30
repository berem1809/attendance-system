import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <Container component="main" maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography component="h1" variant="h4" gutterBottom>
          Welcome to Your HomePage!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Manage your activities and explore new features.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          sx={{ marginTop: 4 }}
        >
          Logout
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
