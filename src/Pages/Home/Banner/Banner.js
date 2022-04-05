import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/carusel/banner1.jpg'
import banner2 from '../../../images/carusel/banner2.jpg'
import banner4 from '../../../images/carusel/banner4.jpg'
import banner5 from '../../../images/carusel/banner5.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={banner2}
            alt="First slide"
            />
            <Carousel.Caption>
            <h2>WELCOME TO OUR STORE</h2>
            <p>Find Your Favourite Bike In Our Store</p>
            <button className="btn btn-info mx-2">Getting Start</button>
            <button className="btn btn-outline-light">About Us</button> 

            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src={banner4}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h2>WELCOME TO OUR STORE</h2>
            <p>Find Your Favourite Bike In Our Store</p>
            <button className="btn btn-info mx-2">Getting Start</button>
            <button className="btn btn-outline-light">About Us</button> 
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner5}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h2>WELCOME TO OUR STORE</h2>
            <p>Find Your Favourite Bike In Our Store</p>
            <button className="btn btn-info mx-2">Getting Start</button>
            <button className="btn btn-outline-light">About Us</button> 
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </>
    );
};

export default Banner;
