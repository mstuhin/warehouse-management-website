import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/404.jpg';

const Banner = () => {

    return (
        <Carousel >
            <Carousel.Item>
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
                    src=""
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
                    src=""
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