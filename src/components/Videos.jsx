import { Stack, Box } from '@mui/system';

const Videos = ({ videos }) => {
  return (
    <Stack
      direction='row'
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
      color='#fff'
    >
      {videos.map((item, index) => (
        <Box key={index}>{item.id.videoId}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
