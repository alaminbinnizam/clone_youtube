import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utileties/constant';

// const selectedCategory = 'New'

const Sidebar = ({ selectedCategory, setelectedCategory }) => {
  return (
    <>
      <Stack direction="row"
        sx={{
          overflowY: "auto",
          height: { sx: 'auto', md: '95%' },
          flexDirection: { md: 'column' },
        }}
      >
        {categories.map((category) => (
          <button className="category-btn"

            //here is the onclick function for selelcted category
            onClick={() => setelectedCategory(category.name)}

            style={{
              background: category.name === selectedCategory && '#FC2503',
              color: 'white'
            }}
            key={category.name}
          >
            <span style={{
              color:
                category.name === selectedCategory ? 'white' : 'red',
              marginRight: '15px'
            }}>
              {category.icon}</span>

            <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}
            >{category.name}</span>
          </button>
        ))}

      </Stack>
    </>
  )
}

export default Sidebar
