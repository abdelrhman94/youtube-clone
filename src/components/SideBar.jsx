import React, { useState } from 'react';
import { Stack } from '@mui/system';
import { categories } from '../utils/constants';

const SideBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  return (
    <Stack
      direction='row'
      sx={{
        overFlowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column ' },
      }}
    >
      {categories.map((category) => (
        <button
          className='category-btn'
          style={{
            background: category.name === selectedCategory && ' #fc1503',
          }}
        >
          <span
            style={{
              marginRight: '15px',
              color: category.name === selectedCategory ? '#fff' : 'red',
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? '1' : '0.8',
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
