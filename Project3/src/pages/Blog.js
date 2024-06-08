// src/pages/Blog.js
import React from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Lorem Ipsum Dolor Sit Amet',
    date: 'June 1, 2024',
    author: 'John Doe',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Consectetur Adipiscing Elit',
    date: 'June 3, 2024',
    author: 'Jane Smith',
    summary: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    id: 3,
    title: 'Sed Do Eiusmod Tempor Incididunt',
    date: 'June 5, 2024',
    author: 'Alice Johnson',
    summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  },
  // Add more blog posts here if needed
];

const Blog = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1">
            Blog
          </Typography>
        </Container>
      </Box>

      {/* Blog Posts */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item key={post.id} xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {post.date} by {post.author}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {post.summary}
                  </Typography>
                  <Button component={Link} to={`/blog/${post.id}`} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
