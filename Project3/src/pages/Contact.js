// src/pages/Contact.js
import React from 'react';
import { Typography, Box, Container, Grid, TextField, Button } from '@mui/material';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1">
            Contact Us
          </Typography>
        </Container>
      </Box>

      {/* Contact Form */}
      <Container sx={{ py: 4 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" variant="outlined" type="email" required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={4} label="Message" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>

      {/* Contact Information */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1" gutterBottom>
        Francuske revolucije 71, Ilidža, Federation of Bosnia & Herzegovina 71210 
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone: +387 33 944 400
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: info@ibu.edu.com
        </Typography>
      </Container>
    </Box>
  );
};

export default Contact;
