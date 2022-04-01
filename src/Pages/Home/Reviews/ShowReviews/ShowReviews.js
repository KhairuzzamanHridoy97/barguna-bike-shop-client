import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import ShowReview from '../ShowReview/ShowReview';

// const reviews=[
//     {
//         "userName":'Imtiaz',
//         "userEmail":'imtiaz@gmail.com',
//         "userReview":"very Good"
//     },
//     {
//         "userName":'Ishtiaq',
//         "userEmail":'istiaq@gmail.com',
//         "userReview":"Good"
//     },
//     {
//         "userName":'Hridoy',
//         "userEmail":'hridoy@gmail.com',
//         "userReview":"Amazing"
//     }
// ]

const ShowReviews = () => {
    const [reviews,setReviews]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/addReview')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <div>
            <h2 className="text-danger  my-5">Customer Review</h2>
            <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                reviews.map(
                    showReview=><ShowReview
                    key={showReview._id}
                    showReview={showReview}
                    >

                    </ShowReview>
                )
            }


            </Grid>
            </Container>
        </div>
    );
};

export default ShowReviews ;