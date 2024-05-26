import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AudiobookList from './components/AudiobookList';
import AudiobookDetail from './components/AudiobookDetail';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AudiobookList />} />
          <Route path="/audiobooks/:id" element={<AudiobookDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
