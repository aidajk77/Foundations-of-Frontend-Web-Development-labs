// src/pages/Shop.js
import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, CardMedia, Button, TextField, MenuItem } from '@mui/material';

// Generate 100 sample products
const generateSampleProducts = () => {
  const categories = ['Electronics', 'Fashion', 'Home'];
  const products = [];

  for (let i = 1; i < 100; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      price: (Math.random() * 100).toFixed(2),
      image: `/images/product${(i % 10) + 1}.jpg`, // Cycle through 10 images
      category: categories[i % categories.length],
    });
  }

  return products;
};

const Shop = () => {
  const [products, setProducts] = useState(generateSampleProducts());
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  // Handle category filter
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    const filteredProducts = generateSampleProducts().filter(product => 
      event.target.value === '' || product.category === event.target.value
    );
    setProducts(filteredProducts);
  };

  // Handle sorting
  const handleSortChange = (event) => {
    setSort(event.target.value);
    const sortedProducts = [...products].sort((a, b) => {
      if (event.target.value === 'price-low-high') {
        return a.price - b.price;
      } else if (event.target.value === 'price-high-low') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
    setProducts(sortedProducts);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1">
            Shop
          </Typography>
        </Container>
      </Box>

      {/* Filters */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              select
              fullWidth
              label="Category"
              value={category}
              onChange={handleCategoryChange}
              variant="outlined"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Fashion">Fashion</MenuItem>
              <MenuItem value="Home">Home</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              select
              fullWidth
              label="Sort by"
              value={sort}
              onChange={handleSortChange}
              variant="outlined"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="price-low-high">Price: Low to High</MenuItem>
              <MenuItem value="price-high-low">Price: High to Low</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Container>

      {/* Product Grid */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {products.map((product) => (
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
                    ${product.price}
                  </Typography>
                  <Button
                    component="a"
                    href={`/product/${product.id}`}
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    View Details
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

export default Shop;
