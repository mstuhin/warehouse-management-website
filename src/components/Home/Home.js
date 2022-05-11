
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Home.css';
import product from '../../images/bike-banner.jpg';
import popular from '../../images/popular.jpg';
import Upcoming from '../../images/upcoming.jpg';


const Home = () => {

    const navigatePd = useNavigate();
    const navigateToProductsDetail = () => {
        navigatePd(`/products`)
    }


    return (
        <div className='row'>
            <Banner></Banner>
            <div className='products   mt-5'>
                <img src={product} alt="" />

                <h4 className='mt-5'>Dimensions and Capacity


                </h4>

                <button onClick={() => navigateToProductsDetail()} className='btn btn-primary '>Products Details</button>
            </div>

            <div className='row mt-5'>
                <div className='item-1 col'>
                    <img src={popular} alt="" />
                    <h1 className='item-title'>Popular items</h1>
                </div>

                <div className='item-2 col'>
                    <img src={Upcoming} alt="" />
                    <h1 className='item-title'>Upcoming items</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;