import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import BorderAllIcon from '@mui/icons-material/BorderAll';

const Tabz = ({  filterItems }) => {

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      
    <div className='d-flex justify-content-center mt-3 mb-5 bg-light'>

    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<BorderAllIcon />}  onClick={(e) => filterItems("all")}  label="All" />
      <Tab icon={<LocalPizzaIcon />} onClick={(e) => filterItems("Pizza")} label="Pizza" />
      <Tab icon={<LocalDiningIcon />} onClick={(e) => filterItems("Pasta")} label="Pasta" />
      <Tab icon={<LocalBarIcon />} onClick={(e) => filterItems("Shakes")} label="Shakes" />
    </Tabs>
        </div>
        </Box>
  )
}

export default Tabz