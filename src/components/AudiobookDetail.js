import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAudiobook } from '../services/api';
import { Box, Typography, Card, CardContent, Divider, Rating, Grid } from '@mui/material';
import ReviewForm from './ReviewForm';
import Navbar from './Navbar';

const api_url = process.env.REACT_APP_API_URL;

const AudiobookDetail = () => {
  const { id } = useParams();
  const [audiobook, setAudiobook] = useState(null);

  useEffect(() => {
    const fetchAudiobook = async () => {
      try {
        const data = await getAudiobook(id);
        setAudiobook(data);
      } catch (error) {
        console.error('Error fetching audiobook:', error);
      }
    };

    fetchAudiobook();
  }, [id]);

  const handleReviewSubmitted = async () => {
    const data = await getAudiobook(id);
    setAudiobook(data);
  };

  if (!audiobook) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div>
      <Navbar /> 
      <Box sx={{ p: 2, mt: 8 }}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box component="img" src={`${api_url}${audiobook.coverImage}`} alt={audiobook.title} sx={{ width: '100%', height: 'auto' }} />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h5" component="h2">
                  {audiobook.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {audiobook.author}
                </Typography>
                <Typography variant="body1" paragraph>
                  {audiobook.description}
                </Typography>
                <Typography variant="body1" paragraph>
                  Genre: {audiobook.genre}
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" color="text.secondary">
                    {audiobook.averageRating.toFixed(1)}
                  </Typography>
                  <Rating value={audiobook.averageRating} readOnly />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2">
            User Reviews
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {audiobook.reviews.map((review) => (
            <Box key={review._id} sx={{ mb: 2 }}>
              <Card>
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {review.user}
                  </Typography>
                  <Rating value={review.rating} readOnly />
                  <Typography variant="body1">{review.comment}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Box>
          <Typography variant="h5" component="h2">
            Add a Review
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <ReviewForm onReviewSubmitted={handleReviewSubmitted} />
        </Box>
      </Box>
    </div>
  );
};

export default AudiobookDetail;
