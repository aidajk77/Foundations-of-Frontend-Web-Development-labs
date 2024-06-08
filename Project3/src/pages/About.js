// src/pages/About.js
import React from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

// Sample team data
const teamMembers = [
  { name: 'Alice Johnson', position: 'CEO', image: '/images/ceo.jpeg' },
  { name: 'Bob Smith', position: 'CTO', image: '/images/cto.jpeg' },
  { name: 'Carol Williams', position: 'COO', image: '/images/coo.jpeg' },
];

const About = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Company Overview */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" component="p">
            We are committed to providing the best products and services.
          </Typography>
        </Container>
      </Box>

      {/* Mission Statement */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Our mission is to deliver high-quality products that bring value and satisfaction to our customers.
        </Typography>
        <Typography variant="body1" component="p">
          We strive to create a seamless shopping experience and ensure that our customers always find what they are looking for.
        </Typography>
      </Container>

      {/* Team Introduction */}
      <Box sx={{ backgroundColor: 'grey.200', py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item key={index} xs={12} sm={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
