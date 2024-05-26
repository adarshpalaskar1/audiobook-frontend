import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL;

export const getAudiobooks = async (filters = {}) => {
  try {
    const response = await axios.get(`${api_url}/api/audiobooks`, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching audiobooks:', error);
    throw error;
  }
};

export const getAudiobook = async (id) => {
  try {
    const response = await axios.get(`${api_url}/api/audiobooks/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching audiobook:', error);
    throw error;
  }
};

export const postReview = async (audiobookId, review) => {
  try {
    const response = await axios.post(`${api_url}/api/audiobooks/${audiobookId}/reviews`, review);
    return response.data;
  } catch (error) {
    console.error('Error posting review:', error);
    throw error;
  }
};
