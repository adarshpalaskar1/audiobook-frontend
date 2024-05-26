import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const Filters = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="genre-label">Genre</InputLabel>
        <Select
          labelId="genre-label"
          id="genre"
          name="genre"
          value={filters.genre}
          label="Genre"
          onChange={handleFilterChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Fiction">Fiction</MenuItem>
          <MenuItem value="Non-Fiction">Non-Fiction</MenuItem>
          <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
          <MenuItem value="Biography">Biography</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="author"
        name="author"
        label="Author"
        variant="outlined"
        fullWidth
        value={filters.author}
        onChange={handleFilterChange}
      />

      <FormControl fullWidth>
        <InputLabel id="rating-label">Rating</InputLabel>
        <Select
          labelId="rating-label"
          id="rating"
          name="rating"
          value={filters.rating}
          label="Rating"
          onChange={handleFilterChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="1">1 Star & Up</MenuItem>
          <MenuItem value="2">2 Stars & Up</MenuItem>
          <MenuItem value="3">3 Stars & Up</MenuItem>
          <MenuItem value="4">4 Stars & Up</MenuItem>
          <MenuItem value="5">5 Stars</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
