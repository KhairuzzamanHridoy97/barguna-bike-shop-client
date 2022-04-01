import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes,setBikes]= useState([]);

    useEffect(()=>{
        fetch('https://pumpkin-crisp-13332.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setBikes(data))
    },[])
    return (
        <>
            <Navigation></Navigation>                        
            <h1 className='my-4 text-success'>Buy Your Favourite Bike</h1>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        bikes.map(
                            bike=> <Bike
                            key={bike._id}
                            bike={bike}
                            >

                            </Bike>
                        )
                    }
                </Grid>
            </Container>
        </>
    );
};

export default Bikes;