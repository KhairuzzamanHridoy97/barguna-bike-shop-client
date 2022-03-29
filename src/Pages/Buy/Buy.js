import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Buy = () => {
    const {bikeId} = useParams();

    const[bike,setBike]=useState({})

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setBike(data))
    },[])
    return (
        <div>
            <h2>This is : {bikeId}</h2>
            <h5>Your Bike </h5>
        </div>
    );
};

export default Buy;