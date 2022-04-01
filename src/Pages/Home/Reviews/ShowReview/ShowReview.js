import { Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const ShowReview = ({showReview}) => {
    const { name, email, review, rating } = showReview;
    return (
        <Grid item xs={4} sm={4} md={4}>        
        <Card sx={{ minWidth: 275 }} className="bg-info" >
           
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ my:1 }} color="text.secondary">
                    {email}
                </Typography>
                <Typography variant="body2" sx={{ my:1 }} className="text-danger" >
                    {review}
                </Typography>
                <Typography variant="body2" sx={{ my:1 }}  >
                    <Rating name="read-only" value={rating} readOnly />
                </Typography>
                
                
            </CardContent>
          </Card>
         </Grid>
    );
};

export default ShowReview;