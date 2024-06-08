// src/pages/Home.js
import React from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

// Sample featured products data
const featuredProducts = [
  { id: 1, name: 'Samsung S24', price: 899.99, image: '/images/mobile.jpeg' },
  { id: 2, name: 'Mini Oven', price: 149.99, image: '/images/oven.jpg' },
  { id: 3, name: 'Shirt', price: 39.99, image: '/images/shirt.jpeg' },
];

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Banner */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Our Shop
          </Typography>
          <Typography variant="h6" component="p">
            Discover amazing products and great deals!
          </Typography>
        </Container>
      </Box>

      {/* Featured Products */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Button href={`/shop/${product.id}`} variant="contained" color="primary" sx={{ mt: 2 }}>
                    View Product
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Special Offers */}
      <Box sx={{ backgroundColor: 'secondary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Special Offers
          </Typography>
          <Typography variant="h6" component="p">
            Don't miss out on these exclusive deals!
          </Typography>
          <Button href="/shop" variant="contained" color="primary" sx={{ mt: 4 }}>
            Shop Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
