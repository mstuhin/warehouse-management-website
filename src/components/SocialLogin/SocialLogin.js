import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/logo.png';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement = ('');


    if (error) {

        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/home');
    }



    if (user) {
        return (
            <div>
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-info w-50'></div>
                <p className='mt-3 p-2'>OR</p>
                <div style={{ height: "1px" }} className='bg-info w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info'><img style={{ width: '30px' }} src={google} alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;