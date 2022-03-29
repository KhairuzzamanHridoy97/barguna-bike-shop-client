import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Bike = ({bike}) => {
    const {img,id,name,description,price}=bike;
    return (
        <Grid item xs={4} sm={4} md={4}>        
        <Card sx={{ minWidth: 275 }} >
            <CardMedia
              component="img"
              style={{ width: '75%', height: '150px',margin:'0 auto'}}
              image={img}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ my:1 }} color="text.secondary">
           {description}
            </Typography>
          <Typography variant="body2" sx={{ my:1 }} className="text-danger" >
            Price : {price} BDT
            </Typography>
           <Link to={`/buy/${id}`}>
               <button className='btn btn-success' sx={{ my:1 }} >Buy</button> 
           </Link>
            
            
        </CardContent>
          </Card>
         </Grid>
    );
};

export default Bike;