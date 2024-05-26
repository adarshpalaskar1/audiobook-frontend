import React, { useState } from 'react';
import { TextField, Button, Box, Rating, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { postReview } from '../services/api';

const ReviewForm = ({ onReviewSubmitted }) => {
  const { id } = useParams();
  const [user, setUser] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [userError, setUserError] = useState(false);
  const [ratingError, setRatingError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form...');

    let valid = true;

    if (!user) {
      setUserError(true);
      valid = false;
    } else {
      setUserError(false);
    }

    if (rating === 0) {
      setRatingError(true);
      valid = false;
    } else {
      setRatingError(false);
    }

    if (!valid) return;

    try {
      console.log('Form is valid. Submitting...');

      const commentValue = comment || '';

      await postReview(id, { user, rating, comment:commentValue });
      onReviewSubmitted();
      setUser('');
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <TextField
        fullWidth
        label="Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        sx={{ mt: 2, mb: 2 }}
        error={userError}
        helperText={userError ? "Name is required" : ""}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 2 }}>
        <Typography component="legend">Rating</Typography>
        <Rating
          name="rating"
          value={rating}
          onChange={(e, newValue) => setRating(newValue)}
          sx={{ ml: 2 }}
        />
        {ratingError && (
          <Typography color="error" sx={{ ml: 2 }}>
            Rating is required
          </Typography>
        )}
      </Box>
      <TextField
        fullWidth
        label="Comment"
        multiline
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={{ mt: 2, mb: 2 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit Review
      </Button>
    </Box>
  );
};

export default ReviewForm;
