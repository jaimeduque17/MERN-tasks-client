import React from 'react';
import Sidebar from '../layout/Sidebar';
import Stick from '../layout/Stick';
import FormTask from '../tasks/FormTask';

const Projects = () => {
    return ( 
        <div className="container-app">
            <Sidebar />
            <div className="main-section">
                <Stick />
                <main>
                    <FormTask />
                    <div className="container-tasks"></div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;