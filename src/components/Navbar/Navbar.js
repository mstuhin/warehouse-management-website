
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/log.png';
import './Navbar.css';


const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }

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
                        <Link className="nav-link" to="#"></Link>
                        <Link className="nav-link " to="/register" >Register</Link>
                        {
                            user ?
                                <button onClick={handleLogOut}>Log out</button>
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