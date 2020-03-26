import React, { useContext, useEffect } from 'react';
import Project from './Project';
import ProjectContext from '../../context/projects/projectContext';
import AlertContext from '../../context/alerts/alertContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectList = () => {

    // Extract projects of the initial state
    const projectsContext = useContext(ProjectContext);
    const { message, projects, getProjects } = projectsContext;

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    // Get projects when charge the component
    useEffect(() => {
        // If there are an error
        if (message) {
            showAlert(message.msg, message.category);
        }
        getProjects();
        // eslint-disable-next-line
    }, [message]);

    // Check if projects have content
    if (projects.length === 0) return <p>Doesn't have projects, create one</p>;

    return (
        <ul className="list-projects">
            {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
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