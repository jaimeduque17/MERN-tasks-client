import React from 'react';
import Project from './Project';

const
    ProjectList = () => {

        const projects = [
            { name: 'Tienda Virtual' },
            { name: 'Intranet' },
            { name: 'Design Thinking' }
        ]

        return (
            <ul className="list-projects">
                {projects.map(project => (
                    <Project
                        project={project}
                    />
                ))}
            </ul>
        );
    }

export default
    ProjectList;