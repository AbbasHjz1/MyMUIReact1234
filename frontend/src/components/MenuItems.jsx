import * as React from 'react';
import { Grid } from '@mui/material';
import MenuItem from './MenuItem';

const MenuItems = ({filteredData,updateLocalForAll}) => {
  return (
   <div className='mt-5 mx-3 mb-5'>
    <Grid container sx={{justifyContent: {xs:"center", sm:"flex-start", md:"flex-start", lg:"flex-start"}}} justifyContent="center" spacing={4}>
   {filteredData.map(item => (
     <MenuItem key={item._id} item={item}  updateLocalForAll={updateLocalForAll}/>  ))}

      </Grid>
    </div>

  );
}

export default MenuItems