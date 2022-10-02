import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
const MenuItem = ({item,updateLocalForAll}) => {
  const {_id, title, file, desc, price} = item;
  const [addItem, setAddItem] = useState(true)
  const [newPath, setNewPath] = useState('')
  const finalPrice = price
  const handleCart1 = (_id,title, price,file,addItem) => {
    setAddItem(false)
    const abbas = {_id,title,price,finalPrice,file,addItem,quantity}
    localStorage.setItem(`Item${_id}`, JSON.stringify(abbas))
    updateLocalForAll()
  }
  const quantity =1
  
  const handleRemove2 = (id) => {
    let isCheck = localStorage.removeItem(`Item${id}`)
    setAddItem(!addItem)
    updateLocalForAll()
  } 
  const updateImage = () => {
    let backend = "backend\\"
    const pathes = file.filePath.replace(backend, '')
    setNewPath(pathes)
  }

useEffect(() => {
  if (JSON.parse(localStorage.getItem(`Item${_id}`))) {
    setAddItem(false)
  } else {
    setAddItem(true)
  }
  updateImage()

}, [file]) 
    return ( 
      <>
         <Grid  item key={_id}   xs={12} sm={6} md={4} lg={4} xl={3}>
       <div>
       <Card sx={{ width:'100%', margin:'auto' ,maxWidth:300, maxHeight: 600, mx: "auto",minHeight:{xs:0, sm:300,md:300, lg:300,xl:300},display:"flex",flexDirection:"column",justifyContent:"space-between" }} >
      <CardActionArea> 
        <CardMedia style={{padding:"10px"}}
          component="img"
          height="auto"
          image= {newPath}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className='d-flex justify-content-between w-100'>
        <Typography variant='h6' sx={{padding:1, fontWeight:'bold'}}>
          {price}$
        </Typography>
        { (!JSON.parse(localStorage.getItem(`Item${_id}`))) ? <><Button variant="contained" endIcon={<AddShoppingCartIcon />} onClick={() => handleCart1(_id,title,price,file,addItem)}>Add To Cart</Button></> : <><><Button variant="contained" onClick={() => handleRemove2(_id)} color="error" endIcon={<RemoveShoppingCartIcon />}>Remove From Cart</Button></></>}
        </div>
       
      </CardActions>
    </Card>
          </div>
       </Grid>
      </>
  )
}

export default MenuItem
