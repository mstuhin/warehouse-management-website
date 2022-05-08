import React from 'react';
import Form from 'react-bootstrap/Form'
import useHooks from '../../hooks/useHooks';
import Button from 'react-bootstrap/Button';


const Login = () => {
    const { singInWithGoogle } = useHooks();
    const handleEmail = (e) => {
        console.log(e.target.value);
    }
    const handlePassword = (e) => {
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log('ok');
        e.preventDefault();
    }
    return (
        <div>
            <div className='w-50 mx-auto mt-3'>
                <h3 className='mt-3'>Please login</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <button onClick={singInWithGoogle}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;