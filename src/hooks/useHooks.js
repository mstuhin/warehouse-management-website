import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import app from '../firebase.init';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useHooks = () => {
    const [user, setUser] = useState({});

    useEffect(() => {

    }, []);

    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
    }
    // return [user, setUser];
    return { user, singInWithGoogle };
}

export default useHooks;