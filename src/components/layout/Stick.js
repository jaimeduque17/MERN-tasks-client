import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/authentication/authContext';

const Stick = () => {

    // Extract authentication information
    const authContext = useContext(AuthContext);
    const { user, userAuthenticated, logOut } = authContext;

    useEffect(() => {
        userAuthenticated();
    }, []);

    return (
        <header className="app-header">
            {user ? <p className="name-user">Hello<span> {user.name}</span></p> : null}
            <nav className="nav-main">
                <button
                    className="btn btn-blank close-session"
                    onClick={() => logOut()}
                >Log Out
                </button>
            </nav>
        </header>
    );
}

export default Stick;