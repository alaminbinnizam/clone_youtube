import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
// import Navbar from './Components/Navbar';
// // import { Feed } from '@mui/icons-material';
// import Feed from './Components/Feed';
// import VideoDetail from './Components/VideoDetail';
// import ChannelDetail from './Components/ChannelDetail';
// import SearchFeed from './Components/SearchFeed';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './Components/index';


const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )

}

export default App
