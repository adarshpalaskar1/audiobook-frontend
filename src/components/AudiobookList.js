// src/components/AudiobookList.js
import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, TextField, MenuItem, Select, InputLabel, FormControl, Rating, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAudiobooks } from '../services/api';
import Navbar from './Navbar';
import Footer from './Footer';

const api_url = process.env.REACT_APP_API_URL;

const AudiobookList = () => {
  const [audiobooks, setAudiobooks] = useState([]);
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAudiobooks = async () => {
      try {
        const filters = {};
        if (genre) filters.genre = genre;
        if (author) filters.author = author;
        if (rating) filters.rating = rating;
        if (searchTerm) filters.searchTerm = searchTerm;

        const data = await getAudiobooks(filters);
        setAudiobooks(data);
      } catch (error) {
        console.error('Error fetching audiobooks:', error);
      }
    };

    fetchAudiobooks();
  }, [genre, author, rating, searchTerm]);

  return (
    <>
      <Navbar showSearch={true} onSearch={setSearchTerm} />
      <Box sx={{ p: 2, mt: 4 }}></Box>
      <Box sx={{ p: 2 }}>

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Typography variant="h3" component='h3'>
            Audiobooks
          </Typography>
          <FormControl variant="outlined" sx={{ minWidth: 120 }} >
            <InputLabel>Genre</InputLabel>
            <Select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              label="Genre"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Fiction">Fiction</MenuItem>
              <MenuItem value="Non-Fiction">Non-Fiction</MenuItem>
              <MenuItem value="Fantasy">Fantasy</MenuItem>
              <MenuItem value="Science Fiction">Science Fiction</MenuItem>
              <MenuItem value="Romance">Romance</MenuItem>
              <MenuItem value="Mystery">Mystery</MenuItem>
              <MenuItem value="Thriller">Thriller</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Author"
            variant="outlined"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel>Rating</InputLabel>
            <Select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              label="Rating"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="1">1 and above</MenuItem>
              <MenuItem value="2">2 and above</MenuItem>
              <MenuItem value="3">3 and above</MenuItem>
              <MenuItem value="4">4 and above</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setGenre('');
              setAuthor('');
              setRating('');
            }}
          >
            Clear All Filters
          </Button>
        </Box>

        <Grid container spacing={2}>
          {audiobooks.map((audiobook) => (
            <Grid item xs={12} sm={6} md={4} key={audiobook._id}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ height: '100%' }}>
                  <Typography variant="h5" component="h2">
                    {audiobook.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {audiobook.author}
                  </Typography>
                  <Box component="img" src={`${api_url}${audiobook.coverImage}`} alt={audiobook.title} sx={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                  <Typography variant="body1" paragraph>
                    Genre: {audiobook.genre}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Typography variant="body2" color="text.secondary">
                      {audiobook.averageRating.toFixed(1)}
                    </Typography>
                    <Rating value={audiobook.averageRating} readOnly />
                  </Box>
                  <Typography variant="body1" paragraph>
                    {audiobook.description.substring(0, 100)}...
                  </Typography>
                  <Link to={`/audiobooks/${audiobook._id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default AudiobookList;
