import React, { useState } from 'react';
import { TextField, Button, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from './bg_img1.png'; // Import your image

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://192.168.1.81:4000/api/auth/login', {
        username,
        password
      });

      if (response.status === 200) {
        setIsLoggedIn(true); 
        navigate('/home'); 
      }
    } catch (err) {
      console.error(err);
      setError('Invalid username or password'); 
    }
  };

  const handleForgotPassword = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setEmail('');
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    console.log('Email sent to:', email);
    handleDialogClose(); 
  };

  return (
    <div style={{ 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity:0.6,
        height: '100%', 
        width: '100%', 
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1 // Send it to the back
      }} />
      <div style={{
        width: '350px',
        backgroundColor: 'white', 
        padding: '30px', 
        borderRadius: '8px',
        position: 'relative',
        marginTop: '180px',
        marginLeft: '190px',
        zIndex: 1 
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '24px' }}>Login</h2> {/* Increased font size */}
        {error && <div style={{ color: 'red', fontSize: '16px' }}>{error}</div>} 
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Username" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            inputProps={{ style: { fontSize: '18px' } }} // Increased font size for input
            style={{ marginBottom: '16px' }} // Add space between fields
          />
          <TextField 
            label="Password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            inputProps={{ style: { fontSize: '18px' } }} // Increased font size for input
            style={{ marginBottom: '16px' }} // Add space between fields
          />
          <Tooltip title="Click to recover your password" arrow>
            <Button onClick={handleForgotPassword} style={{ textTransform: 'none', padding: '10px 0', display: 'block', margin: '8px auto', fontSize: '16px' }}>
              Forgot Password?
            </Button>
          </Tooltip>
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ padding: '10px', fontSize: '18px' }}>
            Login
          </Button>
        </form>
      </div>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Forgot Password?</DialogTitle>
        <DialogContent>
          <p>Enter the Email address associated with your account.</p>
          <TextField 
            label="Email ID" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            inputProps={{ style: { fontSize: '18px' } }} // Increased font size for input
          />
          <p>Only 3 attempts are allowed per day.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">Back</Button>
          <Button onClick={handleEmailSubmit} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
