import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchValue } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchValue}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchValue]);

  return (
    <Box p={2} minHeight='95vh'>
      <Typography
        variant='h4'
        fontWeight={900}
        color='white'
        mb={3}
        ml={{ sm: '100px' }}
      >
        Search Results for{' '}
        <span style={{ color: '#FC1503' }}>{searchValue}</span> videos
      </Typography>
      <Box display='flex'>
        <Box sx={{ mr: { sm: '100px' } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
