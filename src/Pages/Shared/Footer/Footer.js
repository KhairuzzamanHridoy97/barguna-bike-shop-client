import React from 'react';
import { Col, Row } from 'react-bootstrap';


const Footer = () => {
    return (
             <div className=" mt-3 p-2 bg-dark text-danger">
                <div className="row">
                        <div className="col">
                            <p>Home</p>
                            <p>Service</p>
                            <p>Contact</p>
                            <p>About CarShop</p>
                        </div>
                        <div className="col">
                                <p>Home</p>
                                <p>Service</p>
                                <p>Contact</p>
                                <p>About CarShop</p>
                        </div>
                        <div className="col">
                            <p>Copyright © 2022 KH IT-Tech</p>
                            <p>We promise to our clients and is <br /> constantlystriving to improve  <br />performance and heightened satisfaction of clients and developer.</p>
                        </div>
                 </div>
            </div>
        
    );
};

export default Footer;