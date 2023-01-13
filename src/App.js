import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  Navbar,
  ChannelDetail,
  Feed,
  SearchFeed,
  VideoDetail,
} from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ background: '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchValue' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
