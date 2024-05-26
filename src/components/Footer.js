// src/components/Footer.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body1">Catalogue Footer</Typography>
        <Typography variant="body2" color="text.secondary">
          {'© '}
          {new Date().getFullYear()}
          {' Audiobook Catalogue. All rights reserved.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
