import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {
    const authContext = useContext(AuthContext);
    const { auth } = authContext;
    return (
        <Route
            {...props}
            render={props => !auth ? (<Redirect to="/" />) : (<Component {...props} />)}
        />
    );
}

export default PrivateRoute;