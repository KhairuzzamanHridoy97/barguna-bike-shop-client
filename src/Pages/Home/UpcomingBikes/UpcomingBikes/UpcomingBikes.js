import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import upcoming1 from "../../../../images/upcoming/upcoming1.jpg"
import upcoming2 from "../../../../images/upcoming/upcoming2.jpg"
import upcoming3 from "../../../../images/upcoming/upcoming3.jpg"
import upcoming4 from "../../../../images/upcoming/upcoming4.jpg"
import upcoming5 from "../../../../images/upcoming/upcoming5.jpg"
import upcoming6 from "../../../../images/upcoming/upcoming6.jpg"
import UpcomingBike from '../UpcomingBike/UpcomingBike';

const upcomingBikes=[
    {
        "name":"MV Agusta F4 RC",
        "speed":'(187.65 mph / 302 kph)',
        'img': upcoming1
    },
    {
        "name":"BMW S1000RR",
        "speed":'(188.2 mph / 302 kph)',
        'img': upcoming2
    },
    {
        "name":"Suzuki Hayabusa",
        "speed":'(193.8 mph / 312 kph)',
        'img': upcoming3
    },
    {
        "name":"Kawasaki Ninja ZX",
        "speed":'(208.1 mph / 334.7 kph)',
        'img': upcoming4
    },
    {
        "name":"Kawasaki Ninja H2R",
        "speed":'(248.5 mph / 400 kph)',
        'img': upcoming5
    },
    {
        "name":"Ducati Panigale V4",
        "speed":'(184.5 mph / 289 kph)',
        'img': upcoming6
    },
]

const UpcomingBikes = () => {
    return (
            <Container>            
                <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant='h3' sx={{fontWeight:500,my:5,color:'success.main'}} component="div">
                    Our Latest Offers
                </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
             upcomingBikes.map(upcomingBike=><UpcomingBike
             upcomingBike={upcomingBike}
             key={upcomingBike.name}
             >

             </UpcomingBike>)
         }
        </Grid>
        </Container>
      </Box>
            </Container>
        
    );
};

export default UpcomingBikes;