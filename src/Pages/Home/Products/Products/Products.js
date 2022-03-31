import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [bikes,setBikes] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setBikes(data))
    },[])
    return (
        <div className='my-3'>
            <h2 className='my-5'>Our Bikes</h2>
            <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {
                    bikes.slice(0,6).map(bike=>
                            <Product
                            key={bike._id}
                            bike={bike}
                            >

                            </Product>
                        )
                    }
                    </Grid>
            </Container>
        </div>
    );
};

export default Products;