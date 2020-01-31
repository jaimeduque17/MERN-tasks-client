import React, { Fragment, useState, useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';

const NewProject = () => {

    // Get the form state
    const projectsContext = useContext(ProjectContext);
    const { form, showForm } = projectsContext;

    // Project's state
    const [project, saveProject] = useState({
        name: ''
    });

    // Extract project's name
    const { name } = project;

    // Read input's content
    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    // When the user send a project
    const onSubmitProject = e => {
        e.preventDefault();

        // Validate the project


        // Add to the state


        // Restart the form

    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
                onClick={() => showForm()}
            >
                New Project
        </button>
            {form
                ? (<form
                    className="form-new-project"
                    onSubmit={onSubmitProject}
                >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Project's Name"
                        name="name"
                        value={name}
                        onChange={onChangeProject}
                    />
                    <input
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Add Project"
                    />
                </form>)
                : null
            }
        </Fragment>
    );
}

export default NewProject;