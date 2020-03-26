import React, { useContext, useEffect } from 'react';
import Project from './Project';
import ProjectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectList = () => {

        // Extract projects of the initial state
        const projectsContext = useContext(ProjectContext);
        const { projects, getProjects } = projectsContext;

        // Get projects when charge the component
        useEffect(() => {
            getProjects();
            // eslint-disable-next-line
        }, []);

        // Check if projects have content
        if(projects.length === 0) return <p>Doesn't have projects, create one</p>;

        return (
            <ul className="list-projects">
                <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                    key={project._id}
                    timeout={200}
                    classNames="project">
                    <Project
                        project={project}
                    />
                    </CSSTransition>
                ))}
                </TransitionGroup>
            </ul>
        );
    }

export default
    ProjectList;