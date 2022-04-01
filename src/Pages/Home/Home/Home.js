import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products/Products';
import ShowReviews from '../Reviews/ShowReviews/ShowReviews';
import UpcomingBikes from '../UpcomingBikes/UpcomingBikes/UpcomingBikes';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <ShowReviews></ShowReviews>
            <UpcomingBikes></UpcomingBikes>
            <Footer></Footer>
        </div>
    );
};

export default Home;