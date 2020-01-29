import React from 'react';
import Sidebar from '../layout/Sidebar';

const Projects = () => {
    return ( 
        <div className="container-app">
            <Sidebar />
            <div className="main-section">
                <main>
                    <div className="container-tasks"></div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;