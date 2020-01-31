import React, { useContext, useEffect } from 'react';
import Project from './Project';
import ProjectContext from '../../context/projects/projectContext';

const ProjectList = () => {

        // Extract projects of the initial state
        const projectsContext = useContext(ProjectContext);
        const { projects, getProjects } = projectsContext;

        // Get projects when charge the component
        useEffect(() => {
            getProjects()
        }, []);

        // Check if projects have content
        if(projects.length === 0) return null;

        return (
            <ul className="list-projects">
                {projects.map(project => (
                    <Project
                        key={project.id}
                        project={project}
                    />
                ))}
            </ul>
        );
    }

export default
    ProjectList;