import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';
import AuthState from '../../context/authentication/authState';

const NewAccount = (props) => {

    // Extract values of the context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, auth, signupUser } = authContext;

    // If the sign up is duplicated
    useEffect(() => {
        if (auth) {
            props.history.push('/projects');
        }
        if(message) {
            showAlert(message.msg, message.category);
        }
    }, [message, auth, props.history]);

    // state for sign in
    const [user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    // extract the user
    const { name, email, password, confirm } = user;

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
        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '') {
            showAlert('All fields are required', 'alert-error');
            return;
        }

        // Password length < 6 characters
        if (password.length < 6) {
            showAlert('The password must be 6 characters', 'alert-error');
            return;
        }

        // check two passwords
        if (password !== confirm) {
            showAlert('The password does not match', 'alert-error');
            return;
        }

        // pass to the action
        signupUser({
            name,
            email,
            password
        });
    }

    return (
        <div className="form-user">
            {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="container-form shadow-dark">
                <h1>Sign up</h1>
                <form
                    onSubmit={onSubmit}>
                    <div className="field-form">
                        <label htmlfor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
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
                        <label htmlfor="confirm">Confirm password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Password"
                            value={confirm}
                            onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Sign up"
                        />
                    </div>
                </form>
                <Link to="/new-account" className="link-account">
                    Sign in
                </Link>
            </div>
        </div>
    );
}

export default NewAccount;