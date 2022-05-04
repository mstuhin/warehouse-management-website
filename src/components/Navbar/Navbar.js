import React from 'react';

import { Link } from 'react-router-dom';



const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <Link class="navbar-brand" to="/home">Hero Warehouse</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="/products">Products</Link>
                        <Link className="nav-link" to="#">Pricing</Link>
                        <Link className="nav-link " to="/login" >Login</Link>
                    </div>
                </div>
            </div>
        </nav>



    );
};

export default Navbar;