import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css';

const SignUp = () => {
    const [error, setError] = useState();
    const { createUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm);

        if (password < 6) {
            setError('password must be 6 characters');
            return;
        }
        if (password !== confirm) {
            setError('Your password did not match')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='form-container'>
            <h2 className="form-title">Sign Up</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <p className='text-error'>{error}</p>
                <input className='btn-submit' type="submit" value='SIGN UP' />
            </form>
            <p>Already have account? <Link to="/login">Login</Link></p>

        </div>
    );
};

export default SignUp;