import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import './upcoming.css';

const UpcomingBike = ({upcomingBike}) => {
    const{name,img,speed}= upcomingBike;
    return (
        <Grid  item xs={4} sm={4} md={4}>
        
        <Card className="latestOffer-Card"  sx={{ minWidth: 275 }}>
            <CardMedia
              component="img"
              className='upcoming-img'
              style={{ width: 'auto', height: '150px',margin:'0 auto'}}
              image={img}
        />
        <CardContent>
          <Typography variant="h4" component="div">
            {name}
          </Typography>        
          <Typography variant="h6" component="div">
            Speed: {speed}
          </Typography>        
             <button  className="btn btn-outline-dark m-2" >Details</button>             
        </CardContent>
          </Card>
         </Grid>
    );
};

export default UpcomingBike;