import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    if (user) {
        navigate('/home');
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-container'>
            <div>
                <h2 className='login-title'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='input-group'>
                        <label className='input-text' htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />

                    </div>

                    <div className="input-group">
                        <label className='input-text' htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />

                    </div>
                    <p>{error?.message}</p>
                    <input className="form-submit" type="submit" value="Login" />
                </form>
                <p>
                    <Link to="/register">Create a New Account </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;