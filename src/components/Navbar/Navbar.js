
import React from 'react';
import { Link } from 'react-router-dom';
import useHooks from '../../hooks/useHooks';
import logo from '../../images/log.png';
import './Navbar.css';


const Navbar = () => {
    const { user, hdSignOut } = useHooks();
    return (

        <nav className="navPic navbar navbar-expand-lg navbar-light bg-primary">
            <div className=" container">
                <img src={logo} alt="" />
                <Link class="navbar-brand" to="/home">Hero Warehouse</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="/inventory">Inventory</Link>
                        <Link className="nav-link" to="#">Pricing</Link>
                        <Link className="nav-link " to="/register" >Register</Link>
                        <span>{user?.displayName && user.displayName}</span>
                        {
                            user?.uid
                                ?
                                <button onClick={hdSignOut}>sign out</button>
                                :
                                <Link className="nav-link " to="/login" >Login</Link>
                        }

                    </div>
                </div>
            </div>
        </nav>



    );
};

export default Navbar;