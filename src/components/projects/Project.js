import React, {useContext} from 'react';
import ProjectContext from '../../context/projects/projectContext';

const Project = ({ project }) => {

    // Get the projects state
    const projectsContext = useContext(ProjectContext);
    const { actualProject } = projectsContext;

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => actualProject(project.id)}
            >
                {project.name}
            </button>
        </li>
    );
}

export default Project;