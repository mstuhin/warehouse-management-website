import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import './Banner.css';



const Banner = () => {

    return (
        <Carousel className='carouselPic' >
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt=""
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;