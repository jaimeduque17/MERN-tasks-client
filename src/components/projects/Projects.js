import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Stick from '../layout/Stick';
import FormTask from '../tasks/FormTask';
import TaskList from '../tasks/TaskList';
import AuthContext from '../../context/authentication/authContext';

const Projects = () => {

    // Extract authentication information
    const authContext = useContext(AuthContext);
    const { userAuthenticated } = authContext;

    useEffect(() => {
        userAuthenticated();
    }, []);

    return (
        <div className="container-app">
            <Sidebar />
            <div className="main-section">
                <Stick />
                <main>
                    <FormTask />
                    <div className="container-tasks">
                        <TaskList />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Projects;