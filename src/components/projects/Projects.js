import React from 'react';
import Sidebar from '../layout/Sidebar';
import Stick from '../layout/Stick';

const Projects = () => {
    return ( 
        <div className="container-app">
            <Sidebar />
            <div className="main-section">
                <Stick />
                <main>
                    <div className="container-tasks"></div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;