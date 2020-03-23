import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Login = () => {

    // Extract values of the context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, auth, logIn } = authContext;

    // state for sign in
    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    // extract the user
    const { email, password } = user;

    const onChange = (e) => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // when the user wants to sign in
    const onSubmit = (e) => {
        e.preventDefault();

        // validate that there are no empty fields
        if (email.trim() === '' || password.trim() === '') {
            showAlert('All fields are required', 'alert-error');
        }

        // pass to the action
        logIn({email, password});
    }

    return (
        <div className="form-user">
            {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="container-form shadow-dark">
                <h1>Sign in</h1>
                <form
                    onSubmit={onSubmit}>
                    <div className="field-form">
                        <label htmlfor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <label htmlfor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Sign in"
                        />
                    </div>
                </form>
                <Link to="/new-account" className="link-account">
                    Get an account
                </Link>
            </div>
        </div>
    );
}

export default Login;