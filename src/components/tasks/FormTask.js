import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';

const FormTask = () => {

    // Extract if a project is active
    const projectsContext = useContext(ProjectContext);
    const { project } = projectsContext;

     // if doesn't selected project
     if(!project) return null;

     // Array destructuring to extract the actual project
     const [actualProject] = project;

    return (
        <div className="form">
            <form>
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Task's Name"
                        name="name"
                    />
                </div>
                <div className="container-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        value="Add Task"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTask;