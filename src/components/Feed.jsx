import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from './';

const Feed = () => {

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2022 Youtube Clone
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', flex: 2, height: '90vh' }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white' }}
        >
          New <span style={{ color: '#f31503' }}>Videos</span>
        </Typography>
        <Videos video={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
