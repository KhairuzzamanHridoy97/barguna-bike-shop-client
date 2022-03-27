import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = ({bike}) => {
    const {name,img,description,price}= bike;
    return (
        // <Grid container spacing={2}>
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
           
               <button className='btn btn-success' sx={{ my:1 }} >Buy</button> 
            
            
        </CardContent>
          </Card>
         </Grid>

// </Grid>
    );
};

export default Product;