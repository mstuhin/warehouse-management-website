import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    if (user) {
        navigate('/home');
    }

    const handleCreateUser = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Your two password did not match ");
            return;
        }
        if (password.length < 6) {
            setError('password must be character')
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-container'>
            <div>
                <h2 className='login-title'>Register</h2>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label className='input-text' htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />

                    </div>

                    <div className="input-group">
                        <label className='input-text' htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />

                    </div>
                    <div className="input-group">
                        <label className='input-text' htmlFor="Confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="Confirm-password" id="" required />
                    </div>
                    <p >{error}</p>

                    <input className="form-submit" type="submit" value="Register" required />

                </form>
                <p>
                    <Link to="/login"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;